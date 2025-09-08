import { Link } from "react-router";

function Header() {
    return (
        <header>
            <Link to="/pe" >
                <img src={process.env.PUBLIC_URL + '/img/logotype-campus-blanc.svg'} alt="Campus Logo"/>
            </Link>
        </header>
    )
}

export default Header;