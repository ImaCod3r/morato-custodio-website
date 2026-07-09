import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="w-full bg-[#FFA245] hover:bg-[#ff9530] cursor-pointer rounded-full px-6 py-4 text-white font-medium transition-colors cursor-pointer"
        >
            {children}
        </button>
    );
}

export default Button;
