import { ImagesContext } from "../../context/ImagesContext";
import { Eraser } from "lucide-react";
// --------------------------------------------------------
import { EraserIcon } from "lucide-react";
import { useContext } from "react";
import { memo } from "react";


export const EraserAllImagesButton = memo(() => {
	const {setImages} = useContext(ImagesContext)
	
	const eraseImages = () => {
		setImages([])
	}
	

	return (
		<>
			<div className=" border-b-4 border-red">
				<button
					type="button"
					onClick={eraseImages}
				>
					<Eraser />
				</button>
			</div>
		</>
	);
});
