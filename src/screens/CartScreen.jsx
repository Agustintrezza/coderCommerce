import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MdDeleteSweep } from "react-icons/md";

const CartScreen = () => {
  const { cart, dispatch } = useCart();

  const updateCartHandler = (item, newQuantity) => {
    if (newQuantity > 0 && newQuantity <= item.stock) {
      dispatch({
        type: "ACTUALIZAR_CANTIDAD",
        payload: { slug: item.slug, quantity: newQuantity },
      });
    } else {
      window.alert("No es posible asignar una cantidad menor a 1 de este producto.");
    }
  };

  const removeItemHandler = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const totalPrices = cart.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="contenedor-general-cart">
      <div className="py-1 custom-container-80">
        <h1 className=" text-5xl font-semibold text-sky-950 mt-4">Carrito</h1>
      </div>
      <div className="grid-custom-cart">
      
        {cart.length === 0 ? (
          <div className="bg-blue-600 text-white text-lg font-semibold p-4 rounded">
            <p className="w-full flex">No hay productos agregados al carrito. <a className="underline ms-4" href="/">¡Agregar!</a></p>
          </div>
        ) : (
          <div className="w-full">
          {cart.map((item) => (
            <div
              key={item.id}
              className="contenedor-item-cart border rounded mb-4 p-4 flex items-center space-x-4 shadow-md"
            >
              <Link className="mt-4">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-25 h-20 rounded"
                />
              </Link>

              <div className="flex-1 mt-3">
                <Link
                  to={`/producto/${item.slug}`}
                  className="text-xl font-semibold tracking-tight text-blue-500 dark:text-white hover:underline"
                >
                  {item.nombre}
                </Link>

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
              <div className="flex items-center mt-3">
                <button
                  className="border p-1 rounded bg-transparent w-8 hover:bg-slate-100 shadow-md"
                  onClick={() => updateCartHandler(item, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="border p-1 rounded bg-transparent w-8 hover:bg-slate-100 shadow-md"
                  onClick={() => updateCartHandler(item, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const confirmed = window.confirm(
                      "¿Estás seguro que deseas eliminar el producto?"
                    );
                    if (confirmed) {
                      removeItemHandler(item);
                    }
                  }}
                  className="ml-2"
                >
                  <MdDeleteSweep className="h-6 w-6 ms-2 text-red-500 hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
        )}

        

        <div className="w-full mt-10 md:mt-0">
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
            <Link to={"/checkout"} className="w-full">
              <button disabled={cart.length === 0} className="text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded">
                Ir al Ckeckout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
