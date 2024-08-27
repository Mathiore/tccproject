import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[320px] h-[320px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/newlogo.svg" fill alt="logo2"></Image>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-800 max-w-[480px] text-center">Aprenda, Pratique, e tenha uma experiência de introdução ao curso de Ciência da Computação com CS++</h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="primary" className="w-full">Cadastre-se Agora</Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="primaryOutline" className="w-full">Já possuo uma conta</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="primary" className="w-full" asChild><Link href="/aprender">Continuar Aprendendo</Link></Button>
            </SignedIn>
          </ClerkLoaded>
        </div>  
      </div>  
    </div>
  )
}
