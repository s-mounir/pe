import { Link } from "react-router";

function Header() {
    return (
        <header>
            <Link to="/" >
                <img src="./img/logotype-campus-blanc.svg" alt="Campus Logo"/>
            </Link>
        </header>
    )
}

export default Header;