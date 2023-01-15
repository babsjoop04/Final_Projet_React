import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const MerchandiseCardHome = ({ id, title, price, imageSrc, category }) => {
    const changeUrl = useNavigate();
    return (
        <div
            className="merchandiseCard col-3 col-sm-5 col-md-5 col-lg-3 col-xl-2 col-xxl-2 mx-1 mb-3 card text-center "
            id={`Merchandise${id}`}
            onClick={() => changeUrl(`/description-product/${category}/${title}`)}
        >
            <div>
                <div className="header">
                    <img
                        src={imageSrc}
                        className="imgProduct card-img"
                        alt="imgProduct"
                    />
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
    id: Date.now(),
    title: "Iphone XR",
    price: 300000,
    imageSrc: "/img/DefaultProduct/xr0.jpg",
};

MerchandiseCardHome.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    imageSrc: PropTypes.string,
    category: PropTypes.string
};

export default MerchandiseCardHome;
