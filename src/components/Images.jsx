import { Draggable } from "react-beautiful-dnd"

export const Image = ({item, index, provided}) => {
 return (
		<Draggable draggableId={item.img} index={index}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<img
						isDragging={snapshot.isDragging}
						{...provided.dragHandleProps}
						className="w-20 h-20 aspect-square"
						src={item.img}
						alt="Picture, than your add"
					/>
				</div>
			)}
		</Draggable>
	);
}