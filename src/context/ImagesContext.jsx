import { createContext, useState } from "react";

export const ImagesContext = createContext(null);

export const ImagesContextProvider = ({ children }) => {
	const [images, setImages] = useState([[], [], [], [], [], []]);
	const [activeId, setActiveId] = useState(null);
	console.log(images);

	const addImagesToImagesSection = (image) => {
		if (!images[5].includes(image)) {
			const arrayNew = [...images[5], image];
			setImages((prev) => {
				return [prev[0], prev[1], prev[2], prev[3], prev[4], arrayNew];
			});
		}
	};

	const cleanImages = () => value?.setImages([]);

	const value = {
		images,
		setImages,
		addImagesToImagesSection,
		cleanImages,
		activeId,
		setActiveId,
	};

	return (
		<ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
	);
};
