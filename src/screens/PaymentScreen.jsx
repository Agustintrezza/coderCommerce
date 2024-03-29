import { Label, Radio } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentScreen = () => {
  const navigate = useNavigate();

  const storedUserData = localStorage.getItem("userDataOrder");
  const initialPaymentMethod = storedUserData
    ? JSON.parse(storedUserData).paymentMethod || ""
    : "";

  const [paymentMethodName, setPaymentMethod] = useState(initialPaymentMethod);
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(
        "userDataOrder",
        JSON.stringify({ ...userData, paymentMethod: paymentMethodName })
      );
      navigate("/place-order");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDataOrder");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center w-full md:w-[500px] items-center h-[60vh]">
        <div className="flex justify-between w-full">
          <div className="w-full md:w-[500px]">
            <h1 className="text-4xl sm:text-start font-bold pb-2 text-sky-950 mb-8">
              Método de Pago
            </h1>
          </div>
          <div>
            <h1 className="text-4xl text-center sm:text-start font-bold pb-2 text-sky-950">
              2/3
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <fieldset className="flex flex-col w-full md:w-[500px] gap-4">
            <div className="flex items-center gap-2">
              <Radio
                className="cursor-pointer"
                id="paypal"
                name="payment"
                value="PayPal"
                checked={paymentMethodName === "PayPal"}
                onChange={() => setPaymentMethod("PayPal")}
                required
              />
              <Label className="text-xl cursor-pointer" htmlFor="paypal">
                PayPal
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                className="cursor-pointer"
                id="mercadoPago"
                name="payment"
                value="Mercado Pago"
                checked={paymentMethodName === "Mercado Pago"}
                onChange={() => setPaymentMethod("Mercado Pago")}
              />
              <Label className="text-xl cursor-pointer" htmlFor="mercadoPago">
                Mercado Pago
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                className="cursor-pointer"
                id="transferencia"
                name="payment"
                value="Transferencia/Depósito"
                checked={paymentMethodName === "Transferencia/Depósito"}
                onChange={() => setPaymentMethod("Transferencia/Depósito")}
              />
              <Label className="text-xl cursor-pointer" htmlFor="transferencia">
                Transferencia o depósito
              </Label>
            </div>

            <div className="flex justify-end w-full md:w-[500px]">
              <button
                type="submit"
                className="text-xl mt-4 md:mt-0 font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-4/12 p-3 my-2 text-white rounded"
              >
                Continuar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
