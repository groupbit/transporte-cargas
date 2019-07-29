import React from 'react';
import ClienteRow from './ClienteRow';
import ClienteForm from './ClienteForm';
import { Table } from 'reactstrap';
class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { clientes: [], seleccionado: {}}
    this.selectCliente = this.selectCliente.bind(this);
    this.clienteChangeHandler = this.clienteChangeHandler.bind(this);
    this.createCliente=this.createCliente.bind(this);
    this.updateLista=this.updateLista.bind(this);
    
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
          
          <Table className="table">
          <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Razon social</th>
          </tr>
        </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
          <ClienteForm cliente={this.state.seleccionado} clienteChangeHandler={this.clienteChangeHandler}
                       createCliente={this.createCliente} updateLista={this.updateLista}
          />
          
         
        </div>)
      }
      else {
        return(
          <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDO
          </div>);  
      }
    }

    selectCliente(unCliente) {
      this.setState({seleccionado: unCliente})
    }
    
    clienteChangeHandler(unCliente) {
      var nuevaLista = this.state.clientes.map((item) =>  (item._id !== unCliente._id) ?  item : unCliente )
      this.setState({clientes: nuevaLista, seleccionado: unCliente });
  
    }

    updateLista(unCliente) {
      var updateCliente = this.state.clientes.filter(
      item => unCliente._id !== item._id
      );
      this.setState({ clientes: updateCliente });
    }

    renderRows() {
      return this.state.clientes.map((unCliente, index) => {
        return (
          <ClienteRow 
          cliente={unCliente}  selector={this.selectCliente}
           updateLista={this.updateLista} 
           createCliente={this.createCliente} 
           clienteChangeHandler={this.clienteChangeHandler}
          />
        );
      })
    }
    createCliente(){
      this.componentWillMount()
    }
  }



  export default Clientes


 