import z from "zod";

// Signup type
export const signupInputs = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
});

export type SignupInputs = z.infer<typeof signupInputs>;

// Signin type
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInput>;

// Create blog type
export const createBlogInput = z.object({
  title: z.string().min(1),
  content: z.string().min(3),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

// Update Blog type
export const updateBlogInput = z.object({
  title: z.string().min(1),
  content: z.string().min(3),
  id: z.number(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
