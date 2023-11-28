import Link from "next/link";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import{Navbar} from "react-bootstrap";

const Header = () => {
  return (
    

    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link href="#home" className="nav-link">Navbar</Link>
        <Nav className="me-auto">
          <Link  href="/home"  className="nav-link">
            Home
          </Link>

          <Link  href="/contact" className="nav-link">
            Contact Us
          </Link>

          <Link  href="/post" className="nav-link">
            Post
          </Link>

          <Link  href="/userlist"  className="nav-link">
            Userlist
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
