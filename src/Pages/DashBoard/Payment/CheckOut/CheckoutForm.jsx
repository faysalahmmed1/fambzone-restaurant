import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handlSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
    }
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <CardElement
                    options={
                        {
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                />
                <h1>Card Number</h1>
                <input className="mt-4" type="number" />
                <br />
                <button className="btn btn-info text-white my-4" type="submit" >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;