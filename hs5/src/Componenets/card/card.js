import React ,{Component} from 'react';
import sty from './card.module.css';
import Form from '../Bookingpage/form/form';
import { Badge } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class cards extends Component
{
        state={
            wantprice:null
        }
    render(){
        const calculate=(pr)=>{
            alert("ROOM TYPE ADDED");
            this.setState({
                wantprice:pr
            })
        }
    const data=[{
        id:0,
        category:"single bed",
        img: "https://setupmyhotel.com/images/Room-Type-Single-Room.jpg?ezimgfmt=rs:300x250/rscb234/ng:webp/ngcb234" ,
        count: "1 Person",
        price: "₹ 250",
        pr:250
    },{
        id:1,
        category:"double bed",
        img:"https://file.videopolis.com/F/1/e8814f62-814b-475f-8edd-a4bbf7edb427/100267.12122.london.the-tower-hotel.room.standard-double-room-O9hkyIwA-18728-853x480.jpeg",
        count: "2 Persons",
        price: "₹ 450",
        pr:450
    },{
        id:2,
        category:"twin bed",
        img:"https://www.mercuretownsville.com.au/d/townsville/media/rooms/__thumbs_600_500_crop/Superior_Room_2_single_beds.jpg",
        count: "2 Persons",
        price: "₹ 500",
        pr:500
    },{
        id:3,
        category:"triple bed",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIwOJI4Rwu3Nhz33rJMeXTT9SYIoQKRYFlBQ&usqp=CAU",
        count: "3 Persons",
        price: "₹ 650",
        pr:650
    },{
        id:4,
        category:"quad bed",
        img:"https://lh5.googleusercontent.com/J1XpKNGlglaV2YCFLOVWDMd4rUxkM2SoanCbgOfs3OymPCbOT9azKGjisbonjM-K5ti7fnf-o68yRmJwZi083J6Yarx7M20YG7ft92_5h2J3Tew_XAQLG-FqCOofn2fhbjcYCdaU",
        count: "4 Persons",
        price: "₹ 800",
        pr:800
    },{
        id:5,
        category:"joint",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGr1bh6mK5sgLWobPQYr7ciTZ43JKP4GUNeg&usqp=CAU",
        count: "4 Persons",
        price: "₹ 1000",
        pr:1000
    },{
        id:6,
        category:"royal suite",
        img:"https://s7d2.scene7.com/is/image/ritzcarlton/50556324-Premium%20King%20Bed%20Room?$XlargeViewport100pct$",
        count: "2 Persons",
        price: "₹ 3000",
        pr:3000
    },{
        id:7,
        category:"modern suite",
        img:"https://www.ofdesign.net/wp-content/uploads/files/2/8/8/87-ideas-modern-bedroom-elegant-design-with-a-touch-designer-0-288.jpg",
        count: "2 Persons",
        price: "₹ 3000",
        pr:3000
    }]
    
    var crd=data.map((c)=>{
        return(
            <Card key={c.id} className={sty.div}>
                <CardImg className={sty.image} src={c.img} />
                <CardBody>
          <CardTitle className={sty.title}> {c.category} </CardTitle>
          <CardSubtitle className={sty.sub}>{c.count}</CardSubtitle>
          <Badge className={sty.badge} primary> {c.price} </Badge>
          <Badge onClick={()=>calculate(c.pr)} className={sty.button} pill> add </Badge>
        </CardBody>
      </Card>
        )
    })

    return (
      <div>
        {crd}
        <div className={sty.margin}>
        <Form  price={this.state.wantprice}/>
        </div>
     </div>
    );
}}

export default cards;