import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';

export default function Logo() {
    return (
        <Link to="/" className="flex items-center space-x-2">
            <img src={LogoImage} alt="Mero Coding Class" className="h-15 w-auto" />
        </Link>
    );
}