import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItems } from "./sidebar-items";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props ={
    className?: string;
};


export const Sidebar = ({className}:Props) =>{
    return(
        <div className={cn(" flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 flex-col pr-0 lg:pr-10", className,)}>
            <Link href="/aprender">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="./mascot.svg" height={120} width={120} alt="Mascot"/>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1 -tracking-wide">
                <SidebarItems label="Trilha de Apredizagem" href="/aprender" iconSrc="/home.svg"></SidebarItems>
                <SidebarItems label="Pontuação" href="/pontuacao" iconSrc="/pontuacao.svg"></SidebarItems>
                <SidebarItems label="Objetivos" href="/objetivos" iconSrc="/objetivos.svg"></SidebarItems>
                <SidebarItems label="Loja" href="/loja" iconSrc="/loja.svg"></SidebarItems>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton></UserButton>
                </ClerkLoaded>
            </div>
        </div>
        
    );
};