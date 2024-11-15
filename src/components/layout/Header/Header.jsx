import HeaderLogoDark from "/images/headerLogoDark.webp";

import {
    HamburgerMenuIcon,
    MagicWandIcon,
    PersonIcon,
    PlusIcon,
} from "@radix-ui/react-icons";

const ICON_SIZE = 22;

export const Header = () => {
    return (
        <>
            <nav className="flex justify-between items-center w-full h-max py-4">
                <a href="/">
                    <img src={HeaderLogoDark} className="w-32"/>
                </a>

                <section className="h-max w-max flex items-center justify-between gap-6">
                    <div
                        className="flex md:p-2 md:border-purple md:border-b-4
					md:hover:bg-purple md:hover:text-foreground md:dark:hover:text-foreground"
                    >
                        <PlusIcon
                            onClick={() => console.log("helloworld")}
                            className="text-green md:hidden "
                            height={ICON_SIZE}
                            width={ICON_SIZE}
                        />
                        <span className="hidden md:block font-semibold">
                            Crear TierList
                        </span>
                    </div>

                    <div className=" md:p-2 md:border-b-4 md:border-redOrange  md:hover:bg-redOrange md:hover:text-foreground md:dark:hover:text-foreground">
                        <PersonIcon
                            onClick={() => console.log("helloworld")}
                            className="text-redOrange md:hidden"
                            height={ICON_SIZE}
                            width={ICON_SIZE}
                        />
                        <span className="hidden font-semibold md:block ">Usuario</span>
                    </div>

                    <div className=" md:p-2 md:border-b-4 md:border-green md:hover:bg-green md:dark:hover:text-foreground">
                        <MagicWandIcon
                            onClick={() => console.log("helloworld")}
                            className="text-purple md:hidden"
                            height={ICON_SIZE}
                            width={ICON_SIZE}
                        />
                        <span className="hidden font-semibold md:block ">ThemeName</span>
                    </div>

                    <HamburgerMenuIcon
                        onClick={() => console.log("helloworld")}
                        className="text-blue md:hidden"
                        height={ICON_SIZE}
                        width={ICON_SIZE}
                    />
                </section>
            </nav>
        </>
    );
};
