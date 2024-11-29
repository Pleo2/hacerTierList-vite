import { PinBottomIcon } from "@radix-ui/react-icons";

export const ShareButton = () => {
	
	function saveCanvas() {
		// https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/dist/html2canvas-pro.min.js
	}

	return (
		<>
			<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-green">
				<button type="button" onClick={saveCanvas}>
					<PinBottomIcon />
				</button>
			</div>
		</>
	);
};
