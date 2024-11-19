import { ImagesContext } from "../../../context/ImagesContext";
import { useContext } from "react";

// import { ContentEditableLetter } from "../contentEditableLetter/contentEditableLetter";
// import { SortableSection } from "../dnd/sortableSection";
// import type { DragStartEvent } from "@dnd-kit/core";
// import { PointerSensor, useSensor, useSensors, closestCenter, KeyboardSensor } from "@dnd-kit/core";
// import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { ContentEditableText } from "./ContentEditableText";

export const TierList = () => {
	const { images } = useContext(ImagesContext);
	const ROWS = Array(5).fill(0);

	// const sensors = useSensors(
	//     useSensor(PointerSensor),
	//     useSensor(KeyboardSensor, {
	//         coordinateGetter: sortableKeyboardCoordinates,
	//     })
	// );

	const getRowData = (index) => {
		switch (index) {
			case 0:
				return { color: "bg-purple text-violet-950", name: "S" };
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
			<section className="border-2 border-gray-500 flex flex-col bg-gray-200 dark:bg-gray-800 mb-6 w-full">
				
				{	
					ROWS.map((_, index) => {
 						const { name, color } = getRowData(index);
						return (
							 <div className="flex border-b  border-gray-500 last:border-hidden" key={name}>
                                <aside className={`${color} flex justify-center text-center items-center font-bold min-h-20 min-w-20 max-w-28 text-wrap p-4`}>
                                    {<ContentEditableText category={name} />}
                                </aside>

								{images.map((imagen) => {
									if(imagen.rowId === index) {
										return <img key={imagen.img} src={imagen.img} alt="picture, tierList"  className="w-20 h-20 aspect-square"/>
									}
								})}
                            </div>
						)
					})
				}


                    {/* {images.slice(0, 5)?.map((imageRow, index) => {
                        const { name, color } = getRowData(index)

                        return (
                            <div className="flex border-b  border-gray-500 last:border-hidden" key={name}>
                                <aside className={`${color} flex justify-center text-center items-center font-bold min-h-20 min-w-20 max-w-28 text-wrap p-4`}>
                                    {<ContentEditableText category={name} />}
                                </aside>

								{imageRow ? imageRow.map((img) => <img key={img} src={img} alt="picture, tierList"  className="w-20 h-20 aspect-square"/>) : <></>}
                                 { <SortableSection idDroppable={name} key={name} images={imageRow as string[]} sensors={sensors} handleDragEnd={handleDragEnd} typeColision={closestCenter} /> }
                            </div>
                        )
                    })} */}
               
			</section>
		</>
	);

	// function replaceArrayInArray(myArray, modifiedArray, index) {
	//     const newArray = [...myArray]; // Crea una copia del array original
	//     newArray[index] = modifiedArray; // Reemplaza el array en la posición indicada
	//     return newArray;
	// }

	// function handleDragEnd(event) {
	//     const { active, over } = event;
	//     if (over && active.id !== over.id) {

	//         const activeIndex = images?.findIndex((rowImages) => rowImages.includes(active.id))

	//         if (images) {
	//             const oldIndex = images[activeIndex].indexOf(active.id);
	//             console.log("oldIndex", oldIndex);

	//             const newIndex = images[activeIndex].indexOf(over.id);
	//             console.log("newIndex", newIndex);

	//             if (oldIndex === -1) {
	//                 return
	//             }

	//             if (newIndex !== -1 && activeIndex !== -1 && activeIndex) {
	//                 const newArr = arrayMove(images[activeIndex], oldIndex, newIndex);
	//                 setImages(replaceArrayInArray(images, newArr, activeIndex))
	//             }

	//         }
	//         // cambiar las posiciones del array
	//         // retornar el setImages del array

	//     }
	// }

	// function handleDragStart(event) {
	//     const { active } = event
	//     setActiveId(active.id);
	// }
};
