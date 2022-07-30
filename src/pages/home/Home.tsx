import Buttons from "../../components/item/Buttons"
import Item from "../../components/item/Item"
import Menu from "../../components/item/Menu"

function Home() {

    var list = [1, 2, 3, 4]

    return (
        <div className="home">
            <Menu />
            <Buttons />
            <div className="d-flex">
                {
                    list.map(x => <Item key={x} />)
                }
            </div>
        </div>
    )
}

export default Home