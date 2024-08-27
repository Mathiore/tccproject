import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({children}:Props) => {
    return (
        <>
            <MobileHeader></MobileHeader>
            <Sidebar className="hidden lg:flex"></Sidebar> 
            <main className="h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto h-full pt-6">
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;