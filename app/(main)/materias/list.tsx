"use client";

import { materias, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
    materias: typeof materias.$inferSelect[];
    activeMateriaId?: typeof userProgress.$inferSelect.activeMateriaId;

}
export const ListMaterias= ({materias, activeMateriaId}:Props) =>{
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id:number) =>{
        if(pending) return;
        if(id ===activeMateriaId){
            return router.push("/aprender")
        }
        startTransition(()=>{
            upsertUserProgress(id)
                .catch(()=> toast.error("Algo deu Errado!"))
        });
    }
    return(
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {materias.map((materias) =>(
                <Card key={materias.id} id={materias.id} title={materias.title} imageSrc={materias.imageSrc} onClick={onClick} disabled={pending} active={materias.id ===activeMateriaId}></Card>
            ))}
        </div>
    )
}