import React,{Component} from 'react';
import Link from './link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MdHome, MdLibraryBooks, MdNotifications, MdPerson } from "react-icons/md";


class Appbar extends Component{
  constructor(props) {
    super(props)
        this.state = {
        
        }
    }
    componentDidMount = () => {
  
    }
    render(){
        
        return(
            <Navbar className="border-top text-center" variant="light" fixed="bottom" style={{backgroundColor:"#fafafa",height:"60px", position: "fixed"}}>
              <Container>
            <Nav id="appbar" fill style={{width: "100%"}}>  
              
              <Nav.Item>
              <Link href="/" activeClassName="active" passHref>
              <Nav.Link><MdHome size="1.4rem"/><div>Home</div></Nav.Link>
              </Link>
              </Nav.Item>

              <Nav.Item>
              <Link href="/feed" activeClassName="active" passHref>
              <Nav.Link><MdLibraryBooks size="1.4rem"/><div>Feed</div></Nav.Link>
              </Link>
              </Nav.Item>

              <Nav.Item>
              <Link href="/notification" activeClassName="active" passHref>
              <Nav.Link><MdNotifications size="1.4rem"/><div>Notifikasi</div></Nav.Link>
              </Link>
              </Nav.Item>

              <Nav.Item>
              <Link href="/login" activeClassName="active" passHref>
              <Nav.Link><MdPerson size="1.4rem"/><div>Masuk</div></Nav.Link>
              </Link>
              </Nav.Item>
             
              </Nav>
              </Container>
              </Navbar>
        )
    }
}

export default Appbar