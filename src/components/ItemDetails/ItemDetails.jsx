import { query, where, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import { productosRef } from '../../firebase';

export const ItemDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [producto, setProducto] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const cargarProductoDesdeFirebase = async () => {
      try {
        console.log('productosRef:', productosRef);
        console.log('Loading product from Firebase with slug:', slug);

        if (!slug) {
          console.error('Slug no proporcionado');
          navigate('/');
          return;
        }

        const querySnapshot = await getDocs(query(productosRef, where('slug', '==', slug)));

        if (querySnapshot.empty) {
          console.log('No se encontró el producto en Firebase');
          navigate('/');
          return;
        }

        const data = querySnapshot.docs[0].data();
        console.log('docSnap data:', data);
        setProducto(data);
      } catch (error) {
        console.error('Error al cargar el producto desde Firebase', error);
        navigate('/');
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
      navigate('/cart');
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  if (!producto) {
    return <div className="flex flex-col items-center justify-center h-screen">
              <Spinner color="warning" className="h-20 w-20"></Spinner>
              <p className="mt-4">Cargando producto...</p>
          </div>
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
      <div className=" mt-4">
        <div className="flex w-full">
          <div className="mr-8">
            <img src={imagen} alt={nombre} className="max-w-md rounded" />
            <p className="text-gray-600 text-sm mb-2 mt-2">
              <strong>Descripción Breve:</strong> {breveDescripcion}
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-sky-950 mb-4">{nombre}</h1>
            <p className="text-xl font-semibold text-gray-950 mb-4">{descripcion}</p>

            <ul className="list-disc list-inside">
              {informacion.map((info, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {info}
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold mt-4 text-gray-600 mb-4">{destacado}</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col justify-center gap-3 items-center border rounded p-4 w-full">
          <div className="flex gap-2 mt-2">
            <h1 className="text-5xl font-semibold mb-2 text-sky-950">${precio} </h1>
            <span className="text-4xl font-semibold mb-3 text-sky-950">USD</span>
          </div>

          <div className="w-full">
            <button
              onClick={() => toggleCart(producto)}
              className='text-xl font-medium bg-blue-600 hover:bg-blue-500 dark:bg-yellow-500 w-full p-3 my-2 text-white rounded'
            >
              {isProductInCart(producto.slug) ? 'Finalizar mi compra' : 'Agregar al carrito'}
            </button>
          </div>
        </div>

        <div className="mt-9">
          {!videoLoaded && (
            <div className="h-12 w-12 flex flex-wrap m-auto justify-center items-center mb-2">
              <Spinner className="spinner"></Spinner>
              <div className="spinner"></div>
            </div>
          )}
          <div className="video-container mt-2 rounded">
            <iframe
              onLoad={handleVideoLoad}
              width="350"
              height="225"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};