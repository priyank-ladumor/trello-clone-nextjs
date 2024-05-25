
import Image from "next/image"
import TrelloLogo from "@/public/assets/images/Trello-logo.png"
import { Input } from "@/components/ui/input"
import {
    LogOut,
    User,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { auth, signOut } from "@/auth"

const Header = async () => {
    const session = await auth();
    return (
        <header className="bg-[#f2f2f2] px-3 flex justify-between items-center" >
            <div className="" >
                <Image src={TrelloLogo} alt="trello logo" width={150} height={50} placeholder="blur" />
            </div>
            <div className="flex" >
                <form action="" >
                    <Input type="text" placeholder="Search here.." />
                    <button type="submit" className="hidden" >search</button>
                </form>
                <div className="ms-2" >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            {/* <Button variant="outline">Open</Button> */}
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                {/* <AvatarFallback>CN</AvatarFallback> */}
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem >
                                    <User className="mr-2 h-4 w-4" />
                                    <span>{session?.user.name}</span>
                                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <form action={async () => {
                                "use server";
                                await signOut({ redirect: true, redirectTo: "/login" });
                            }} >
                                <DropdownMenuItem className="cursor-pointer" >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </form>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header
