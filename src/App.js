import React from "react";
import PropTypes from "prop-types";

import ProductTable from "./components/ProductTable";
import "./App.css";

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
    })
  ),
};

function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { name: "prod", price: 26, category: "Electronics" },
          { name: "prod", price: 100, category: "Clothes" },
        ]}
      />
    </div>
  );
}

export default App;
