import styles from "./Cart.module.scss";
import { FaStar } from "react-icons/fa";
const Cart = (props) => {
   const countOn = () => {

      props.count = props.count + 1
      console.log(props.count)
   }


   const pushProduct = () => {

      typeof (props.product.find(i => i.id == props.id)) !== 'undefined' ? countOn() : props.setProduct([...props.product, {
         count: props.count,
         id: props.id,
         newprice: props.newprice,
         oldprice: props.oldprice,
         name: props.name,
      }])
      // console.log(props.propduct.props.count)
   }
   return (
      <div className={styles.gap}>
         <div className={styles.hoveffect}>
            <div className={styles.cart}>
               <div >
                  <img className={styles.img} src="icons/dress1.png" alt="" />
               </div>
               <div className={styles.cartinfo}>
                  <div className={styles.leftside}>
                     <div className={styles.price}>
                        <div className={styles.newprice}>{props.newprice}</div>
                        <div className={styles.oldprice}>{props.oldprice}</div>
                     </div>
                     <div className={styles.dressname}>{props.name}</div>
                     <button onClick={(e) => pushProduct(e)} className={styles.btn}>
                        <div>{props.button}</div>
                        <div className={styles.arrow}>
                           <div>
                           </div>
                        </div>
                     </button>
                  </div>
                  <div className={styles.rightside}>
                     <div className={styles.icons}><img src="icons/favorite.svg" alt="" /><img src="icons/Vector.svg" alt="" /></div>
                     <div><FaStar style={{ width: '13px' }} /><FaStar style={{ width: '13px' }} /><FaStar style={{ width: '13px' }} /><FaStar style={{ width: '13px' }} /></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Cart