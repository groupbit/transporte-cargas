import React from 'react';
import ClienteRow from './ClienteRow'
import ClienteForm from './ClienteForm'

class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { clientes: [], seleccionado: {}}
    this.selectCliente = this.selectCliente.bind(this)
    this.clienteChangeHandler = this.clienteChangeHandler.bind(this)
  }

  selectCliente(unCliente) {

    this.setState({seleccionado: unCliente})
  }

  clienteChangeHandler(unCliente) {
    var nuevaLista = this.state.clientes.map( (item) =>  (item._id !== unCliente._id) ?  item : unCliente   )
    this.setState({clientes: nuevaLista, seleccionado: unCliente})
  }

  componentWillMount() {
    fetch(`http://localhost:8889/clientes`)
      .then( res => res.json())
      .then( clts => this.setState({clientes: clts}));
  }

    render() {

      
      if( this.state.clientes.length > 0 ) {
        return(
          <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
          
          <table className="table">
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>razonsocial</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          <ClienteForm cliente={this.state.seleccionado} clienteChanged={this.clienteChangeHandler}/>
        </div>)
      }

      else {
        return(
          <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDOOOOOOOOOOOOOOOOOOOOO
          </div>);  
      }

    }

    renderRows() {
      return this.state.clientes.map((unCliente, index) => {
        return (
          <ClienteRow cliente={unCliente} selector={this.selectCliente}/>
        );
      })
    }
  
  }



  export default Clientes