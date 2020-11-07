import React, { Component } from 'react'
//import {Redirect,Link} from 'react-router-dom'
//import API from '../ServiceApi/Index'
//import SearchResult from './SearchResult'
//import { NotificationManager } from 'react-notifications'
import { Form, Button, Spinner } from 'react-bootstrap'
import {MdSearch} from 'react-icons/md';
//import Form from 'react-formal'
//import * as yup from 'yup'

//const schema = yup.object({
    //query: yup.string().required(),
  //}); 

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            loading: false
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        
    }

    handlerChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const query=this.state.query;
        API.CariOrang(query).then(res=>{
            console.log(res)
            setTimeout(() => this.setState({
              results: res,
              loading: false,
            }), 100);
        });  
    }

    
    render() {

        return (
            <>
                <Form className="my-auto w-100" onSubmit={this.handlerSubmit}>
                <div className="input-group">
                    <Form.Control className="border" type="text" name="query" placeholder="Pencarian..." onChange={this.handlerChange} required autoFocus/>
                    <span className="input-group-append">
                    <Button className="py-1" type="submit" variant="light">
                    {
                        this.state.loading
                        ?
                        <><Spinner as="span" animation="grow" size="sm"  role="status" aria-hidden="true" /></>
                        :   
                    <><MdSearch size="1.6rem" /></>}
                    </Button>
                </span>

                </div>

                {/*this.state.results.length > 0 && (
                
                <SearchResult data={this.state.results} />

                )*/}

               
                </Form>   


          
                       
  
            </>
        )
    }

}

export default LoginForm