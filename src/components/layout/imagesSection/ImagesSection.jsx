import { useContext } from "react";
import { ImagesContext } from "../../../context/ImagesContext";

export const ImagesSection = () => {
	const { images } = useContext(ImagesContext);

	return (
		<div className="border-gray-800 border-2 w-full min-h-80 ">
			{images[5].length > 0 ? (
				images[5].map((item) => {
					return (
						<img
							key={item.length}
							className="w-20 h-20 aspect-square"
							src={item}
							alt="Picture, than your add"
						/>
					);
				})
			) : (
				<></>
			)}
			{/* <SortableSection idDroppable="images-section" images={value?.images as string[]} sensors={sensors} handleDragEnd={handleDragEnd} typeColision={closestCenter} /> */}
		</div>
	);
};
