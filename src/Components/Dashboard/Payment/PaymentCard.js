import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentCard = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="w-50">
                    Card number
                        <CardElement className="form-control" />
                </label>
                <br />

                <button className="btn btn-success mb-3 mt-3 d-flex" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful</p>
            }
        </div>
    );
};

export default PaymentCard;
