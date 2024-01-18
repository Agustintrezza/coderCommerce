import { query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import { productosRef } from "../../firebase";

export const ItemDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [producto, setProducto] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const cargarProductoDesdeFirebase = async () => {
      try {
        if (!slug) {
          navigate("/");
          return;
        }

        const querySnapshot = await getDocs(
          query(productosRef, where("slug", "==", slug))
        );

        if (querySnapshot.empty) {
          navigate("/");
          return;
        }

        const data = querySnapshot.docs[0].data();
        setProducto(data);
      } catch (error) {
        navigate("/");
      }
    };

    cargarProductoDesdeFirebase();
  }, [slug, navigate]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const isProductInCart = (slug) => {
    return cart.some((item) => item.slug === slug);
  };

  const toggleCart = (product) => {
    if (isProductInCart(product.slug)) {
      navigate("/cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  if (!producto) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner color="warning" className="h-20 w-20"></Spinner>
        <p className="mt-4">Cargando producto...</p>
      </div>
    );
  }

  const {
    nombre,
    imagen,
    descripcion,
    precio,
    video,
    informacion,
    destacado,
    breveDescripcion,
  } = producto;

  return (
    <div className="flex custom-container-externo">
      <div className="mt-4">
        <div className="flex w-full contenedor-interno-producto">
          <div className="mr-0 md:mr-8">
            <img src={imagen} alt={nombre} className="rounded w-full" />
            <p className="text-center md:text-start text-gray-600 text-sm mb-2 mt-2">
              <strong>Descripción Breve:</strong> {breveDescripcion}
            </p>
          </div>
          <div>
            <h1 className="text-center md:text-start text-4xl font-bold text-sky-950 mb-4">
              {nombre}
            </h1>
            <p className="text-center md:text-start text-xl font-semibold text-gray-950 mb-4">
              {descripcion}
            </p>

            <ul className="list-disc list-inside">
              {informacion.map((info, index) => (
                <li
                  key={index}
                  className="text-center md:text-start text-gray-600 mb-2"
                >
                  {info}
                </li>
              ))}
            </ul>
            <p className="text-center md:text-start text-xl font-semibold mt-4 text-gray-600 mb-4">
              {destacado}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col justify-center gap-3 items-center border rounded p-4 w-full">
          <div className="flex gap-2 mt-2">
            <h1 className="text-5xl font-semibold mb-2 text-sky-950">
              ${precio}{" "}
            </h1>
            <span className="text-4xl font-semibold mb-3 text-sky-950">
              USD
            </span>
          </div>

          <div className="w-full">
            <button
              onClick={() => toggleCart(producto)}
              className="text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded"
            >
              {isProductInCart(producto.slug)
                ? "Finalizar mi compra"
                : "Agregar al carrito"}
            </button>
          </div>
        </div>

        <div className="mt-9 flex flex-col justify-center items-center">
          {!videoLoaded && (
            <div className="h-8 w-8 flex flex-wrap m-auto justify-center items-center mb-8">
              <Spinner className="spinner-3"></Spinner>
              <div className="spinner"></div>
            </div>
          )}
          <div className="mt-2">
            <iframe
              onLoad={handleVideoLoad}
              width="350"
              height="225"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
