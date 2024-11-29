import { ImagesContext } from "../context/ImagesContext";
import { useContext } from "react";
import { reorderArr } from "../utils/reorderArr";

export default function useDragEnd() {
	const { setImages } = useContext(ImagesContext);
	function onDragEnd(result) {
		const { source, destination } = result;

		if (!destination) {
			return;
		}

		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			setImages((prevImages) =>
				reorderArr(prevImages, source.index, destination.index),
			);
		}

		if (source.droppableId !== destination.droppableId) {
			const rowDestination = Number.parseInt(
				destination.droppableId.charAt(destination.droppableId.length - 1),
			);
			setImages((prevImages) => {
				const newImages = [...prevImages];
				const i = prevImages.findIndex(
					(item) => item.img === result.draggableId,
				);
				if (i !== -1) {
					newImages[i] = {
						...newImages[i],
						rowId: rowDestination,
					};
					return reorderArr(newImages, source.index, destination.index);
				}
			});
		}
	}
	return {
		onDragEnd,
	};
}
