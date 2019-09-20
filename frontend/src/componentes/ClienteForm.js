import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ClienteForm extends React.Component {
    constructor(props) {
      super(props)
      this.state={cliente: props.cliente,choferasignado:[]} 
      this.changeHandler = this.changeHandler.bind(this)
      this.handlerChangeSelector=this.handlerChangeSelector.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    

    }

    estadoInicial(){
      this.setState({ cliente: {id:"", nombre: "", razonsocial: "",email:"",
       choferasignado:"",
      } });
      // this.setState({chofer:{id:"",nombre:""}});
    }

    componentWillReceiveProps(props) {
      this.setState({cliente: props.cliente})
    }

    changeHandler(event) {
        var nuevoCliente = Object.assign({}, this.state.cliente)
        nuevoCliente[event.target.name] = event.target.value
        this.setState({cliente: nuevoCliente})}

    handlerChangeSelector(event){
      var choferasignado= Object.assign({},this.state.chofer)
      choferasignado[event.target.name] = event.target.type=== 'select' ? event.target.select : event.target.value;
      this.setState({choferasignado:choferasignado});
    }
 
    sendHandler(event) {
        fetch('http://localhost:8889/clientes', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(res => this.props.clienteChange(this.state.cliente) )
        //selector:
          .then(res=> this.props.handlerChangeSelector(this.state.chofer))  
          .then(res => this.estadoInicial())

        event.preventDefault();
    }
    addHandler(event) {
      fetch('http://localhost:8889/clientes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.cliente)
          })
          .then(res =>this.props.listadoClientes() )
          .then(res =>this.props.listadoChoferesEnViaje())
          .then(res => this.estadoInicial() );
          event.preventDefault();
  }

     onSubmit(event){
      if(this.state.cliente._id){
       this.sendHandler(event)
      }else {
       this.addHandler(event)
    }
  }

    render() {

      return (
        <Form onSubmit={this.onSubmit}>  
          <FormGroup>
          <Label for="exampleName">Nombre</Label>
          <Input type="text" name="nombre" id="exampleNombre" value={this.state.cliente.nombre} 
           onChange={this.changeHandler} placeholder="Delfina Baldaccino" />
        </FormGroup>
        <FormGroup>
          <Label for="examplerazonsocial">Razon social</Label>
          <Input type="text" name="razonsocial" id="exampleRazonsocial" value={this.state.cliente.razonsocial}
          onChange={this.changeHandler} placeholder="GipsyCode" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={this.state.cliente.email}
          onChange={this.changeHandler} placeholder="natimarzec708@gmail.com" />
        </FormGroup>

       {/* necesito hacer un nuevo changehandler para que actualice
        y  tenga una query y 
       pasarle en el this.estado del cliente y luego llamarlo */}

       <FormGroup>
          <Label for="exampleSelect">Asigna un chofer</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandler}>
            select={this.state.value}  options={this.props.listadoChoferesEnViaje}
          </Input>
        </FormGroup>

        <FormText color="muted">AL PRESIONAR EL BOTON SIGUIENTE AGREGAS O ACTUALIZAS</FormText>
       
        <Button type="submit" outline color="success">Agregar/Actualizar</Button>

        
        </Form>
    )
  
    }


}
  export default ClienteForm
