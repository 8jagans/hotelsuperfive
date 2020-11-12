import img from "../../../assests/images/1.jpg"
import img1 from "../../../assests/images/2.jpg"
import img2 from "../../../assests/images/4.webp"
import style from "./Review.module.css"
import { Media } from 'reactstrap';
import {Link} from 'react-router-dom'
const review=()=>{
    return(
        <div className={style.project}>
        <div class="Food" className={style.space}>
        <Media>
        <Media left href="#">
        <img src={img} className = {style.img}></img>
        </Media>
        <Media  body className={style.space}>
          <Media heading className = {style.Food}>
            FOOD
          </Media>
          Food is the basic material which the body need for its survival and well being Good food
          is indispensable for health at all stages of life and for satisfactory growth during infancy,
          childhood, adolescence and adulthood. Human diet is not restricted to any special category of food.
          Man eats a variety of foods, of plant and animal origin as no single food provides us with all the 
          nutrients that we need.      
          </Media>
        </Media>
        </div>
        <div class="Room" className={style.space}>
        <Media>
        <Media  body left className={style.space}>
          <Media heading className = {style.Food}>
            ROOM
          </Media>
          Room is a place where I feel the most comfortable and openly show my personality to myself.
          Its the perfect place to take rest, enjoy the view of the vacations. It has cozy bed and the perfect
          view of the place which refreshes our mind.Closet, located in the room is decorated with a thick rope.       
          </Media>
        <Media href="#">
        <img src={img1} className = {style.img1}></img>
        </Media>
        </Media>
        </div>
        <div class="Swimming Pool" className={style.space}>
        <Media>
        <Media left href="#">
        <img src={img2} className = {style.img}></img>
        </Media>
        <Media  body className={style.space}>
          <Media heading className = {style.Food}>
            SWIMMING POOL
          </Media>
          Every one expects to refresh themselves and the right place for that is the swimming pool.
          When we got to the swimming pool you could hear the children laughing and splashing in the water.
          You could smell the chlorine in the water from the parking lot. Walking up to the red brick building
           with the tall fence surrounding the swimming pool. Once It chills our body from the bright hot sun.               
          </Media>
        </Media>
        </div>
        <div className={style.b}>
        <button className={style.button1}><Link to="/form"> BOOK NOW </Link></button>
        </div>
        </div>
   )
}

export default review;