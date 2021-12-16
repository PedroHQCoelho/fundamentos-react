import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

export default (props) =>(
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#10 - Contador" color="#293E6A">
            <Contador passo={10} valor={100}/>    
        </Card>
        <Card titulo="#09 - Input" color="#9C0F5F">
            <Input/>    
        </Card>
        <Card titulo="#08 - Comunicação Indireta">
            <Super/>    
        </Card>
        <Card titulo="#07 - Comunicação Direta" color="#4298B5">
            <Pai sobrenome="Coelho"/>    
        </Card>
        <Card titulo="#06 - Condicional(Versão 2)" color="#FA6900">
            <CondicionalComIf numero={11} />    
        </Card>
        <Card titulo="#05 - Condicional(Versão 1)" color="#E94C6F">
            <Condicional numero={10} />    
        </Card>
        <Card titulo="#04 - Repetição" color="#008BBA">
            <Repeticao />    
        </Card>
        <Card titulo="#03 - Componente com Filhos" color="#D96459">
            <ComFilhos>
            <ul>
                <li>Pedro</li>
                <li>André</li>
                <li>Luciana</li>
            </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro" color="#FF85CB">
            <ComParametro titulo="Esse é o título - VASCO"
            subtitulo="Esse é o subtítulo - FORA, SALGADO" />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro />
        </Card>
    </div>
    </div>
    )