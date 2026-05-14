import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@garvit__nmps/zod-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any; //couldn't find out its type if you did know please leave a comment
    prisma: any; //couldn't find out its type if you did know please leave a comment
  };
}>();

// A hack to make accelerated prisma client available globally.
blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

// Authorization middleware checks if the user is signin/signup or not
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const user = await verify(header, c.env.JWT_SECRET);
  if (user) {
    c.set("userId", user.id);
    await next();
    return c.json({ msg: "sucessfull" });
  } else {
    c.status(403);
    return c.json({ message: "you are not logged in" });
  }
});

// Route to post blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    return c.json({ msg: "sent wrong inputs" });
  }
  const userId = c.get("userId");
  const prisma = c.get("prisma");
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        // sorry there is a typo
        authourId: userId,
      },
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json({ message: "could not upload blog" });
  }
});

// Route to edit blog
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "sent wrong inputs" });
  }
  const prisma = c.get("prisma");
  try {
    const blog = await prisma.post.update({
      data: {
        title: body.title,
        content: body.content,
      },
      where: {
        id: body.id,
      },
    });
  } catch {
    c.status(411);
    return c.json({ error: "could not update blog" });
  }
});

// Route to get details about user and all of his blogs(for user profile page)
blogRouter.get("/user", async (c) => {
  const prisma = c.get("prisma");
  const userId = c.get("userId");
  try {
    const userDetails = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        posts: true,
      },
    });
    return c.json({ userDetails });
  } catch {}
});
// Route to get a blog by id
blogRouter.get("key/:id", async (c) => {
  const prisma = c.get("prisma");
  const id = c.req.param("id");
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ blog });
  } catch {
    c.status(411);
    return c.json({ msg: "blog not found" });
  }
});

// Route to get random blogs max 10 at a time.

blogRouter.get("/bulk", async (c) => {
  const prisma = c.get("prisma");
  const limit = 10; // Number of blogs to return

  try {
    // Fetch all existing blog IDs
    const allBlogs = await prisma.post.findMany({
      select: { id: true }, // Only fetch the `id` field
    });

    const existingIds = allBlogs.map((blog: any) => blog.id);

    // Helper function to shuffle array and pick the first 'n' elements
    const getRandomIds = (ids: number[], limit: number): number[] => {
      return ids
        .sort(() => 0.5 - Math.random()) // Shuffle the array
        .slice(0, limit); // Pick the first 'n' shuffled elements
    };

    // Get 10 random blog IDs from the existing IDs
    const randomIds = getRandomIds(existingIds, limit);

    // Fetch blogs with the random IDs
    const blogs = await prisma.post.findMany({
      where: {
        id: { in: randomIds },
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ blogs });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch blogs" }, 500);
  }
});
