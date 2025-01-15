import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			<div className="w-[calc(100%-250px)] p-6 ml-auto mt-[90px]">
				{children}
			</div>
			<Sidebar />
		</Fragment>
	);
};

export default Layout;
