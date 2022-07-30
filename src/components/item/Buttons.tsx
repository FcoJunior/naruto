function Item() {

    var showDetail = () => {
        console.log('click');
    }

    return (
        <div className="card" onClick={showDetail}>
            <div className="card-body">
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
                <button>
                    <img src="" className="card-img-top" alt="..." />
                    nome do item
                </button>
            </div>
        </div>
    )
}

export default Item