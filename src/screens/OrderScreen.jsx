import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ordenesRef } from "../firebase.js";
import { getDocs } from "firebase/firestore";
import { Spinner } from "flowbite-react";

export const OrderScreen = () => {
  const { id: orderIdFromParams } = useParams();
  const navigate = useNavigate();

  const [orden, setOrden] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const cargarProductoDesdeFirebase = async () => {
      try {

        if (!orderIdFromParams) {
          navigate("/");
          return;
        }

        const querySnapshot = await getDocs(ordenesRef);

        const data = querySnapshot.docs
          .map((doc) => {
            const docData = doc.data();
            return { ...docData, orderId: doc.id };
          })
          .find((order) => order.orderId === orderIdFromParams);

        if (data) {
          setOrden(data);
          const total = data.items.reduce((acc, item) => {
            return acc + item.precio * item.quantity;
          }, 0);
          setOrderTotal(total);
        } else {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    cargarProductoDesdeFirebase();
  }, [orderIdFromParams, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner color="warning" className="h-20 w-20"></Spinner>
        <p className="mt-4">Cargando Órden...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="py-1 gap-6 custom-container-80 flex items-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-sky-950">
            Órden {orderIdFromParams}
          </h1>
        </div>
      </div>

      <div className="grid-custom-cart">
        {/* <div> */}
          <div className="border flex-col rounded mb-4 p-4 flex shadow-md">
            <div className="flex justify-between items-center my-1">
              <div>
                <h1 className="text-xl mb-2 font-semibold">
                  Información de la Orden
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <div className="flex">
                  <p className="font-semibold">Nombre: </p>
                  <span className="ms-2"> {orden.user.name}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Correo: </p>{" "}
                  <span className="ms-2">{orden.user.email}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Teléfono: </p>{" "}
                  <span className="ms-2">{orden.user.telefono}</span>
                </div>
              </div>

              <div className="me-10">
                <div className="flex">
                  <p className="font-semibold">País: </p>
                  <span className="ms-2"> {orden.user.pais}</span>
                </div>
                <div className="flex">
                  <p className="font-semibold">Ciudad: </p>{" "}
                  <span className="ms-2">{orden.user.ciudad}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 mt-6 flex flex-col">
              <div className="flex justify-between items-center my-1">
                <div>
                  <h1 className="text-xl mb-2 font-semibold">Método de Pago</h1>
                </div>
              </div>

              <div className="flex">
                <p className="font-semibold">Método seleccionado: </p>
                <span className="ms-2"> {orden.user.paymentMethod}</span>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="flex justify-between items-center my-2">
                <div>
                  <h1 className="text-xl mb-2 font-semibold">
                    Items de la Orden
                  </h1>
                </div>
              </div>

              {orden.items.map((item, index) => (
                <div key={item.id || index} className="mb-4 flex">
                  <div>
                    <Link to={`/producto/${item.slug}`}>
                      <img
                        src={item.img}
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

                    <div className="flex justify-between row-gap-4 me-5">
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
                          Total del producto:{" "}
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
            <div className="flex justify-end items-center">
              <p className="text-gray-700 text-xl me-3">Total de la Órden: </p>{" "}
              <span className="text-2xl text-black font-semibold me-5">
                ${orderTotal}
              </span>
            </div>
          </div>

          <div>
          <div className="flex flex-col justify-center gap-3 items-center border p-4">
            <div>
              <h1 className="text-3xl text-center font-semibold text-sky-950">
                ¡Gracias por comprar con nosotros!
              </h1>
            </div>
            <div className="w-full">
              <Link to={`/`}>
                <button className="bg-blue-500 w-full text-white py-2 px-4 rounded">
                  ¡Seguir Comprando!
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>

        
      </div>
    // </div>
  );
};
