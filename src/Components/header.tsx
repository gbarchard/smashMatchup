import '../Styles/App.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Smash Ultimate Matchups</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header