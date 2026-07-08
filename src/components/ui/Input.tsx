import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#FFA245] transition"
        />
    );
}

export default Input;
