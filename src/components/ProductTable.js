import React from "react";

const ProductTable = (props) => {
  return (
    <div id="prod">
      <table
        className="table"
        style={{
          borderCollapse: "collapse",
          margin: "25px 0 ",
          fontSize: "0.9em",
          minWidth: "500px",
          borderRadius: "5px 5px 0 0",
          overflow: "hidden",
          boxShadow: " 0 0 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#009879",
              color: "#ffffff",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((p, index) => {
            return (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #dddddd",
                  backgroundColor: " #f3f3f3",
                }}
              >
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
