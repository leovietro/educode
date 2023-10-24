import React, {Component} from "react";
import { Link } from "react-router-dom";
import CodeCard from "../Common/CodeCard";

class SearchCode extends Component{
    state = {
        objects: [],
        html: '',
        codeLang: '',
    }

    callApi = async () => {
        if(this.state.codeLang != 'null'){
            const response = await fetch(`/api/code?codeLang=${this.state.codeLang}`, {
                method: 'GET'
            });
            const data = await response.json();
            let objects = [];
            for(var i=0; i < data.length; i++){
                objects.push([data[i].name, data[i].username, data[i].code, data[i].codeLang, data[i]._id]); 
            }
            return objects;
        } else {
            alert("Selecione uma linguagem de programação.")
        }
    };

    _handleChange = (event) => {
        this.setState({ codeLang: event.target.value })
    }

    _handleClick = async (event) => {
        const data = await this.callApi();
        this.setState({objects: data.length ? data : []})
    }

    render(){
        return(
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">EduCode</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/submitcode">Enviar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="home-header context" style={{top: '13%'}}>
                    <div className="header-text">
                        <h1 className="sbmt-your">Selecione uma linguagem e veja os códigos!</h1>
                        <div class="form-group searchform">
                                <select 
                                type="text" 
                                name="txtPhone" 
                                class="form-control" 
                                aria-label="Default select example" 
                                value={this.props.codeLang}
                                onChange={this._handleChange}
                                ref={ref => {
                                    this._select = ref
                                }}
                                defaultValue={this.state.value}
                                >
                                <option value="null">Selecione um valor</option>
                                <option value="C">C</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Java">Java</option>
                                <option value="Python 3">Python 3</option>
                                </select>
                        </div>
                        <Link class="btn btn-primary btn-lg btn-light searchform" style={{textAlign: 'center'}}to="/searchcode" onClick={this._handleClick}>Pesquisar</Link>
                        <div>
                            {
                                
                                this.state.objects.map(card => (
                                 <CodeCard
                                    _id={card[4]}
                                    codeLang={card[3]}
                                    username={card[1]}
                                    name={card[0]}
                                    code={card[2]}
                                />
                                ))
                                
                            }
                        </div>
                    </div>
                </div>
                <div className="area" style={{height: `93vh`}}>
                    <ul className="circles">
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

export default SearchCode;