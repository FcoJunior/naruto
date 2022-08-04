import React from "react"
import './Menu.css'

export default (props: { titulo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) =>
    <div>
        <h1>{props.titulo}</h1>
        <button className="botaoP">
            Meu Pedido</button>
        <button className="botaoC">
            Minha Conta</button>
    </div>
