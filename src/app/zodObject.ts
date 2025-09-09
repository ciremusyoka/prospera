import * as zod from 'zod';


export const signupSchema = zod.object({
  email: zod.string().email('Invalid email address'),
  password: zod.string().min(6, 'Password must be at least 6 characters long'),
});

export type SignupT = zod.infer<typeof signupSchema>;

export const loginSchema = zod.object({
  email: zod.string().email('Invalid email address'),
  password: zod.string().min(1, 'Password is required'),
});

export type LoginT = zod.infer<typeof loginSchema>;