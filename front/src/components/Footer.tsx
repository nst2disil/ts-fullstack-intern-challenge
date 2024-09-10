import './Footer.css';
import { HOME_PAGE } from '../constants';

interface FooterProps {
    activePage : number;
}

const Footer: React.FC<FooterProps> = ({ activePage }) => {
    return (
        <div className='footer'>
            {(activePage === HOME_PAGE ? <p>...для новых котиков обнови страницу...</p> : '')}
        </div>
    )
}

export default Footer;