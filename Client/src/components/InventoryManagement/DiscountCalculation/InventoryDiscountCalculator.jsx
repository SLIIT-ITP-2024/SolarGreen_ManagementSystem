import React, { useState } from "react";
import "./InventoryDiscountCalculator.css"; // Add your CSS file path here

const InventoryDiscountCalculator = () => {
  // State variables
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountMessage, setDiscountMessage] = useState("");

  // Function to handle changes in input fields
  const handleNumberOfItemsChange = (event) => {
    setNumberOfItems(parseInt(event.target.value));
  };

  const handlePricePerItemChange = (event) => {
    setPricePerItem(parseFloat(event.target.value));
  };

  // Function to calculate total price and apply discount if applicable
  const calculateTotalPrice = () => {
    const calculatedTotalPrice = numberOfItems * pricePerItem;
    setTotalPrice(calculatedTotalPrice);

    if (calculatedTotalPrice > 50000) {
      const discountAmount = (calculatedTotalPrice * 15) / 100;
      const discountedPrice = calculatedTotalPrice - discountAmount;
      setDiscountedPrice(discountedPrice);
      setDiscountMessage("15% Discount Applied");
    } else if (calculatedTotalPrice > 40000) {
      const discountAmount = (calculatedTotalPrice * 10) / 100;
      const discountedPrice = calculatedTotalPrice - discountAmount;
      setDiscountedPrice(discountedPrice);
      setDiscountMessage("10% Discount Applied");
    } else {
      setDiscountedPrice(calculatedTotalPrice);
      setDiscountMessage("No Discount Offered");
    }
  };

  return (
    <div className="calculator">
      <h2>Inventory Discount Calculator</h2>
      <div className="input-group">
        <label htmlFor="numberOfItems">Number of Items:</label>
        <input
          type="number"
          id="numberOfItems"
          value={numberOfItems}
          onChange={handleNumberOfItemsChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="pricePerItem">Price per Item:</label>
        <input
          type="number"
          id="pricePerItem"
          value={pricePerItem}
          onChange={handlePricePerItemChange}
        />
      </div>
      <button onClick={calculateTotalPrice}>Calculate Total Price</button>
      {totalPrice !== 0 && (
        <div className="result">
          <h3>Total Price:</h3>
          <p>{totalPrice.toFixed(2)}</p>
          <h3>{discountMessage}</h3>
          {discountedPrice !== totalPrice && (
            <div>
              <h3>Discounted Price:</h3>
              <p>{discountedPrice.toFixed(2)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InventoryDiscountCalculator;




