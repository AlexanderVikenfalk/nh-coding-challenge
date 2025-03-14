import {z} from 'zod'

export const registrationFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid E-mail address."}),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'The passwords did not match',
            path: [ 'confirmPassword' ]
        })
    }
})

export type formData = z.infer<typeof registrationFromSchema>
export type formErrors = Partial<Record<keyof FormData, string>>