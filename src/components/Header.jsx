import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from '../assets/nba-logo.png';
const Header = () => {
    return (
        <>
            <Image src={logo} width={"300px"} />
            <h1>NBA LEGENDS</h1>
        </>
    );
}

export default Header;