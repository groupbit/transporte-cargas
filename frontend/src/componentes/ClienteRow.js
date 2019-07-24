import React from 'react';
import { Button } from 'reactstrap'
class ClienteRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarCliente = this.seleccionarCliente.bind(this)
        this.update=this.update.bind(this)
        

    }
    seleccionarCliente() {
        this.props.selector(this.props.cliente);
    }

    update() {
      // this.props.updateLista(this.props.cliente);
    }

    deleteHandler(id) {
       fetch("http://localhost:8889/clientes/" +id, {

          method: 'delete',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
      }).then(this.update)
    }
    
    render() {

      return (
      <tr key={this.props.cliente._id} onClick={this.seleccionarCliente}>
        <td>{this.props.cliente._id}</td> 
          <td>{this.props.cliente.nombre}</td>
          <td>{this.props.cliente.razonsocial}</td>
          <Button type="button" onClick= {this.deleteHandler(this.props.cliente._id)} >Borrar</Button>
      

      </tr>)
  
    }


}
  export default ClienteRow