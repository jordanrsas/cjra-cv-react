import React, { useState }  from 'react';
import {Link}  from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

const CvNavbar  = props => {
    const [expanded, setExpanded] = useState(false);
    return(
            <Navbar bg="light" variant="light" expand="lg" fixed="top" expanded={expanded}>
                 <div className="container">
                <Navbar.Brand >
                    <Link to="/" onClick={() => setExpanded(false)}>Jordan Rosas</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => setExpanded(false)}> 
                            <Link to="/fotos">Fotos</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)}>
                            <Link to="/blog">Blog</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        
    )
};

export default CvNavbar;