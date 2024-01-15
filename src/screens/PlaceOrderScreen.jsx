import { useCart } from "../context/CartContext";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export const PlaceOrderScreen = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const totalPrices = cart.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  // Función para resetear el carrito
  const resetCart = () => {
    dispatch({ type: "RESET_CART" });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDataOrder");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    const orderData = {
      user: userData ? { ...userData } : null,
      items: cart.map((item) => ({
        categoria: item.categoria, 
        nombre: item.nombre, 
        precio: item.precio, 
        stock: item.stock, 
        img: item.imagen,
        quantity: item.quantity, 
        slug: item.slug,
      })),
      totalPrices: totalPrices,
      date: new Date().toISOString(),
    };

    console.log('orderData:', orderData);

    const db = getFirestore();
    
    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orderData);
      console.log('Orden creada con ID: ', docRef.id);

      localStorage.removeItem('itemsCart');
      localStorage.removeItem('userDataOrder');
      resetCart();
      navigate('/orders');
    } catch (error) {
      console.log('orderData:', orderData);
      console.error('Error al crear la orden', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="py-1 gap-6 custom-container-80 flex items-center">
          <h1 className="text-5xl font-semibold text-sky-950">
            Finalizar Compra
          </h1>
          <div>
            <h1 className="text-4xl text-center pt-2 sm:text-start font-bold text-sky-950">
              3/3
            </h1>
          </div>
        </div>
      </div>

      <div className="grid-custom-cart">
        <div>
          <div className="border flex-col rounded mb-4 p-4 flex space-x-4 shadow-md">
            <div className="flex justify-between items-center my-1">
              <div>
                <h1 className="text-xl mb-2 font-semibold">
                  Información de la Orden
                </h1>
              </div>
              <div>
                <Link to={"/checkout"}>
                  <MdEdit className="text-blue-500 w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex">
                  <p className="font-semibold">Nombre: </p>
                  <span className="ms-2"> {userData.name}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Correo: </p>{" "}
                  <span className="ms-2">{userData.email}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Teléfono: </p>{" "}
                  <span className="ms-2">{userData.telefono}</span>
                </div>
              </div>

              <div className="me-10">
                <div className="flex">
                  <p className="font-semibold">País: </p>
                  <span className="ms-2"> {userData.pais}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Ciudad: </p>{" "}
                  <span className="ms-2">{userData.ciudad}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded mb-4 mt-6 p-4 flex flex-col space-x-4 shadow-md">
            <div className="flex justify-between items-center my-1">
              <div>
                <h1 className="text-xl mb-2 font-semibold">Método de Pago</h1>
              </div>

              <div>
                <Link to={"/payment"}>
                  <MdEdit className="text-blue-500 w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="flex">
              <p className="font-semibold">Método seleccionado: </p>
              <span className="ms-2"> {userData.paymentMethod}</span>
            </div>
          </div>

          <div className="border rounded mb-4 p-4 flex flex-col space-x-4 shadow-md">
            <div className="flex justify-between items-center my-2">
              <div>
                <h1 className="text-xl mb-2 font-semibold">
                  Items de la Orden
                </h1>
              </div>
              <div>
                <Link to={"/cart"}>
                  <MdEdit className="text-blue-500 w-6 h-6" />
                </Link>
              </div>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded mb-4 p-4 flex space-x-4 shadow-md"
              >
                <div>
                  <Link>
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-25 h-20 rounded"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex flex-col itmes-start justify-start">
                  <Link
                    to={`/producto/${item.slug}`}
                    className="text-xl mb-2 font-semibold tracking-tight text-blue-500 dark:text-white hover:underline"
                  >
                    {item.nombre}
                  </Link>

                  <div className="flex justify-between me-5">
                    <div className="flex items-center">
                      <p className="text-gray-700 text-md me-3">
                        Cantidad seleccionada:{" "}
                      </p>{" "}
                      <span className="text-xl text-black font-semibold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-700 text-md me-3">
                        Total del servicio:{" "}
                      </p>{" "}
                      <span className="text-xl text-black font-semibold">
                        ${item.precio * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center gap-3 items-center border p-4">
            <div>
              <h1 className="text-3xl text-sky-950">
                Servicios: ({totalItems} items)
              </h1>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-sky-950">
                Total: ${totalPrices}
              </h1>
            </div>
          </div>

          <div>
            {userData.paymentMethod === "PayPal" && (
              <div>
                <Link to={"/order"} className="w-full">
                  <button onClick={handlePlaceOrder} className="flex items-center justify-center h-16 gap-3 text-xl bg-amber-400 hover:bg-yellow-500 dark:bg-yellow-500 w-full p-3 my-2 font-semibold text-black italic rounded">
                    <FaPaypal className="h-7 w-7 text-sky-950" /> PayPal
                  </button>
                </Link>
              </div>
            )}

            {userData.paymentMethod === "Mercado Pago" && (
              <div>
                <Link to={"/order"} className="w-full">
                  <button onClick={handlePlaceOrder} className="flex items-center justify-center gap-3 h-16 text-xl bg-sky-400 w-full p-3 my-2 text-white rounded font-semibold">
                    <SiMercadopago className="text-sky-950 h-9 w-9" /> Mercado
                    Pago
                  </button>
                </Link>
              </div>
            )}

            {userData.paymentMethod === "Transferencia/Depósito" && (
              <div>
                <Link to={"/"} className="w-full">
                  <button onClick={handlePlaceOrder} className="flex items-center justify-center gap-3 h-16 text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded">
                    <FaCreditCard className="text-sky-950 h-9 w-9" /> Credit /
                    Debit card
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
