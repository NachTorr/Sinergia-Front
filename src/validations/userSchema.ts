import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre no debe tener más de 20 caracteres"),
  lastName: z
    .string()
    .min(3, "El apellido debe tener al menos 3 caracteres")
    .max(20, "El apellido no debe tener más de 20 caracteres"),
});
