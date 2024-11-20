import { useState } from "react";
/// On change event handler
// The onChange event handler is used to capture the input value and update the state value. The onChange event handler is used with the input, textarea, and select elements.
const MyComponent = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("credit");
    const [shipping, setShipping] = useState("");

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
            <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
            />
            <p>Quantity: {quantity}</p>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add some details"
            />
            <p>Comment: {comment}</p>
            <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
            >
                <option>Select an option</option>
                <option value="Credit">Credit Card</option>
                <option value="Debit">Debit Card</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input
                    type="radio"
                    value="Pickup"
                    checked={shipping === "Pickup"}
                    onChange={(e) => setShipping(e.target.value)}
                />
                Pickup
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={(e) => setShipping(e.target.value)}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
};

export default MyComponent;
