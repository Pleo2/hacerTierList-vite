import { ImageIcon } from "@radix-ui/react-icons";
import useImagesToCreateTierListItems from "../../hooks/useImagesToCreateTierListItems";
import { memo } from "react";

export const AddImageButton = memo(() => {
	const {handleImageChange} = useImagesToCreateTierListItems();

	return (
		<div className=" border-b-4 border-purple">
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
});
