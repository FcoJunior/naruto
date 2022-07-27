import Item from "../../components/item/Item"
import './Home.css'

function Home() {

    var list = [1, 2, 3, 4]

    return (
        <div className="d-flex">
            {
                list.map(x => <Item key={x} />)
            }
        </div>
    )
}

export default Home