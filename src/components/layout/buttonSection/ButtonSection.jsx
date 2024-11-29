import { AddImageButton } from "../../buttons/AddImageButton";
import { EraserAllImagesButton } from "../../buttons/EraseAllImagesButton";
import { RestoreButton } from "../../buttons/RestoreButton";
import { DownloadButton } from "../../buttons/DownloadButton";

export const ButtonSection = ({downloadFn}) => {
	return (
		<>
			<div
				className={`
							flex gap-12 justify-center mb-4 w-1/2 m-auto
							[&>div]:w-12 [&>div]:h-12 [&>div]:flex [&>div]:justify-center [&>div]:items-center
							// * AddImage Button 
							[&>div>label>svg]:w-6 [&>div>label>svg]:h-6 [&>div>label>svg]:cursor-pointer 
							// * RestoreImage Button & Share TierList Button
							[&>div>button>svg]:w-6 [&>div>button>svg]:h-6 [&>div>button>svg]:cursor-pointer
						  `}
			>
				<AddImageButton />
				<RestoreButton />
				<DownloadButton downloadFn={downloadFn}/>
				<EraserAllImagesButton />
			</div>
		</>
	);
};
