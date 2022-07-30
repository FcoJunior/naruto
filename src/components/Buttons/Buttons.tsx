import React from "react"
import ImgTodos from "../../assets/categories/hot-pot.png"
import ImgCarnes from "../../assets/categories/meat.png"
import ImgMassas from "../../assets/categories/espaguete.png"
import ImgSaladas from "../../assets/categories/salad.png"
import ImgSobremesas from "../../assets/categories/ice-cream.png"
import ImgBebidas from "../../assets/categories/drink.png"
import ImgSushi from "../../assets/categories/sushi.png"
import Button from "../Button/Button"

function Buttons() {

    var categorias = [
        { nome: 'Todos', icon: ImgTodos },
        { nome: 'Carnes', icon: ImgCarnes },
        { nome: 'Massas', icon: ImgMassas }
    ]

    var showDetail = () => {
        console.log('click');
    }

    return (
        <div className="d-flex">
            {
                categorias.map(x => <Button key={x.nome} icon={x.icon} nome={x.nome}/>)
            }
        </div>
    )
}

export default Buttons