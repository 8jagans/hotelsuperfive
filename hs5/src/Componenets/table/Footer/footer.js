import imgs from '../../../assests/images/jeganlogo.png';
import styles from './footer.module.css';


const Footer =()=>{
    return(
        <footer className="footer-content">
            <div className={styles.back}>
            <p className={styles.l1}> - </p>

        <div className="container">

            <div className="row">  
 
            <div>
                    <h4> CONTACT US </h4>
		              121, VELACHERY,
                     <br></br>

                      CHENNAI 600008.<br/>
                      <br/>
		              <i className="fa fa-phone fa-lg">&nbsp;</i>: 65575858585<br/>
		              <i className="fa fa-fax fa-lg">&nbsp;</i>: 46575859509<br/>
		           </div>  
                   <div class="col-12 offset-2 col-sm-5 align-self-center">
                    <div class=" text-center">
                        <a href="http://google.com/+" className={styles.icon}><i 
                        style={{
                            background: "red",
                            color: "white",
                            width:"40px",
                            height:"30px"
                    }}className="fa fa-google-plus fa-lg "></i></a>
                        <a href="http://www.facebook.com/profile.php?id="className={styles.icon} ><span style={{
                
                                background: "#3B5998",
                                color: "white",
                                width:"45px",
                                height:"30px"
                        }} className="fa fa-facebook fa-lg"></span></a>
                        <a href="http://www.linkedin.com/in/" className={styles.icon} ><span style={{
                            background: " #0072b1",
                            color: "white",
                              width:"45px",
                              height:"30px"
                        }}className="fa fa-linkedin fa-lg"></span></a>
                        <a href="http://twitter.com/" className={styles.icon}><span  style={{
                            
                background: "#55ACEE",
                color: "white",
              
                width:"45px",
                height:"30px"
        }}  className="fa fa-twitter fa-lg"></span></a>
                    <a href="https://github.com/8jagans/hotelsuperfive/" className={styles.icon}><i 
                    style={{
                            
                        background:"white",
                        color: "black",
                      
                        width:"45px",
                        height:"30px"
                }}class="fa fa-github"></i></a>    
                    </div>
                </div>    
                <img className={styles.img2} src={imgs}></img>

                </div>


        </div>

        </div>
    </footer>
    )
}
export default Footer;