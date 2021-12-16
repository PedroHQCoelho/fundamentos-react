import React, { useState } from 'react'

export default (props) =>{
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))

    function gerarNumerosNaoContido(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min 
    }
    
    function gerarNumeros() {
        setNumeros([1, 2, 3, 4, 5, 6])
    }

    return (
    <>  
        <h3>Mega-Sena</h3>
        <h4>{numeros.join(' ')}</h4>
        <button onClick={gerarNumeros}>Gerar Números</button>
    </>
    );
};