
import { EraserIcon } from "@radix-ui/react-icons";

export const EraserAllImagesButton = () => {
    // Call to Erase All data

    return (
        <>
            <div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-redOrange">
                <button type="button" onClick={() => {console.log(cleanImages)}}>
                    <EraserIcon />
                </button>
            </div>
        </>
    );
};