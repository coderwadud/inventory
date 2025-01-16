import React from "react";
import CardComponent from "../Card";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
			{CounterData.map(item => (
				<div key={item.id}>
					<CardComponent title={item.title} icon={item.icon} count={item.count} />
				</div>
			))}
		</div>
	);
};

export default Counter;

interface CounterDataType {
	id: number;
    title: string;
    icon: string;
    count: string;
}

const CounterData: Array<CounterDataType> = [
	{
		id: 1,
        title: "Active Raffles",
        icon: "/images/icon/1.svg",
        count: "12"
	},
	{
		id: 2,
        title: "Active Raffles",
        icon: "/images/icon/2.svg",
        count: "12"
	},
	{
		id: 3,
        title: "Low Stock Items",
        icon: "/images/icon/3.svg",
        count: "12"
	},
	{
		id: 4,
        title: "Users",
        icon: "/images/icon/4.png",
        count: "12"
	},
]
