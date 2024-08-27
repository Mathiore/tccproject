import { cache } from "react";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import {materias, userProgress } from "@/db/schema";
import { eq } from "drizzle-orm";


export const getUserProgress = cache(async()=>{
    const{userId} = await auth();
    if(!userId){
        return null;
    }
    const data=await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with:{
            activeMateria:true,
        },
    });
    return data;
});

export const getMaterias = cache(async()=>{
    const data = await db.query.materias.findMany();

    return data;
});

export const getMateriaById = cache(async(materiaId:number) =>{
    const data = await db.query.materias.findFirst({
        where: eq(materias.id, materiaId),
    });
    
    return data;
});