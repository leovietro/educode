import React, {Component} from "react";
import { Link } from "react-router-dom";


class SendCode extends Component {
    state = {
        name: '',
        username: '',
        code: '',
        codeLang: ''
    };

    sendApi = async() => {
        const response = await fetch('/api/code', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'name': `${this.state.name}`, 'username': `${this.state.username}`, 'code': `${this.state.code}`, 'codeLang': `${this.state.codeLang}` })
        });
        const body = await response.json();
        if(body.errors){
            return alert(body.message);
        } else {
            alert("Card enviado com sucesso.");
            window.location.reload();
        }
    }

    _handleChange = (event) => {
        this.setState({ codeLang: event.target.value })
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
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/searchcode">Explorar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="home-header context" style={{top: '13%'}}>
                    <div className="header-text">
                        <h1 className="sbmt-your">Envie seu card de código</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-6 left">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="Escreva seu código aqui" rows="25" value={this.props.code} onChange={e => this.setState({code: e.target.value})}></textarea>
                            </div>
                        </div>
                        <div class="col-md-6 right">
                            <div class="form-group">
                                <input type="text" name="txtName" class="form-control" placeholder="Titúlo do Card" value={this.props.name} onChange={e => this.setState({name: e.target.value})}/>
                            </div>
                            <div class="form-group">
                                <input type="text" name="txtUsername" class="form-control" placeholder="Digite seu nome" value={this.props.username} onChange={e => this.setState({username: e.target.value})}/>
                            </div>
                            <div class="form-group">
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
                                <option selected>Escolha a linguagem de programação</option>
                                <option value="C">C</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Java">Java</option>
                                <option value="Python 3">Python 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact" value="Salvar Card" onClick={this.sendApi}/>
                            </div>
                        </div>
                </div>
                </div>
                <div className="area" style={{height: "93vh"}}>
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

export default SendCode;