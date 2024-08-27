import { getMaterias, getUserProgress } from "@/db/queries";
import { ListMaterias } from "./list";
import { userProgress } from "@/db/schema";
import css from "styled-jsx/css";


const MateriasPage = async () => {
    const materiaData = await getMaterias();
    const UserProgressData= await getUserProgress();
    const [materias, userProgress] = await Promise.all([
        materiaData, UserProgressData,
    ]);


    return(
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2-xl font-bold text-neutral-700">
                Selecione uma Matéria
            </h1>
            <ListMaterias
                materias={materiaData}
                activeMateriaId={userProgress?.activeMateriaId}
            />
        </div>
    )
}

export default MateriasPage;