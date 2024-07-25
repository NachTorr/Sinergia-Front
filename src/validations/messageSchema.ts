import { z } from "zod";

export const messageSchema = z.object({
  title: z
    .string()
    .min(3, "El título debe tener al menos 3 caracteres")
    .max(20, "El nombre no debe tener más de 20 caracteres"),
  description: z
    .string()
    .min(27, { message: "La descripción debe tener al menos 20 caracteres" })
    .max(2000, {
      message: "La descripción no debe exceder los 2000 caracteres",
    }),
});
