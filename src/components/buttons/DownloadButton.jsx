import { PinBottomIcon } from "@radix-ui/react-icons";

export const DownloadButton = ({downloadFn}) => {
	return (
		<>
			<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-green">
				<button type="button" onClick={downloadFn}>
					<PinBottomIcon />
				</button>
			</div>
		</>
	);
};
