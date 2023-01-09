import { useNavigate } from "react-router-dom";

const MerchandiseCardCart = () => {
    const changeUrl = useNavigate();
    return (
        <>
            <div className="row my-3">
                <div className="col col-sm">
                    <img
                        src="/img/martin-pechy-bpg-ngqrPc8-unsplash.jpg"
                        className="img-fluid"
                        alt="imgProduct"
                    />
                </div>

                <div className="col-6 col-sm mt-3">
                    <p>Title : title</p>
                    <p>
                        Description : Lorem ...
                        <button className="btn btn-link"
                            onClick={() => changeUrl("/")}
                        >See more</button>
                    </p>
                </div>
                <div className="col col-sm mt-4">
                    <div className="row mb-3">price per unit : F CFA</div>
                    <div className="row mb-3">Quantity :</div>
                    <div className="row">
                        <div className="col col-sm">
                            <button className="btn btn-danger" id="remove">
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default MerchandiseCardCart;
