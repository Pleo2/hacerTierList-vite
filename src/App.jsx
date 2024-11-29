import { useContext, useRef } from "react";
import { ButtonSection } from "./components/layout/buttonSection/ButtonSection";
import { Header } from "./components/layout/Header/Header";
import { ImagesSection } from "./components/layout/imagesSection/ImagesSection";
import { TierList } from "./components/layout/tierList/TierList";
import { ContentEditableText } from "./components/ContentEditableText";
import { reorderArr } from "./utils/reorderArr";
// contexts
import { ImagesContext } from "./context/ImagesContext";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
	const canvasToSave = useRef(null);
	const { setImages } = useContext(ImagesContext);

	async function dowloadHtml() {
		const tierContainer = canvasToSave;
		console.log(tierContainer);

		if (!tierContainer) {
			throw new Error("Element canvasToSave not found");
		}

		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");

		const { default: html2CanvasPro } = await import(
			"https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/+esm"
		);

		html2CanvasPro(tierContainer.current)
		.then((canvas) => {
			const ctx = document.createElement("canvas").getContext("2d");
			ctx.drawImage(canvas, 0, 0);
			const imgUrl = canvas.toDataURL("image/png");

			const downloadLink = document.createElement("a");
			downloadLink.download = tierContainer.current.textContent;
			downloadLink.href = imgUrl;
			downloadLink.click();
		})
		.catch((error) => {
			console.error("Error capturing HTML content:", error);
			// Handle errors appropriately (e.g., display an error message)
		});
	}
	
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
	return (
		<>
			<div className="antialiased md:w-[708px] lg:w-[1028px] m-auto px-6">
				<Header />
				<DragDropContext onDragEnd={onDragEnd}>
					<div ref={canvasToSave}>
						<ContentEditableText
							className={" text-5xl font-sans p-2 bg-background"}
							category={"Titulo de la TierList"}
						/>
						<TierList />
					</div>

					<ButtonSection downloadFn={dowloadHtml} />
					<ImagesSection />
				</DragDropContext>
			</div>
		</>
	);
}

export default App;
