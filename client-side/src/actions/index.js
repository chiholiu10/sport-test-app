export const types = {
  GET_DATA: "GET_DATA",
  FILTER_PRODUCT: "FILTER_PRODUCT",
  GET_ID: "GET_ID",
  STORE_DATA: "STORE_DATA"
};

export const getData = product => {
  return {
    type: types.GET_DATA,
    product
  };
};

export const filterProduct = text => {
  return {
    type: types.FILTER_PRODUCT,
    text
  };
};

export const getId = id => {
  return {
    type: types.GET_ID,
    id
  };
};

export const storeData = data => {
  return {
    type: types.STORE_DATA,
    data
  };
};
