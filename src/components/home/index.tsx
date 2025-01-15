import React from "react";
import Counter from "../counter";
import Dashboard from "../dashboard";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className="home-page">
			<Counter />
			<Dashboard />
		</div>
	);
};

export default Home;
