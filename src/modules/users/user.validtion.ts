import z from "zod";

export const addUserSchema = {
    body:z.strictObject({
        name:z.string({error:"name is required"}).min(1,{message:"name is required"}).max(20,{message:"name must be less than 20 characters"}),
        email:z.email({error:"email is required"}).min(1,{message:"email is required"}),
        password:z.string().min(8).max(20),
        phone: z.string().min(11).max(11),
        confirmPassword:z.string().min(8).max(20),
    }).superRefine((data, ctx)=>{
        if(data.password !== data.confirmPassword) {
            ctx.addIssue({code: "custom",message: "Passwords do not match"});
        }
    })
}


export const getPostSchema = {
    params: z.object({
        id: z.string().min(1, {
            message: "Post id is required"
        })
    })
};