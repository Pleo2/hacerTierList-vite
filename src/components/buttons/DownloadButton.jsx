import { PinBottomIcon } from "@radix-ui/react-icons";

export const DownloadButton = ({downloadFn}) => {
	return (
		<>
			<div className=" border-b-4 border-green">
				<button type="button" onClick={downloadFn}>
					<PinBottomIcon />
				</button>
			</div>
		</>
	);
};
