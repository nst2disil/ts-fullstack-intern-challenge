import './Navbar.css';
import { HOME_PAGE, FAVORITE_PAGE } from '../constants';

interface NavbarProps {
    activePage: number;
    navClick: (page: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, navClick }) => {
    return (
        <nav className='globalnav'>
            <ul className='g-n-list'>
                <li>
                    <button className={`g-n-button1
                        ${activePage === HOME_PAGE ? 'active' : ''}`}
                        onClick={() => navClick(HOME_PAGE)}>
                        Все котики</button>
                </li>
                <li>
                    <button className={`g-n-button2
                        ${activePage === FAVORITE_PAGE ? 'active' : ''}`}
                        onClick={() => navClick(FAVORITE_PAGE)}>
                        Любимые котики</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;