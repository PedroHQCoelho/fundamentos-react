import './Contador.css'
import React, { Component } from "react";

import Display from './Display';
import PassoForm from './PassoForm';

export default class Contador extends Component {

    state = {
            passo: this.props.passo || 1,
            valor: this.props.valor || 0
        }

        inc = () => {
            this.setState({
                valor: this.state.valor + this.state.passo
            })
        }

        dec = () => {
            this.setState({
                valor: this.state.valor - this.state.passo
            })
        }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm />
                <Display />

                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }
}