import Item from "../../components/item/Item"

function Home() {

    var list = [1, 2]

    return (
        <div className="d-flex">
            {
                list.map(x => <Item key={x} />)
            }
        </div>
    )
}

export default Home