import Header from './Homepage/Header/header';
import Carousel from './Homepage/Carousel/carousel';
import Footer from './Homepage/Footer/footer';
import Review from './Homepage/review/Review';
import styles from './homepage.module.css'
const Homepage =()=>{
    return(
        <div className={styles.back}>
        <Header/>
        <Carousel/>
        <Review/>
        <Footer/>
        </div>
    )
}
export default Homepage;