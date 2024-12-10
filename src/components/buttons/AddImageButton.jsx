import useImagesToCreateTierListItems from "../../hooks/useImagesToCreateTierListItems";
import { memo } from "react";
import { ImagePlus } from "lucide-react";

export const AddImageButton = memo(() => {
	const {handleImageChange} = useImagesToCreateTierListItems();

	return (
		<div className=" border-b-4 border-purple">
			<label className="flex">
				<ImagePlus className="" />
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
