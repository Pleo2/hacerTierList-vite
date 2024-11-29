import { useContentEditable } from "../hooks/useContentEditable";
import ContentEditable from "react-contenteditable";

export const ContentEditableText = ({ category, className }) => {
	const content = useContentEditable(category);

	return (
		<ContentEditable
			className={className}
			onChange={content.onContentChange}
			onBlur={content.onContentChange}
			html={content.content}
		/>
	);
};
