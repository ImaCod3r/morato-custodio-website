interface TitleProps {
    title: string;
    subtitle: string;
}

function Title({ title, subtitle }: TitleProps) {
    return (
        <div>
            <p className="text-center text-xl">{subtitle}</p>
            <h2 className="text-gray-950 text-6xl font-bold leading-6">
                <span className="text-[#FFA245]">.</span>{title}
            </h2>
        </div>
    )
}

export default Title;