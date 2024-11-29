import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { useState } from "react";

export default function useDragAndDropFromDesktop() {
	const [isAllowFile, setIsAllowFile] = useState(true);
	const { addImagesToImagesSection } = useContext(ImagesContext);

	function handleDragOverFromDesktop(e) {
		e.preventDefault();
		// console.log(itemsSection.current);
		const { currentTarget, dataTransfer } = e;

		currentTarget.classList.add("bg-gray-200");
		currentTarget.classList.add("dark:bg-[#1d1d1d]");

		if (dataTransfer.types.includes("Files")) {
		} else {
			setIsAllowFile(false);
		}
	}

	function handleDropFromDesktop(e) {
		e.preventDefault();
		const { currentTarget, dataTransfer } = e;

		currentTarget.classList.remove("bg-gray-200");
		currentTarget.classList.remove("dark:bg-[#1d1d1d]");

		if (dataTransfer.types.includes("Files")) {
			const { files } = dataTransfer;

			if (!files) {
				return;
			}

			for (let i = 0; i < files.length; i++) {
				const reader = new FileReader();
				reader.readAsDataURL(files[i]);
				reader.onload = (e) => {
					addImagesToImagesSection(e.target.result);
				};
			}
		}
	}

	return {
		handleDropFromDesktop,
		handleDragOverFromDesktop,
		isAllowFile,
		setIsAllowFile,
	};
}
