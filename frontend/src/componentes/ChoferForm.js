import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ChoferForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={chofer: props.chofer}
      this.changeHandler = this.changeHandler.bind(this)
      this.sendHandler = this.sendHandler.bind(this)
    }

    componentWillReceiveProps(props) {
      this.setState({chofer: props.chofer})
    }

    changeHandler(event) {
        var nuevoChofer = Object.assign({}, this.state.chofer)
        nuevoChofer[event.target.name] = event.target.value
        this.setState({chofer: nuevoChofer})
    }

    sendHandler(event) {
        fetch('http://localhost:8889/choferes', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.chofer)
        }).then(res => this.props.choferChanged(this.state.chofer) )
          .catch(res => console.log("ERRORRRRRRRRRRR") );

        event.preventDefault();
    }


render() {

  return (
    <Form onSubmit={this.sendHandler}>  
      <FormGroup>
      <Label for="exampleName">Nombre</Label>
      <Input type="text" name="nombre" id="exampleNombre" value={this.state.chofer.nombre} 
       onChange={this.changeHandler} placeholder="ej.Diego Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="exampledni">DNI</Label>
      <Input type="text" name="dni" id="exampleDni" value={this.state.chofer.dni}
      onChange={this.changeHandler} placeholder="30222888" />
    </FormGroup>
    <Button>
          <input type="submit" value="Actualizar"/>
    </Button>
    <Button>
          <input type="submit" value="Agregar"/>
    </Button>
    </Form>
)

}


}
export default ChoferForm