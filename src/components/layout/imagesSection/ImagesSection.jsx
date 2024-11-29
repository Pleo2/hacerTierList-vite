import { useContext } from "react";
import { ImagesContext } from "../../../context/ImagesContext";
import { Droppable} from "react-beautiful-dnd"
import { Image } from "../../Images";
import { useRef } from "react";
import useDragAndDropFromDesktop from "../../../hooks/useDragAndDropFromDesktop";

export const ImagesSection = () => {
	const itemsSection = useRef(null);
	const { images } = useContext(ImagesContext);
	const {handleDragOverFromDesktop, handleDropFromDesktop, isAllowFile} = useDragAndDropFromDesktop();
	
	return (
		<div className="border-gray-800 border-2 w-full min-h-80 "  ref={itemsSection} onDragOver={handleDragOverFromDesktop} onDrop={handleDropFromDesktop}>
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
