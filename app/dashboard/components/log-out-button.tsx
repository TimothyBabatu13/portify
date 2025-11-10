'use client';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export const LogOutButton = () => {
    const router = useRouter();
    const handleLogout = async () => {
        console.log("Logging out...");
        const res = await fetch('/api/auth/logout', { method: 'GET' });
        if(res){
            router.push('/')
        }
        
    };

    return (
        <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
        >
            Sign Out
        </Button>
    )
}