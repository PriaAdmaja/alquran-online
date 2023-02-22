import { Container, Navbar, Nav } from "react-bootstrap"
import React from "react"
import { useSelector } from "react-redux"


const Navigation = () => {
    const {title, body} = useSelector(state => state.surah)
    
    return (
        <React.Fragment >
            <Navbar bg="light" variant="light" className="fixed-top">
                <Container>
                    <Navbar.Brand href="/"><b>Al Quran Online</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/juz">Juz</Nav.Link>
                            <Nav.Link href="/surah">Surah</Nav.Link>
                            <Nav.Link >{title}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Navigation