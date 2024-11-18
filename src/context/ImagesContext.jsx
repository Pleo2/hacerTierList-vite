import { createContext, useState } from "react";

export const ImagesContext = createContext(null);

export const ImagesContextProvider = ({ children }) => {
	const [images, setImages] = useState([
		[
			"https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg",
			"https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546123.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzJtpeHgfR79jOybZZO9Ar65nSE6k-XnU6A&s",
		],
		[
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSfJR_mfwbUhB3RSuItgA6u86gdcg9zDaFA&s",
			"https://play-lh.googleusercontent.com/EEZRsDvcSq11pwv5SVEyVlqUe5r8nP1r4OL6LM8co4hBX_F1nERK1gtZ-Q8o70MJ_d4",
		],
		[],
		[],
		[],
		[],
	]);
	const [activeId, setActiveId] = useState(null);
	console.log(images);

	const addImagesToImagesSection = (image) => {
		if (!images[5].includes(image)) {
			setImages((prev) => {
				return [prev[0], prev[1], prev[2], prev[3], prev[4], [...prev[5], image]];
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
