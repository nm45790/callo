"use server";
// "use server" = 이 함수들은 서버에서만 실행됨. 폼의 action에 바로 연결할 수 있어
// (별도 API 라우트/fetch 없이 폼 제출 → DB 저장이 됨).
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type MealType = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";

// 🏋️ 몸무게 추가
export async function addWeight(formData: FormData) {
  const date = new Date(formData.get("date") as string);
  const weightKg = parseFloat(formData.get("weightKg") as string);
  const note = (formData.get("note") as string)?.trim() || null;

  await prisma.weightEntry.create({ data: { date, weightKg, note } });
  revalidatePath("/"); // 저장 후 화면 새로고침 (목록 갱신)
}

// 🍽️ 식사 추가
export async function addMeal(formData: FormData) {
  const date = new Date(formData.get("date") as string);
  const mealType = formData.get("mealType") as MealType;
  const name = (formData.get("name") as string).trim();
  const caloriesRaw = (formData.get("calories") as string)?.trim();
  const calories = caloriesRaw ? parseInt(caloriesRaw, 10) : null;

  await prisma.mealEntry.create({ data: { date, mealType, name, calories } });
  revalidatePath("/");
}

// 삭제 (id를 미리 bind해서 폼 action으로 씀)
export async function deleteWeight(id: number) {
  await prisma.weightEntry.delete({ where: { id } });
  revalidatePath("/");
}

export async function deleteMeal(id: number) {
  await prisma.mealEntry.delete({ where: { id } });
  revalidatePath("/");
}
