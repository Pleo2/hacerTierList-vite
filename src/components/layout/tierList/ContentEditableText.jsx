import { useContentEditable } from "../../../hooks/useContentEditable"
import ContentEditable from "react-contenteditable"


export const ContentEditableText = ({ category }) => {
    const content = useContentEditable(category)

    return (
        <ContentEditable
            onChange={content.onContentChange}
            onBlur={content.onContentChange}
            html={content.content}
        />
    )

}