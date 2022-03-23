import React from "react";
import "./button.css";


export default class BigButton extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }; 
    render() {
        return (
            <div class="central-button">
                    <button onClick={this.onClose}>
                        <h4>Adicionar Ponto</h4>
                    </button>
            </div>
        );
    }
}

