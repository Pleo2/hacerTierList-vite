import { useContext } from "react";
import { ImagesContext } from "../../../context/ImagesContext";
import { Droppable} from "react-beautiful-dnd"
import { Image } from "../../Images";

export const ImagesSection = () => {
	const { images } = useContext(ImagesContext);

	return (
		<Droppable
			droppableId={"row"}
			type="IMAGE"
			direction="horizontal"
			isCombineEnabled={false}
		>
			{(provided) => (
				<div
					className="border-gray-800 border-2 w-full min-h-80 flex flex-wrap bg-red-300"
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{images.length > 0 ? (
						images.map((item, index) => {
							if (item.rowId === 5) {
								return (
									<Image key={item.img} provided={provided} item={item} index={index}/>
								);
							}
						})
					) : (
						<></>
					)}
					{/* <SortableSection idDroppable="images-section" images={value?.images as string[]} sensors={sensors} handleDragEnd={handleDragEnd} typeColision={closestCenter} /> */}
				</div>
			)}
		</Droppable>
	);
};
