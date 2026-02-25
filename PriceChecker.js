import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import BillingDetails from "./BillingDetails";

function PriceChecker() {
  const [billingData, setBillingData] = useState(null);

  useEffect(() => {
    document.title = "Price Checker";
  }, []);

  return (
    <div>
      <h2>Price Checker</h2>
      <ProductDetails setBillingData={setBillingData} />
      {billingData && <BillingDetails data={billingData} />}
    </div>
  );
}

export default PriceChecker;
