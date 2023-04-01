import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const bgColor = "#d3e3ec";
    const styles = { backgroundColor: bgColor };
    return (
        <>
            <Navbar  style={styles} >
                <Container>
                    <Navbar.Brand >📑 CV builder</Navbar.Brand>
                </Container>
            </Navbar>
            <br />

        </>
    );
}
export default Header;