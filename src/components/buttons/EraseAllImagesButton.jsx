import { EraserIcon } from "@radix-ui/react-icons";
import { memo } from "react";

export const EraserAllImagesButton = memo(() => {
	// Call to Erase All data

	return (
		<>
			<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-redOrange">
				<button
					type="button"
					onClick={() => {
						console.log(cleanImages);
					}}
				>
					<EraserIcon />
				</button>
			</div>
		</>
	);
});
