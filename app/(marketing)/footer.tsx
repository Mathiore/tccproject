import { Button } from "@/components/ui/button";

export const Footer = () =>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button>
                       <p>Introdução a Ciência da Computação</p>
                </Button>
                <Button>
                       <p>Paradigmas da Programação</p>
                </Button>
                <Button>
                       <p>Algoritmos e Programação</p>
                </Button>
                <Button>
                       <p>Cálculo I</p>
                </Button>
            </div>
        </footer>
    );
};