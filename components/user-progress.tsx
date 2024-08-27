import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";


type Props = {
    activeCourse: {imageSrc: string; title:string};
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({activeCourse, hearts, points, hasActiveSubscription }:Props) => {
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/materias">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} className="mr-2" width={32} height={32} />
                </Button>
            </Link>
            <Link href="/loja">
                <Button variant="ghost">
                    <Image src="/coin.svg" height={28} width={28} alt="Loja" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/loja">
                <Button variant="ghost">
                    <Image src="/heart.svg" height={28} width={28} alt="Hearts" className="mr-2"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>
        </div>
    );
};