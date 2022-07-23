
function Item() {

    var showDetail = () => {
        console.log('click');
    }

    return (
        <div className="card" onClick={showDetail}>
            <img src="https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nome do prato</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Item