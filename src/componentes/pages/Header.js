import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';


export default function Header() {

	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className='container-fluid'>
			<Navbar color="" expand="sm">
          <NavbarBrand href="/">
            <img id='imgLogoHeader'src=''/>
          </NavbarBrand>
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar id='navItens'>
                <NavItem >
                  <NavLink  href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">EloJob</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">DuoBoost</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Coach</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
			</Navbar>
		</div >
	);
}


