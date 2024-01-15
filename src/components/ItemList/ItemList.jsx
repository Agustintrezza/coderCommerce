import { useState, useEffect } from 'react';
import { Card, Spinner } from 'flowbite-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { getFirestore } from '../../firebase';

export const ItemList = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 

  const isProductInCart = (slug) => {
    return cart.some((item) => item.slug === slug);
  };

  const handleAddToCartClick = (event, producto) => {
    toggleCart(producto);
  };

  const handleCardClick = (slug) => {
    console.log('Navigating to:', `/producto/${slug}`);
    navigate(`/producto/${slug}`);
  };

  const toggleCart = (product) => {
    if (isProductInCart(product.slug)) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');

      try {
        const productosSnapshot = await getDocs(productosCollection);
        const productosData = productosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener los productos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="custom-container min-h-screen">
      <div className="">
        <h1 className="text-4xl font-bold text-sky-950">PRODUCTOS</h1>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner color="warning" className="h-20 w-20"></Spinner>
          <p className="mt-4">Cargando productos...</p>
        </div>
      ) : (
        <div className="custom-grid mt-10">
          {productos.map((producto) => (
            <div key={producto.id}>
              <Card
                className="max-w-sm mb-4 min-w-full cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={producto.imagen}
                onClick={() => handleCardClick(producto.slug)}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {producto.nombre}
                  </h5>
                </a>
                <div className="mb-5 mt-2.5 flex items-center"></div>
                <div className="flex items-center gap-4 justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${producto.precio}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCartClick(e, producto);
                    }}
                    className={`rounded-lg px-2 py-2.5 text-center text-sm font-medium ${
                      isProductInCart(producto.slug)
                        ? 'bg-yellow-500 text-white'
                        : 'bg-blue-600 text-white hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                    }`}
                  >
                    {isProductInCart(producto.slug) ? 'Quitar del carrito' : 'Agregar al carrito'}
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};