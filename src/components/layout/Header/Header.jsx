import { useContext, useEffect, useState } from "react";
import Logo from "/images/icon.ico";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";

import {
	HamburgerMenuIcon,
	MagicWandIcon,
	PersonIcon,
	PlusIcon,
} from "@radix-ui/react-icons";
import { ThemeContext } from "@/context/ThemeContext";

const ICON_SIZE = 16;

export const Header = () => {
	const { THEMES, nameTheme, setNameTheme } = useContext(ThemeContext);

	return (
		<>
			<nav className="flex justify-between items-center w-full h-max my-6">
				<a href="/">
					<img
						src={Logo}
						className="w-10	"
						alt={"Picture, logo de la marca"}
					/>
				</a>

				<section className="h-max w-max flex items-center justify-between gap-6">
					{/* <div
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
					</div> */}

					{/* <div className=" md:p-2 md:border-b-4 md:border-red  md:hover:bg-red md:hover:text-foreground md:dark:hover:text-foreground">
						<PersonIcon
							onClick={() => console.log("helloworld")}
							className="text-red md:hidden"
							height={ICON_SIZE}
							width={ICON_SIZE}
						/>
						<span className="hidden font-semibold md:block ">Usuario</span>
					</div> */}

					<HamburgerMenuIcon
						onClick={() => console.log("helloworld")}
						className="text-blue md:hidden"
						height={ICON_SIZE}
						width={ICON_SIZE}
					/>

					<Select className="font-mono">
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder={nameTheme} />
						</SelectTrigger>
						<SelectContent className="bg-background">
							{THEMES.map((theme) => (
								<SelectItem
									onFocus={() => {
										setNameTheme(theme);
									}}
									key={theme}
									value={theme}
								>
									{theme}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</section>
			</nav>
		</>
	);
};
