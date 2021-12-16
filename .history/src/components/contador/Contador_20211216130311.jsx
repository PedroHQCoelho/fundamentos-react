import React, { Component } from "react";

export default class Contador extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            passo: props.passo,
            valor: 0
        }
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        )
    }
}