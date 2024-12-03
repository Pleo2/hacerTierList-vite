import { ImagesContext } from "../../context/ImagesContext";
// --------------------------------------------------------
import { EraserIcon } from "@radix-ui/react-icons";
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
					<EraserIcon />
				</button>
			</div>
		</>
	);
});
