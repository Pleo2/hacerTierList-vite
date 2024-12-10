import { ImagesContext } from "../context/ImagesContext";
import { useContext } from "react";
import { reorderArr } from "../utils/reorderArr";

export default function useDragEnd() {
	const { setImages, setIsDrag } = useContext(ImagesContext);
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
			if (destination.droppableId === 'Row-delete') {
				const imagesToDelete = result.draggableId;

				setImages((prevImages) => {
					const newImages = [...prevImages];

					if (prevImages.length === 1) {
						return [];
					} 


					const imagesFilter = newImages.filter(item => item.img !== result.draggableId);
					return imagesFilter;
				})

				setTimeout(()=> { setIsDrag(false);	}, 1000)
				
				return
			}


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

		setIsDrag(false);	
	}
	return {
		onDragEnd,
	};
}
