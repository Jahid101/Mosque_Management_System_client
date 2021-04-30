import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IeGnnGranyyLnAmLW22rf5qeFwcbqQi1Ky0k9GRwjvcTSEHuHfzew1LPWdXrzeDVTasOEOj9WUF1pzsYZZr5X2r00HZbjsjAB');

const PaymentProcess = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
                <PaymentCard handlePayment = {handlePayment}></PaymentCard>
        </Elements>
    );
};

export default PaymentProcess;
