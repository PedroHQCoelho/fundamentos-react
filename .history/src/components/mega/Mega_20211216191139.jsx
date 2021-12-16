import React, { useState } from 'react'

export default (props) =>{
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))
    return (
    <>  
        <h3>Mega-Sena</h3>
    </>
    );
};