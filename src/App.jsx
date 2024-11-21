import { useContext } from "react";
import { ButtonSection } from "./components/layout/buttonSection/ButtonSection";
import { Header } from "./components/layout/Header/Header";
import { ImagesSection } from "./components/layout/imagesSection/ImagesSection";
import { TierList } from "./components/layout/tierList/TierList";
import { reorderArr } from "./utils/reorderArr";
// contexts
import { ImagesContext } from "./context/ImagesContext";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
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
				const i = prevImages.findIndex((item) => item.img === result.draggableId);
				if (i !== -1) {
					newImages[i] = {
						...newImages[i],
						rowId: rowDestination,
					};
					return reorderArr(newImages, source.index, destination.index)
				}				
			})
		}
	}
	return (
		<>
			<div className="antialiased md:w-[708px] lg:w-[1028px] m-auto px-6">
				<Header />
				<DragDropContext onDragEnd={onDragEnd}>
					<TierList />
					<ButtonSection />
					<ImagesSection />
				</DragDropContext>
			</div>
		</>
	);
}

export default App;
