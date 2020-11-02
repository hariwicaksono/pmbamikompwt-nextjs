import React,{Component} from 'react'
import { Nav } from 'react-bootstrap'


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
            <div className="pt-4 mt-4 d-xs-block d-sm-block d-md-block d-lg-block d-xl-block">
            
              
              <Nav id="appbar" fill className="mx-auto text-center border-top" style={{backgroundColor:"#fafafa",height:"60px", position: "fixed",width: "100%",left: "0",bottom: "0",zIndex:'99'}}>

            <Nav.Item>
               <div>Home</div>
             </Nav.Item>
             
              
            
              </Nav>
        
        </div>
        )
    }
}

export default Appbar