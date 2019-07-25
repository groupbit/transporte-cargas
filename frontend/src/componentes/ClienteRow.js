import React from 'react';
import { Button } from 'reactstrap'

class ClienteRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarCliente = this.seleccionarCliente.bind(this)
        this.updateCliente=this.updateCliente.bind(this)
        

    }
    seleccionarCliente() {
        this.props.selector(this.props.cliente);
    }

    updateCliente() {
      this.props.updateLista(this.props.cliente);
    }

    deleteHandler(id) {
       fetch("http://localhost:8889/clientes/" +id, {

          method: 'delete',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
      }).then(this.updateCliente)
    }
    
    render() {

      return (
      <tr key={this.props.cliente._id} >
        <td>{this.props.cliente._id}</td> 
          <td>{this.props.cliente.nombre}</td>
          <td>{this.props.cliente.razonsocial}</td>
          <Button onClick={this.seleccionarCliente}>Seleccionar</Button>
          <Button onClick={this.deleteHandler(this.props.cliente._id)} >Borrar</Button>
      

      </tr>)
  
    }


}
  export default ClienteRow