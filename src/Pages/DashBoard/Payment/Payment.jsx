import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
//TO DO: 
const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <div className="text-center">
                <SectionTitle subHeding='please pay to eat' heading='Payment'>

                </SectionTitle>
            </div>
            <div>
                <Elements stripe={stripePromise}></Elements>
            </div>
        </div>
    );
};

export default Payment;