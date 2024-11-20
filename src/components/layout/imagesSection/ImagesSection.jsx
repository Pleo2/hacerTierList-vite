import { useContext } from "react";
import { ImagesContext } from "../../../context/ImagesContext";
import { Droppable} from "react-beautiful-dnd"
import { Image } from "../../Images";

export const ImagesSection = () => {
	const { images } = useContext(ImagesContext);

	return (
		<div className="border-gray-800 border-2 w-full min-h-80">
			<Droppable
				droppableId={"Row-5"}
				type="IMAGE"
				direction="horizontal"
				isCombineEnabled={false}
			>
				{(provided) => (
					<div
						className=" flex flex-wrap w-full"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{images.length > 0 ? (
							images.map((item, index) => {
								if (item.rowId === 5) {
									return (
										<Image
											key={item.img}
											_provided={provided}
											item={item}
											index={index}
										/>
									);
								}
							})
						) : (
							<></>
						)}
					</div>
				)}
			</Droppable>
		</div>
	);
};
