import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ClienteForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={cliente: props.cliente}
      this.changeHandler = this.changeHandler.bind(this)
      this.sendHandler = this.sendHandler.bind(this)
    }

    componentWillReceiveProps(props) {
      this.setState({cliente: props.cliente})
    }

    changeHandler(event) {
        var nuevoCliente = Object.assign({}, this.state.cliente)
        nuevoCliente[event.target.name] = event.target.value
        this.setState({cliente: nuevoCliente})
    }

    sendHandler(event) {
        fetch('http://localhost:8889/clientes', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.cliente)
        }).then(res => this.props.clienteChanged(this.state.cliente) )
          .catch(res => console.log("ERRORRRRRRRRRRR") );

        event.preventDefault();
    }



    render() {

      return (
        <Form onSubmit={this.sendHandler}>
          {/* <label>Nombre</label> 
          <input type="text" name='nombre' value={this.state.cliente.nombre} onChange={this.changeHandler} /><br />
          <label>RazonSocial</label> 
          <input type="text" name='razonsocial' value={this.state.cliente.razonsocial} onChange={this.changeHandler}/><br />
          <br />
          <input type="submit" value="Enviar"/>  */}
          
          <FormGroup>
          <Label for="exampleName">Nombre</Label>
          <Input type="text" name="nombre" id="exampleNombre" value={this.state.cliente.nombre} 
           onChange={this.changeHandler} placeholder="ej.Delfina Baldaccino" />
        </FormGroup>
        <FormGroup>
          <Label for="examplerazonsocial">Razon social</Label>
          <Input type="text" name="razonsocial" id="exampleRazonsocial" value={this.state.cliente.razonsocial}
          onChange={this.changeHandler} placeholder="GipsyCode" />
        </FormGroup>
        <FormText></FormText>
        <Button>
          <input type="submit" value="Actualizar"/>
        </Button>
      

        </Form>
    )
  
    }


}
  export default ClienteForm



  