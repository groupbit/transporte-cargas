import React from 'react';
import { Button } from 'reactstrap';
class ChoferRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarChofer = this.seleccionarChofer.bind(this)
        this.deleteHandler=this.deleteHandler.bind(this)
        this.update=this.update.bind(this)
    }

    seleccionarChofer() {
        this.props.selector(this.props.chofer);
    }
    update(){
      // this.props.updateLista(this.props.chofer);
    }


    deleteHandler(id) {
      fetch("http://localhost:8889/clientes/" +id, {
          method: 'delete',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
      }).then(res => this.update)
        
    }
    

    render() {

      return (
      <tr key={this.props.chofer._id} onSubmit={this.seleccionarChofer} onClick={this.deleteHandler}>
        <td>{this.props.chofer._id}</td> 
          <td>{this.props.chofer.nombre}</td>
          <td>{this.props.chofer.dni}</td>
      <Button onClick= {this.deleteHandler(this.props.chofer._id)} >Borrar</Button>

      </tr>)
  
    }


}
  export default ChoferRow