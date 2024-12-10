import { ImagesContext } from "@/context/ImagesContext";
import { TrashIcon } from "lucide-react";
import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AnimatePresence, motion } from "motion/react";

export default function DeleteItem() {
	const { images } = useContext(ImagesContext);
    
    return images.length >= 1 ? (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
							exit={{ opacity: 0 }}
						>
							<Droppable
								droppableId={"Row-delete"}
								type="IMAGE"
								direction="horizontal"
								isCombineEnabled={false}
							>
								{(provided) => (
									<div
										className="w-max min-w-40 h-max gap-2 border-2 border-dashed border-foreground text-foreground flex items-center p-4 opacity-40 hover:opacity-100 hover:text-red icon-container"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										Suelte aqui para borrar !
										<svg
											role={"img"}
											class="icon-trash"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 28 40"
											width="40"
											height="40"
										>
											<path
												class="trash-lid"
												fill-rule="evenodd"
												d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z"
											/>
											<path
												class="trash-can"
												d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"
											/>
										</svg>
									</div>
								)}
							</Droppable>
						</motion.div>
					</AnimatePresence>
				) : (
					<></>
				);
}
