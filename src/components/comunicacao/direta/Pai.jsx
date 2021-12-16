import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Pedro</Filho>
        <Filho sobrenome={props.sobrenome}>André</Filho>
        <Filho sobrenome="Brito">Luciana</Filho>
    </div>