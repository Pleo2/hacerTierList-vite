import { useRef } from "react";
import { ButtonSection } from "./components/layout/buttonSection/ButtonSection";
import { Header } from "./components/layout/Header/Header";
import { ImagesSection } from "./components/layout/imagesSection/ImagesSection";
import { TierList } from "./components/layout/tierList/TierList";
import { ContentEditableText } from "./components/ContentEditableText";


// contexts
import { DragDropContext } from "react-beautiful-dnd";

// customHooks
import useDownloadHtml from "./hooks/useDownloadHtml";
import useDragEnd from "./hooks/useDragEnd";
import DeleteItem from "./components/buttons/DeleteItem";
import { useContext } from "react";
import { ImagesContext } from "./context/ImagesContext";

function App() {
	const canvasToSave = useRef(null);
	const { setIsDrag } = useContext(ImagesContext);
	const { dowloadHtml } = useDownloadHtml({ divToCapture: canvasToSave });
	const { onDragEnd } = useDragEnd();

	return (
		<>
			<div className="bg-background antialiased md:w-[708px] lg:w-[1028px] m-auto px-6">
				<Header />
				<DragDropContext
					onDragStart={() => setIsDrag(true)}
					onDragEnd={onDragEnd}
				>
					<section ref={canvasToSave} className="bg-background">
						<div className="bg-background flex justify-between items-center mb-4">
							<ContentEditableText
								className={" text-5xl font-sans p-2 bg-background"}
								category={"Titulo de la TierList"}
							/>
							<DeleteItem />
						</div>
						<TierList />
					</section>

					<ButtonSection downloadFn={dowloadHtml} />
					<ImagesSection />
				</DragDropContext>
			</div>
		</>
	);
}

export default App;
