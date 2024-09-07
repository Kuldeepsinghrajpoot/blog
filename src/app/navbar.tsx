import ModeToggle from "./dark-mode";
export default function Navbar() {
    return (
        <div className=" z-50  px-4 py-4 bg-background/50  border-b sticky top-0 backdrop-blur ">
            <div className=" container mx-auto flex  justify-between gap-96  items-center ">
                <div className=" text-2xl font-bold"> Blog Post</div>
                <div className="hidden md:flex space-x-4 items-center">
                    <div><ModeToggle /></div>

                    {/* <Link href="/blog">Blog </Link> */}
                  
                  

                </div>
                <div className="md:hidden ">
                    <div className="flex justify-center items-center gap-4">
                        <div><ModeToggle /></div>
                        <div>
                    {/* <Link href="/blog">Blog </Link> */}

                            {/* <Sheet >
                                <SheetTrigger>Open</SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Blog App</SheetTitle>
                                       
                                        <div className="grid gap-4 py-4 ">
                                            <div className="gap-y-96 w-full h-full">
                                                <ul className="gap-24 w-full h-full ">
                                                    <li className="py-5">
                                                        <Link href="/">Post</Link>
                                                    </li>
                                                   
                                                </ul>
                                            </div>
                                            <div className="space-x-4">
                                                <Button variant={"outline"}>Sign in</Button>
                                                <Button variant={"outline"}>Sign up</Button>
                                            </div>
                                        </div>

                                    </SheetHeader>
                                </SheetContent>
                            </Sheet> */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
