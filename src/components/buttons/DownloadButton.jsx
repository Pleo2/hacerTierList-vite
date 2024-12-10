import { ImageDown } from "lucide-react";
export const DownloadButton = ({downloadFn}) => {
	return (
		<>
			<div className=" border-b-4 border-green">
				<button type="button" onClick={downloadFn}>
					<ImageDown />
				</button>
			</div>
		</>
	);
};
