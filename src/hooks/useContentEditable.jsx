import { useState, useCallback } from "react";

export function useContentEditable(initialValue) {
	const [content, setContent] = useState(initialValue);

	const onContentChange = useCallback((evt) => {
		setContent(evt.currentTarget.innerHTML);
	}, []);

	return {
		content,
		setContent,
		onContentChange,
	};
}
