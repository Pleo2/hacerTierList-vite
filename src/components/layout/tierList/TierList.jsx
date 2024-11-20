import { ImagesContext } from "../../../context/ImagesContext";
import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ContentEditableText } from "./ContentEditableText";
import { Image } from "../../Images";

export const TierList = () => {
	const { images } = useContext(ImagesContext);
	const ROWS = Array(5).fill(0);

	const getRowData = (index) => {
		switch (index) {
			case 0:
				return { color: "bg-purple text-backgrond", name: "⭐⭐⭐" };
			case 1:
				return { color: "bg-redOrange text-red-900", name: "A" };
			case 2:
				return { color: "bg-lightYellow text-yellow-700", name: "B" };
			case 3:
				return { color: "bg-green text-lime-800", name: "C" };
			case 4:
				return { color: "bg-blue text-sky-800", name: "D" };
			default:
				return { color: "bg-transparent", name: "XXX" };
		}
	};

	return (
		<>
			<section className="border-2 border-gray-500 flex flex-col bg-gray-200 dark:bg-[#1d1d1d] mb-6 w-full">
				{ROWS.map((_, index) => {
					const { name, color } = getRowData(index);
					return (
						<div
							className="flex border-b  border-gray-500 last:border-hidden"
							key={name}
						>
							<aside
								className={`${color} flex justify-center text-center items-center font-bold min-h-20 min-w-24 max-w-28 text-wrap p-4`}
							>
								{<ContentEditableText category={name} />}
							</aside>
							<Droppable
								droppableId={`Row-${index}`}
								type="IMAGE"
								direction="horizontal"
								isCombineEnabled={false}
							>
								{(provided) => (
									<section
										className="flex w-full"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										{images.map((item, itemIndex) => {
											if (item.rowId === index) {
												return (
													<Image
														key={item.img}
														_provided={provided}
														item={item}
														index={itemIndex}
													/>
												);
											}
										})}
										{provided.placeholder}
									</section>
								)}
							</Droppable>
						</div>
					);
				})}
			</section>
		</>
	);
};
