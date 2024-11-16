

import {
	createContext,
	useState,
} from "react";

import replaceArrayInArray from "../utils/replaceArrayInArray";



export const ImagesContext = createContext(null);

export const ImagesContextProvider = ({
	children,
}) => {
	const [images, setImages] = useState([[],[],[],[],[],[]]);
	const [activeId, setActiveId ] = useState(null);

	const addImagesToImagesSection = (image) => {
		if (!images.includes(image)) {
			setImages((prev) => replaceArrayInArray(prev, prev[5].push(toString(image)), 5));
		}
	}

	const cleanImages = () => value?.setImages([]);

	const value = {
		images,
		setImages,
		addImagesToImagesSection,
		cleanImages,
		activeId, 
		setActiveId
	};

	return (
		<ImagesContext.Provider value={value}>
			{children}
		</ImagesContext.Provider>
	);

};

