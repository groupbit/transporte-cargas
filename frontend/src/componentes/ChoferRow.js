import React from 'react';

class ChoferRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarChofer = this.seleccionarChofer.bind(this)
    }

    seleccionarChofer() {
        this.props.selector(this.props.chofer);
    }

    render() {

      return (
      <tr key={this.props.chofer._id} onClick={this.seleccionarChofer}>
        <td>{this.props.chofer._id}</td> 
          <td>{this.props.chofer.nombre}</td>
          <td>{this.props.chofer.dni}</td>
      </tr>)
  
    }


}
  export default ChoferRow