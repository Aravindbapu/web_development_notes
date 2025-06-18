"use server"
import { z } from 'zod'
import fs from "fs/promises"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  add: z.string().min(1, "Address is required"),
});

export const submitAction = async (e) => {
  try {
    const formData = Object.fromEntries(e.entries());
    const validatedData = formSchema.parse(formData);

    await fs.writeFile(
      "bapu.txt",
      `Name is ${validatedData.name} and Address is ${validatedData.add}`
    );
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors };
    } else {
      return { success: false, errors: [{ message: "Unexpected error occurred" }] };
    }
  }
};