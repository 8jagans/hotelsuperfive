import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import styles from './personal.module.css'
import axios from 'axios';
import  {Link} from 'react-router-dom';
class Forms extends Component{
  state={
    Firstname:null,
    Lastname:null,
    dob:null,
    mob:null,
    add:null
  }
  render(){
    const firstname=(e)=>{
      console.log(e)
      this.setState({
        Firstname:e
      })}
    const lastname=(e)=>{
        console.log(e)
        this.setState({
          Lastname:e
        })}
    const dob=(e)=>{
          console.log(e)
          this.setState({
            dob:e
          })}
      const mobile=(e)=>{
            console.log(e)
            this.setState({
              mob:e
            })}
      const address=(e)=>{
              console.log(e)
              this.setState({
                add:e
              })}
      const submitom=()=>{
        console.log("post")
        axios.post("http://localhost:3001/ins",{firstname:this.state.Firstname,
      lastname:this.state.Lastname,
      dob:this.state.dob,
    mobile:this.state.mob,
  address:this.state.add}).then(
          ()=>{
            alert("successful insert");
          }
        )
      }
      
    
    return(
      <div className={styles.img}>
        <br></br><br></br><br>
       </br>
       <br></br>
        <Form className={styles.form}>
        <h1 className={styles.h}>PERSONAL INFO </h1>
        
        <br></br>
        <div>
        <FormGroup row>
          <Label className={styles.label}for="name" sm={2}>Firstname</Label>
          <Col sm={10}>
            <Input onChange={(e)=>firstname(e.target.value)} className={styles.type} placeholder="Enter your Firstname" type="text" name="Firstname" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className={styles.label}for="name" sm={2}>Lastname</Label>
          <Col sm={10}>
            <Input onChange={(e)=>lastname(e.target.value)} className={styles.type}  placeholder="Enter your Lastname"  type="text" name="Lastname"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className={styles.label} for="Date" sm={2}>DOB</Label>
          <Col sm={10}>
            <Input onChange={(e)=>dob(e.target.value)} className={styles.type}  placeholder="Enter your Date of Birth" type="date" name="date of birth"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  className={styles.label}for="mobile" sm={2}>Mobile No: </Label>
          <Col sm={10}>
            <Input onChange={(e)=>mobile(e.target.value)} className={styles.type}  placeholder="Enter your mobile number" type="tel" name="mobile"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className={styles.label} for="Address" sm={2}>Address</Label>
          <Col sm={10}>
            <Input onChange={(e)=>address(e.target.value)}className={styles.type}  type="textarea" name="Address" placeholder="Enter your address" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={()=> submitom()} className={styles.button} >Submit</Button>
            <Button className={styles.button} ><Link to="/booking" style={{
              textDecoration:"none",
              color:"white"
            }} >Save&Continue</Link></Button>
            
          </Col>
        </FormGroup>
        </div>
        <br></br>
        <br></br>
      </Form>
      </div>
  
    )
}}
export default Forms;