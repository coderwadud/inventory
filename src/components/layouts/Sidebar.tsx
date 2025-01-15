import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const router = useRouter();

	return (
		<div className="bg-white max-w-[250px] h-screen p-4 py-8 fixed top-0 left-0 z-10 w-full">
			<div className="flex justify-center items-center mb-6 text-center">
				<Image
					src="/images/logo.png"
					alt="logo"
					width={162}
					height={ 44 }
					sizes="100vw"
                    quality={100}
				/>
			</div>
			<ul>
				{SidebarData.map(item => (
					<li key={item.id} className="mb-1">
						<Link
							className={router.pathname == item.url ? "active menu-item group" : "menu-item group"}
							href={item.url}>
							<Image
								src={item.icon}
								alt={item.title}
								width={24}
								height={24}
								sizes="100vw"
								quality={100}
								className="	transition duration-[0.3s] group-hover:brightness-[100]"
							/>
							<span>{item.title}</span>
                        </Link>
                    </li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

interface SidebarData {
	id: number;
    title: string;
	url: string;
	icon: string;
}

const SidebarData: Array<SidebarData> = [
	{
		id: 1,
        title: "Dashboard",
		url: "/",
		icon: "/images/icon/01.svg"
	},
	{
		id: 2,
        title: "Inventory Database",
		url: "/inventory-database",
		icon: "/images/icon/01.svg"
	},
	{
		id: 3,
        title: "Raffle Creation",
		url: "/raffle-creation",
		icon: "/images/icon/01.svg"
	},
	{
		id: 4,
        title: "User Management",
		url: "/user-management",
		icon: "/images/icon/01.svg"
	},
	{
		id: 5,
        title: "Image Library",
		url: "/image-library",
		icon: "/images/icon/01.svg"
	},
	{
		id: 6,
        title: "Notifications",
		url: "/notifications",
		icon: "/images/icon/01.svg"
	},
]
