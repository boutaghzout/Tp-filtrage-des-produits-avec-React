import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const displayProducts = () => {
    const productsTemp = productList.filter((product) => {
      return (
        product.id.toString().startsWith(searchInput) ||
        product.title.includes(searchInput) ||
        product.description.includes(searchInput)
      );
    });
    if (productsTemp.length > 0) {
      return productsTemp.map((product) => (
        <Product key={product.id} product={product} />
      ));
    }
  };

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProductList(response));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector("#search").value;
    setSearchInput(searchValue);
  };
  return (
    <div className="container-fluid mx-auto w-75 my-3">
      <h2 className="my-4 text-primary">Search Products</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Type product name..."
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>

      <h1>List of Products :</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        {displayProducts()}
      </table>
    </div>
  );
};

export default ProductList;
