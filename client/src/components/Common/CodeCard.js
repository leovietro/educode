import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class CodeCard extends Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    deleteApi = async() => {
        const response = await fetch(`/api/code/?id=${this.props._id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        const resBody = await response.json();
        return console.log(resBody);
    }

    handleEditClick() {
        this.props.history.push(`/editcode/${this.props._id}`);
    }

    handleDeleteClick = async () => {
        if (window.confirm("Deseja realmente excluir este código?")) {
            await this.deleteApi();
            alert("Card excluído com sucesso!")
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="testa" style={{ marginLeft: '15%', marginRight: '4%'}}>
                <div className="card border-secondary mb-3 cards" style={{ position: 'relative', width: '30rem' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1000' }}>
                        <FontAwesomeIcon icon={faEdit} style={{ margin: '0 10px' }} color="black" onClick={this.handleEditClick} />
                        <FontAwesomeIcon icon={faTrash} color="black" onClick={this.handleDeleteClick} />
                    </div>
                    <div className="card-header">"{this.props.name}" ({this.props.codeLang}) por {this.props.username}</div>
                    <div className="card-body text-secondary">
                        <p className="card-text">{this.props.code}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CodeCard);
