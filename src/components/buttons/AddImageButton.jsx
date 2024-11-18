import { ImageIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ImagesContext } from "../../context/ImagesContext";

export const AddImageButton = () => {
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

	return (
		<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-purple">
			<label className="flex">
				<ImageIcon className="" />
				<input
					type="file"
					multiple
					onChange={handleImageChange}
					hidden
					accept="image/png, image/jpeg, image/webp"
				/>
			</label>
		</div>
	);
};
