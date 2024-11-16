import { AddImageButton } from "../../buttons/AddImageButton";
import { EraserAllImagesButton } from "../../buttons/EraseAllImagesButton";
import { RestoreButton } from "../../buttons/RestoreButton";
import { ShareButton } from "../../buttons/ShareButton";

export const ButtonSection = () => {
    return (
        <>
            <div
                className={`
							flex gap-4 justify-around mb-4
							[&>div]:w-12 [&>div]:h-12 [&>div]:flex [&>div]:justify-center [&>div]:items-center
							// * AddImage Button 
							[&>div>label>svg]:w-6 [&>div>label>svg]:h-6 [&>div>label>svg]:cursor-pointer 
							// * RestoreImage Button & Share TierList Button
							[&>div>button>svg]:w-6 [&>div>button>svg]:h-6 [&>div>button>svg]:cursor-pointer
						  `}
            >
                <AddImageButton />
                <RestoreButton />
                <ShareButton />
                <EraserAllImagesButton />
            </div>
        </>
    );
};
