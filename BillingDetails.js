function BillingDetails({ data }) {
  return (
    <div>
      <h3>Billing Details</h3>
      <p>Product Name: {data.productName}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Unit Price: {data.unitPrice}</p>
      <h4>Total Price: {data.total}</h4>
    </div>
  );
}

export default BillingDetails;
