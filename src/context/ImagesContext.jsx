import { createContext, useState } from "react";

export const ImagesContext = createContext(null);

export const ImagesContextProvider = ({ children }) => {
	const [images, setImages] = useState([
		{
			rowId: 0, 
			img: "https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg"
		}, 
		{
			rowId: 0, 
			img: "https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546123.jpg"
		}, 
		{
			rowId: 0, 
			img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzJtpeHgfR79jOybZZO9Ar65nSE6k-XnU6A&s"
		}, 
		{ 
			rowId: 1, 
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSfJR_mfwbUhB3RSuItgA6u86gdcg9zDaFA&s"
		},
		{ 
			rowId: 1, 
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1D54DrNXJK385KnKezexYtNEf_QPmYoR9w&s"
		}
	]);
	const [activeId, setActiveId] = useState(null);

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
		addImagesToImagesSection,
		cleanImages,
		activeId,
		setActiveId,
	};

	return (
		<ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
	);
};
