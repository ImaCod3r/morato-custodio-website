interface TitleProps {
    title: string;
    subtitle: string;
}

function Title({ title, subtitle }: TitleProps) {
    return (
        <div className="text-center">
            <p className="text-xl">{subtitle}</p>
            <h2 className="text-gray-950 text-6xl font-bold leading-12">
                <span className="text-[#FFA245]">.</span>{title}
            </h2>
        </div>
    )
}

export default Title;