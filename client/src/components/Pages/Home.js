import React, {Component} from "react";
import { Link, useHistory } from "react-router-dom";
import SendCode from "./SendCode";

class Home extends Component{
    state = {
    name: '',
    username: '',
    code: '',
    codeLang: ''
    };


    render(){
        return(
            <header>
                <div className="home-header context">
                    <div className="header-text">
                        <h1 className="welcome-to">Bem-vindo ao</h1>
                        <h1 className="educode">EduCode</h1>
                        <h3>Um web app que te auxilia com programação através de cards!</h3>
                        <Link class="btn btn-primary btn-lg btn-light search" style={{textAlign: 'center'}}to="/searchcode">Explorar cards</Link>
                        <Link class="btn btn-primary btn-lg btn-light submit" style={{textAlign: 'center'}}to="/submitcode">Enviar um card</Link>                    
                    </div>
                </div>
                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </header>
        )
    }
}

export default Home;