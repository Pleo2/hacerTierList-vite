import { createContext, useState } from "react";

export const ImagesContext = createContext(null);

export const ImagesContextProvider = ({ children }) => {
	const [images, setImages] = useState([
	]);
	const [activeId, setActiveId] = useState(null);
	const [isDrag, setIsDrag] = useState(false);

	const addImagesToImagesSection = (image) => {
		// Check if image already exists using a Set for efficient duplicate detection
		const uniqueImages = new Set(images.map((item) => item.img));

		if (!uniqueImages.has(image)) {
			setImages((prevImages) => [
				...prevImages,
				{ rowId: 5, img: image },
			]);
		}
	};

	const cleanImages = () => value?.setImages([]);

	const value = {
		images,
		setImages,
		isDrag, 
		setIsDrag,
		addImagesToImagesSection,
		cleanImages,
		activeId,
		setActiveId,
	};

	return (
		<ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
	);
};
