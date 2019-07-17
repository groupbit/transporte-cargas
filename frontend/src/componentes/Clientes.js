import React from 'react';
import ClienteRow from './ClienteRow'
import ClienteForm from './ClienteForm'
import { Table,Button } from 'reactstrap';
class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { clientes: [], seleccionado: {}}
    this.selectCliente = this.selectCliente.bind(this)
    this.clienteChangeHandler = this.clienteChangeHandler.bind(this)
    this.addHandler = this.addHandler.bind(this)
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

  
  addHandler(event) {
    fetch('http://localhost:8889/clientes', {
        method: 'post',
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
          <ClienteForm cliente={this.state.seleccionado} clienteChanged={this.clienteChangeHandler}/>
          <Button><input onSubmit={this.addHandler} type="submit" value="Agregar"/></Button>
         
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


 