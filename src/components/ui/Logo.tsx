import Morato from "../../assets/morato.svg"

function Logo() {
    return (
        <a href="/">
            <img src={Morato} alt="Morato Label" className="h-8 md:h-6 w-20" />
        </a>
    )
}

export default Logo;