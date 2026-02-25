import { useState } from "react";

function ProductDetails({ setBillingData }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleCalculate = () => {
    const total = quantity * unitPrice;

    setBillingData({
      productName,
      quantity,
      unitPrice,
      total
    });
  };

  const handleReset = () => {
    setProductName("");
    setQuantity("");
    setUnitPrice("");
    setBillingData(null);
  };

  return (
    <div>
      <h3>Product Details</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Unit Price"
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
      />
      <br /><br />

      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ProductDetails;
