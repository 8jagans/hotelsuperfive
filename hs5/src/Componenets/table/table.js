import React,{Component} from 'react';
import sty from './table.module.css';
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import Header from './header/header.js';
import Footer from './Footer/footer.js';



class Example extends Component {
  state={
    data : null
  }
  componentDidMount(){
    axios.get("http://localhost:3001/fin").then((response)=>{
      console.log(response.data);
      this.setState({
        data:response.data
      })      
    })
  }

  
  
  render()
  {
    if(this.state.data!=null)
    {
      var a=this.state.data[0];
      var fina=a.firstname;
      var lana=a.lastname;

      const date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
   .format(new Date(Date.parse(a.dob)));
      var ph=a.mobileno;
      var addr=a.address;
      var pric=a.totalprice;

      const don=()=>
      {
        console.log("added");
        axios.post("http://localhost:3001/trunk").then(()=>{
        })
      }
      

    return (
      <div> <Header></Header>
        <div className={sty.tabe}>
          <img className={sty.img} src="https://tetranoodle.com/wp-content/uploads/2018/07/tick-gif.gif"></img>
          <h1 className={sty.h}> BOOKED SUCCESSFULLY </h1>
      <Table className={sty.t}>
        <tbody>
          <tr>
            <th> First Name </th>
            <td>{fina}</td>
          </tr>
          <tr>
            <th> Last Name </th>
            <td>{lana}</td>
          </tr>
          <tr>
            <th> DOB </th>
            <td>{date}</td>
          </tr>
          <tr>
            <th> Phone </th>
            <td>{ph}</td>
          </tr>
          <tr>
            <th> Address </th>
            <td>{addr}</td>
          </tr>
          <tr className={sty.mt}>
            <th></th>
            <td></td>
            </tr>
          <tr>
            <th> Total Cost </th>
            <td>₹ {pric}</td>
          </tr>
        </tbody>
      </Table>
      <Button className={sty.d} onClick={ ()=>don() } color="warning"> Done </Button>
      </div>
      <Footer></Footer>
      </div>
    );
    }
    else
    {
      return <div></div>
    }
  }

}
  
export default Example;