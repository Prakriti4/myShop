// import { useState, useEffect } from 'react';
// import RootLayout from './layout';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     console.log('I am useEffect from app.js');
//   }, []);

//   const [cart, setCart] = useState([]); // Initialized as an empty array

//   const addToCart = (item, qty) => {
//     let newCart = [...cart];
//     for (let index = 0; index < qty; index++) {
//       newCart.push(item);
//     }
//     setCart(newCart);
//   };

//   const removeFromCart = (item, qty) => {
//     let newCart = [...cart];
//     for (let index = 0; index < qty; index++) {
//       let idx = newCart.indexOf(item);
//       if (idx !== -1) {
//         newCart.splice(idx, 1);
//       }
//     }
//     setCart(newCart);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <RootLayout cart={cart}>
//       <Component
//         removeFromCart={removeFromCart}
//         addToCart={addToCart}
//         clearCart={clearCart}
//         cart={cart}
//         {...pageProps}
//       />
//     </RootLayout>
//   );
// }

// export default MyApp;
