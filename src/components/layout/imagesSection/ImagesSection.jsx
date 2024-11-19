import { useContext } from "react";
import { ImagesContext } from "../../../context/ImagesContext";

export const ImagesSection = () => {
	const { images } = useContext(ImagesContext);

	return (
		<div className="border-gray-800 border-2 w-full min-h-80 flex flex-wrap">
			{images.length > 0 ? (
				images.map((item) => {
					if (item.rowId === 5) {
						return (
							<img
								key={item.img}
								className="w-20 h-20 aspect-square"
								src={item.img}
								alt="Picture, than your add"
							/>
						);
					}
				})
			) : (
				<></>
			)}
			{/* <SortableSection idDroppable="images-section" images={value?.images as string[]} sensors={sensors} handleDragEnd={handleDragEnd} typeColision={closestCenter} /> */}
		</div>
	);
};
