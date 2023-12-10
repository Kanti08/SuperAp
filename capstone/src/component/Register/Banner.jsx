import styles from "./Banner.module.css";
import BackgroundImage from "../../assets/page1_bg.png";

const Banner =() => {
    return(
        <>
            <div className={'${styles.class1} ${styles.class2} ${styles.class3}'}>
       <p className={styles.para}>Discover new things on SuperApp</p>
       </div>
       <img src={BackgroundImage}/>
       </>
    );
};
export default Banner;

