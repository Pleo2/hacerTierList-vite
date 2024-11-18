import { ReloadIcon } from "@radix-ui/react-icons";

export const RestoreButton = () => {
	return (
		<>
			<div className="dark:bg-gray-900 bg-gray-200 border-b-4 border-purple">
				<button type="button">
					<ReloadIcon />
				</button>
			</div>
		</>
	);
};
