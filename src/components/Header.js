import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <NavLink to="/catalog" activeClassName="active-nav">All games</NavLink>
                <div id="user">
                    <NavLink to="/create" activeClassName="active-nav">Create Game</NavLink>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <NavLink to="/login" activeClassName="active-nav">Login</NavLink>
                    <NavLink to="/register" activeClassName="active-nav">Register</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;