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


export const updateUserSchema = zod.object({
    firstName: zod.string().min(1, 'First name is required'),
    lastName: zod.string().min(1, 'Last name is required'),
});

export type UpdateUserT = zod.infer<typeof updateUserSchema>;

export const changePasswordSchema = zod.object({
    currentPassword: zod.string().min(1, 'Current password is required'),
    newPassword: zod.string().min(6, 'New password must be at least 6 characters long'),
    confirmNewPassword: zod.string().min(1, 'Please confirm your new password'),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ['confirmNewPassword'],
});

export type ChangePasswordT = zod.infer<typeof changePasswordSchema>;
