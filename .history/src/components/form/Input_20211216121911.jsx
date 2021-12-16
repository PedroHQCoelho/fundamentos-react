import React, { useState } from 'react'

export default (props) =>{
    const [nome, setNome] = useState('Pedro')
    return (
    <>
        <input type="text" value={nome} />
    </>
    );
};