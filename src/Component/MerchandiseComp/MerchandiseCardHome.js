import PropTypes from 'prop-types'
const MerchandiseCardHome = ({ id, title, price, imageSrc }) => {
    return (
        <div className="merchandiseCard col-3 col-sm-5 col-md-5 col-lg-3 col-xl-2 col-xxl-2 mx-1 mb-3 card text-center " id={`Merchandise${id}`}>
            <div>
                <div className="header">
                    <img src={imageSrc} className="imgProduct card-img" alt="imgProduct" />
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>Price : {price}F CFA</p>
                </div>
            </div>
        </div>
    );
};

MerchandiseCardHome.defaultProps = {
    id: 1,
    title: "Iphone XR",
    price: 300000,
    imageSrc: "/img/martin-pechy-bpg-ngqrPc8-unsplash.jpg"

}

MerchandiseCardHome.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    imageSrc: PropTypes.string

}


export default MerchandiseCardHome;