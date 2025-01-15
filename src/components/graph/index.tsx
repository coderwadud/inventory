import React from "react";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GraphComponentProps {}

const GraphComponent: React.FC<GraphComponentProps> = () => {
    return (
        <Image
            src="/images/graph.png"
            alt="icon"
            width={728}
            height={ 344 }
            sizes="100vw"
            quality={100}
            className="w-full h-[340px]"
        />
	);
};

export default GraphComponent;
