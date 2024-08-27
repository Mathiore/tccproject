import { userProgress } from "@/db/schema";
import { getUserProgress } from "@/db/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";


const AprenderPage = async () => {
    const userProgressData = getUserProgress();

    const[] = await Promise.all([
        userProgressData
    ]);

    if(!userProgress || !userProgress.activeMateriaId) {
        redirect("/materias");
    }  
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{ title: "Introdução a Ciência da Computação", imageSrc:"/introducao.svg"}} hearts={10} points={100} hasActiveSubscription={false}>

                </UserProgress>
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Introdução a Ciência da Computação"/>
                <div className="space-y-4">
                    <div className="h-[700px] w-full"></div>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default AprenderPage;