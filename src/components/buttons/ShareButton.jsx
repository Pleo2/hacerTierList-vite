import { Share1Icon } from "@radix-ui/react-icons";

export const ShareButton = () => {
	return (
		<>
			<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-green">
				<button type="button">
					<Share1Icon />
				</button>
			</div>
		</>
	);
};
