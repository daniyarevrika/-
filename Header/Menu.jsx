import styles from "./Menu.module.scss";
// import logo from "icons/logoneon.png"
const Menu = ({ open, items }) => {
   return (
      <div className={`${styles.bg} ${styles.none} ${open ? styles.show : ''}`}>
         <img src="icons/logoneon.png" alt="" />
         <ul className={styles.modal}>
            {items.map((item) => {
               return <li>{item}</li>
            })}
         </ul>
      </div>
   )
}
export default Menu