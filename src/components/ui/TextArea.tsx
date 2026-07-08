import type { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea(props: TextAreaProps) {
    return (
        <textarea
            {...props}
            className="w-full bg-gray-100 rounded-3xl px-6 py-4 text-gray-700 placeholder:text-gray-400 outline-none resize-none focus:ring-2 focus:ring-[#FFA245] transition"
        />
    );
}

export default TextArea;
