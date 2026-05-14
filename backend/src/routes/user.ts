import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInputs } from "@garvit__nmps/zod-common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    prisma: any;
  };
}>();

// A hack to make accelertated prisma client available globally.
userRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

// Signup Route
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInputs.safeParse(body);
  if (!success) {
    return c.json({ error: "inputs are not correct" });
  }
  // Hash the password using Web Crypto API
  const encoder = new TextEncoder();
  const data = encoder.encode(body.password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  const prisma = c.get("prisma");
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        name: body.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json(`${token}`);
  } catch (e) {
    c.status(411);
    return c.json({
      error: "invalid credentials",
    });
  }
});

// Signin Route
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    return c.json({ error: "inputs are not correct" });
  }
  // Hash the password using Web Crypto API
  const encoder = new TextEncoder();
  const data = encoder.encode(body.password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  const prisma = c.get("prisma");
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: hashedPassword,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found",
      });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json(`${token}`);
  } catch {
    c.json({ error: "Something wrong with backend" }, 411);
  }
});
