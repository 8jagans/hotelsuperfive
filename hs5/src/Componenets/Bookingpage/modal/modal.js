import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './modal.module.css'

class ModalExample extends Component  {
  state={
    modal:false,
    dis:"inline"
  }
  render(){
    
  const toggle = () => {
    this.setState({
      modal:true
    })
  }
  const togg = () => {
    this.setState({
      modal:false
    })
  }
  var p=null;
  if(this.props.string!=null){
    const s=(
      <ModalBody>
      price for {this.props.string} is {this.props.price}
     </ModalBody>
    )
    p=s;
  }
  var p1=null;
  if(this.props.str!=null){
    const s=(
      <ModalBody>
      price for {this.props.str} is {this.props.pr}
     </ModalBody>
    )
    p1=s;
  }
  var p2=null;
  if(this.props.total!=null){
    const s=(
      <ModalBody>
      price for Rooms is {this.props.total}
     </ModalBody>
    )
    p2=s;
  }
  var p3=null;
  if(this.props.val!=null){
    const s=(
      <ModalBody>
      Total price is:  {this.props.val}
     </ModalBody>
    )
    p3=s;
  }
  return (
    <div>
      <Button color="primary" onClick={toggle}>Check Price</Button>
      
      <Modal isOpen={this.state.modal} toggle={toggle} >
        <ModalHeader toggle={togg} className={style.button}>Total Price</ModalHeader>
        {p}
        {p1}
        {p2}
        {p3}
        <ModalFooter>
          <Button color="danger" onClick={togg}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
}
export default ModalExample;