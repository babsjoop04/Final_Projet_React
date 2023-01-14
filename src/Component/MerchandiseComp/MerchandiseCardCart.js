import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import createDeleteToCard from "../../Redux/Actions/createDeleteToCard";


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteToCard: (payload) => dispatch(createDeleteToCard(payload))
    }

}
const MerchandiseCardCart = ({ id, imgSrc, title, category, price, orderedQuantity, description, dispatchDeleteToCard }) => {
    const changeUrl = useNavigate();

    const deleteToCard = () => {
        dispatchDeleteToCard({ id: id })
    }
    return (
        <>
            <div className="row my-3" id={id}>
                <div className="col col-sm">
                    <img
                        src={imgSrc}
                        className="img-fluid"
                        alt="imgProduct"
                    />
                </div>

                <div className="col-6 col-sm mt-3">
                    <p>Title : {title}</p>
                    <p>
                        Description : {description.slice(0, 15)}...
                        <button className="btn btn-link"
                            onClick={() => changeUrl(`/description-product/${category}/${title}`)}
                        >See more</button>
                    </p>
                </div>
                <div className="col col-sm mt-4">
                    <div className="row mb-3">price per unit : {price * 655} F CFA</div>
                    <div className="row mb-3">Quantity : {orderedQuantity}</div>
                    <div className="row">
                        <div className="col col-sm">
                            <button className="btn btn-danger" id="remove"
                                onClick={deleteToCard}>
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
MerchandiseCardCart.propTypes = {
    id: PropTypes.number,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    orderedQuantity: PropTypes.number,
    description: PropTypes.string

}


export default connect(null, mapDispatchToProps)(MerchandiseCardCart);
