import React from 'react';

class ClienteRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarCliente = this.seleccionarCliente.bind(this)
    }

    seleccionarCliente() {
        this.props.selector(this.props.cliente);
    }

    render() {

      return (
      <tr key={this.props.cliente._id} onClick={this.seleccionarCliente}>
        <td>{this.props.cliente._id}</td> 
          <td>{this.props.cliente.nombre}</td>
          <td>{this.props.cliente.razonsocial}</td>
      </tr>)
  
    }


}
  export default ClienteRow