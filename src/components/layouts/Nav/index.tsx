import Image from "next/image";
import Link from "next/link";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavProps {}

const Nav: React.FC<NavProps> = () => {

	return (
		<div className="flex p-6 justify-between items-center bg-white border-b border-[#D0D5DD] fixed top-0 right-0 w-[calc(100%-250px)]">
			<form className="relative max-w-[320px] w-full">
				<span className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2">
					<Image
					src="/images/icon/search.svg"
					alt="logo"
					width={20}
					height={20}
					sizes="100vw"
                    quality={100}
					/>
				</span>
				<input className="p-2 bg-white border border-[#D0D5DD] pl-9 outline-0 w-full" type="text" placeholder="Search..." />
			</form>
			<div className="flex items-center gap-4">
				<Link href="/" className="w-10 h-10 block">
					<Image
					src="/images/icon/bell.svg"
					alt="logo"
					width={40}
					height={40}
					sizes="100vw"
					quality={100}
					/>
				</Link>
				<Link href="/" className="w-10 h-10 block">
					<Image
					src="/images/icon/bell.svg"
					alt="logo"
					width={40}
					height={40}
					sizes="100vw"
					quality={100}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
