"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter  } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


 function DropdownMenuDemo() {
    const router = useRouter();
    const handleSignOut = async () => {
        router.push('/signin');
    }

    const user = { name: "Ashish Sharma", email: "ashishnitro5@gmail.com" };
  //  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
   
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex item-center gap-3 text-gray-4 hover:text-green-400" >
            <Avatar className="h-8 w-8">
  <AvatarImage src="https://avatars.githubusercontent.com/u/94678815?v=4" />
  <AvatarFallback className= "bg-green-500 text-green-900 text-sm font-bold">
    {user.name[0]}
  </AvatarFallback>
</Avatar>
   <div className="hidden md:flex flex-col item-start">
    <span className="test-base font-medium text-gray-400 ">{user.name}</span>
   </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
      
    </DropdownMenu>
  )
}
export default DropdownMenuDemo;