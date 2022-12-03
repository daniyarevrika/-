import styles from "./Slider.module.scss";
import Cart from "./Cart";
import React, { useState } from 'react';
import Carusel from "./Carusel";

const Slider = ({ CartInfo, setProduct, product, count, setCount }) => {

   const [Item, setItem] = useState([]);
   React.useEffect(() => {
      setItem(CartInfo)
   }, [])



   return (


      <div className={styles.container}>
         <div className={styles.title}>Успей купить! </div>
         <div className={styles.sale}>Акции</div>

         <Carusel>
            {Item.map((obj) => (
               <Cart
                  count={obj.count}
                  product={product}
                  newprice={obj.newprice}
                  oldprice={obj.oldprice}
                  name={obj.name}
                  button={obj.button}
                  id={obj.id}
                  setProduct={setProduct}
                  CartInfo={CartInfo}

               />
            ))}
         </Carusel>

      </div>
   )
}


export default Slider

