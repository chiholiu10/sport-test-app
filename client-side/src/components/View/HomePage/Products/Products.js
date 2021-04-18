import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getData, getId } from "../../../../actions/index";
import axios from "axios";
import PropTypes from "prop-types";

const Products = ({ allProducts, findText }) => {
  if (allProducts == undefined || findText == undefined) return;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios(`http://localhost:3001/product`);
        dispatch(getData(res.data));
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <ul>
      {allProducts
        .filter(u => u.id.includes(findText))
        .map(({ currency, description, id, imgUrl, name, price }) => (
          <Link
            key={id}
            to={`/product/${id}`}
            onClick={() => dispatch(getId(id))}
          >
            <div>{currency}</div>
            <div>{id}</div>
            <div>{description}</div>
            <img src={imgUrl} alt={name} />
            <div>{name}</div>
            <div>{price}</div>
          </Link>
        ))}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    allProducts: state.productData.products || [],
    findText: state.productData.searchText || []
  };
}

Products.propTypes = {
  allProducts: PropTypes.object,
  findText: PropTypes.any
};

export default connect(mapStateToProps)(Products);
