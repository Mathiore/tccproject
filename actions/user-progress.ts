"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import db from "@/db/drizzle";
import { getMateriaById, getUserProgress } from "@/db/queries";
import { userProgress, userProgressRelations } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const upsertUserProgress = async(materiaId:number) =>{
    const{userId} = await auth ();
    const user = await currentUser();

    if(!userId || !user){
        throw new Error("Não Autorizado");
    };
    const materia = await getMateriaById(materiaId);

    if(!materia){
        throw new Error("Matéria não encontrada!");
    };
    const existingUserProgress = await getUserProgress();

    if(existingUserProgress){
        await db.update(userProgress).set({
            activeMateriaId: materiaId,
            userName: user?.firstName || "User",
            userImageSrc: user?.imageUrl || "/mascot.svg",
        });
        revalidatePath("/materias");
        revalidatePath("/aprender");
        redirect("/aprender");
    };

    await db.insert(userProgress).values({
        userId,
        activeMateriaId: materiaId,
        userName: user?.firstName || "User",
        userImageSrc: user?.imageUrl || "/mascot.svg",
    });

    revalidatePath("/materias");
    revalidatePath("/aprender");
    redirect("/aprender");
}