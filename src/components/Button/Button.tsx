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
        <div className="btn-categoria" onClick={aplicarFiltro}>
            <img src={props.icon}/>
            <span>{props.nome}</span>
        </div>
    )
}

export default Button