import { ReloadIcon } from "@radix-ui/react-icons";
import { ImagesContext } from "../../context/ImagesContext";
import { useContext } from "react";

export const RestoreButton = () => {
	const { setImages } = useContext(ImagesContext);

	const restoreImages = () => {
		setImages((prev) => {
			const arr = []

			for (const element of prev) {
				if (element.rowId !== 5) {
					arr.push({
						rowId: 5,
						img: element.img,
					});
				} else {
					arr.push(element);
				}
			}

			return arr;
		});
	};

	return (
		<>
			<div className=" border-b-4 border-yellow">
				<button type="button" onClick={restoreImages}>
					<ReloadIcon />
				</button>
			</div>
		</>
	);
};
