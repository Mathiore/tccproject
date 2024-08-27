"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props ={
    label: string;
    href: string;
    iconSrc: string;
};


export const SidebarItems =({label, href, iconSrc}: Props) =>{
    const pathname = usePathname();
    const active = pathname === href;
    return(
        <div>
            <Button variant={active ? "sidebarOutline" : "sidebar"} className="h-[52px] sm:w-[270px]  justify-start" asChild>
                <Link href={href}>
                    <Image src={iconSrc} alt={label} className="mr-5" height={32} width={32}></Image>
                    {label}
                </Link>
            </Button>
        </div>
    );
};