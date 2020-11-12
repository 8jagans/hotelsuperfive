import React ,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input,FormText} from 'reactstrap';
import style from './form.module.css';
import Modal from '../modal/modal';
import axi from 'axios'
import {Link} from 'react-router-dom';

class  form extends Component {
    state={
      dis:"none",
      swim:300,
      wifi:200,
      total:null,
      sum:0,
      op:null,
      s1:null,
      p1:null,
      cl:null
    }
  render(){
    
    const b=()=>{
      console.log("running");
      axi.post("http://localhost:3001/bok",{total:this.state.total+this.state.sum}).then(()=>{
        console.log("Connected the backend");
      });
    }
  const radio=()=>{
    console.log("Hey");
    this.setState({
      dis:"inline"
    })
  }
  const nonradio=()=>{
    this.setState({
      dis: "none"
    })
  }
  const swim=()=>{
    this.setState({
      sum:this.state.sum+this.state.swim,
      op:"Swimming pool",
      cl:300
    })
  }
  const nonswim=()=>{
    this.setState({
      sum:this.state.sum-this.state.swim,
      op:null,
      cl:null
    })
  }
  const wifi=()=>{
    this.setState({
      sum:this.state.sum+this.state.wifi,
      s1:"Wifi",
      p1:200
    })
  }
  const nonwifi=()=>{
    this.setState({
      sum:this.state.sum-this.state.wifi,
      s1:null,
      p1:null
    })
  }
  const option=(val)=>{
    this.setState({
      total:this.props.price*val
    })
  }
  return (
  <div>
    <h1 className={style.title}>RESERVATION FOR ROOMS</h1>
      <div className={style.width}>
    <Form className={style.mod}>
    <FormGroup row>
        <Label for="exampleSelect"  sm={2}>No of Rooms</Label>
        <Col sm={10}>
          <Input onChange={(event)=>option(event.target.value)} className={style.type} type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup class ="Swim">
          <lengend>Wanna enjoy Swimming pool?</lengend>
          <FormGroup check>
          <Label check>
            <Input onChange={()=>swim()} type="radio" name="radio1" />{' '}
            Yes
          </Label>
        </FormGroup>
        
    </FormGroup>    
    <FormGroup class ="wifi">
          <lengend>Wanna enjoy Wifi?</lengend>
          <FormGroup check>
          <Label check>
            <Input onChange={()=>wifi()} type="radio" name="radio2" />{' '}
            Yes
          </Label>
        </FormGroup>
    </FormGroup>  
    <FormGroup row>
        <Label for="price" sm={2}>Total Price</Label>
        <Col sm={10}>
          <Input className={style.price} value={this.state.total+Math.abs(this.state.sum)} type="text" name="price" />
        </Col>
      </FormGroup>
    <Modal string={this.state.op} str={this.state.s1} price={this.state.cl} pr={this.state.p1} 
    total={this.state.total} val={this.state.sum+this.state.total}/>
    <br></br>
    <Button color="primary" onClick={()=>b()}> <Link style={{
      textDecoration:"none",
      color:"white"
    }} to="/table" > SUBMIT </Link> </Button>
    </Form>
    </div>
    </div>
  );
}}

export default form;