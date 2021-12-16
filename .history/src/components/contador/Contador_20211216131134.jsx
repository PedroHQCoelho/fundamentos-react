import React, { Component } from "react";

export default class Contador extends Component {

    state = {
            passo: this.props.passo || 1,
            valor: this.props.valor || 0
        }

        inc = () => {
            this.setState({
                valor: this.state.valor + 1
            })
        }

        dec = () => {
            this.setState({
                valor: this.state.valor - 1
            })
        }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }
}