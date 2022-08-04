import React from "react"
import "./Button.css"

type ButtonProps = {
    nome: string;
    icon: string;
}

function Button(props: ButtonProps) {

    var aplicarFiltro = () => {
        console.log('Aplicando filtro');
    }

    return (
        <button className="btn-categoria" onClick={aplicarFiltro}>
            <img className="icon" src={props.icon}/>
            <span>{props.nome}</span>
        </button>
    )
}

export default Button