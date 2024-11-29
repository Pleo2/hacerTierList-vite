import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";

export default function useImagesToCreateTierListItems() {
	const { addImagesToImagesSection } = useContext(ImagesContext);

	function handleImageChange(event) {
		const files = event.target.files;
		if (!files) return;
		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(files[i]);
			reader.onload = (e) => {
				addImagesToImagesSection(e.target.result);
			};
		}
	}

	return {
		handleImageChange,
	};
}
