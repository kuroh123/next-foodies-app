import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = async (formData) => {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    slug: formData.get("title").replace(" ", "-").toLowerCase(),
  };
  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
};
