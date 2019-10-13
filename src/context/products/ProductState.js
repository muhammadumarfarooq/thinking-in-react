import React, { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import { CHANGE_CHECKBOX, FILTER_ARRAY, SHOW_ALERT } from "../types";

const ProductState = props => {
  const initialState = {
    //Initial State
    products: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      },
      {
        category: "Wearing",
        price: "$19.99",
        stocked: false,
        name: "T-Shirt"
      },
      {
        category: "Wearing",
        price: "$59.99",
        stocked: true,
        name: "Pant & Shirt"
      }
    ],
    checkBox: false,
    filteredArray: [],
    alert: null
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  // Show only items in stock
  const onCheckBoxChange = () => dispatch({ type: CHANGE_CHECKBOX });
  // Get Filtered items
  const onInputChange = e => {
    if (e.target.value.trim().length >= 1) {
      const list = state.products.filter(product => {
        return (
          product.name
            .toLowerCase()
            .search(e.target.value.toLowerCase().trim()) !== -1
        );
      });
      if (list.length >= 1) {
        dispatch({ type: FILTER_ARRAY, payload: list });
        dispatch({ type: SHOW_ALERT, payload: null });
      } else {
        dispatch({ type: SHOW_ALERT, payload: "No Match Found!" });
        dispatch({ type: FILTER_ARRAY, payload: [] });
      }
    } else {
      dispatch({ type: FILTER_ARRAY, payload: [] });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        checkBox: state.checkBox,
        onCheckBoxChange,
        onInputChange,
        filteredArray: state.filteredArray,
        products: state.products,
        alert: state.alert
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
