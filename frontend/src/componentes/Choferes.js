import React from 'react';
import ChoferRow from './ChoferRow'
import ChoferForm from './ChoferForm'
import {Table} from 'reactstrap';

class Choferes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { choferes: [], seleccionado:{}}
    this.selectChofer = this.selectChofer.bind(this)
    this.choferChangeHandler = this.choferChangeHandler.bind(this)
    this.listadoChoferes=this.listadoChoferes.bind(this)
    this.updateLista=this.updateLista.bind(this)
  }


  componentWillMount() {
    fetch(`http://localhost:8889/choferes`)
      .then( res => res.json())
      .then( clts => this.setState({choferes: clts}));
  }



    render() {

      
      if( this.state.choferes.length > 0 ) {
        return(

          <div className="container">
          <ChoferForm chofer={this.state.seleccionado}
           choferChanged={this.choferChangeHandler}
           listadoChoferes={this.listadoChoferes}
           updateLista={this.updateLista}
          />
         
          <div className="choferesCSS">
              <h2>{this.props.titulo}</h2>
          
          <Table className="table">
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>dni</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
     
          </div>
        </div>)
      }

      else {
        return(
          <div className="choferesCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDO
          </div>);  
      }

    }
    listadoChoferes(){
      this.componentWillMount()
    }
  
    updateLista(unChofer) {
    //  var updateChofer= this.state.choferes.filter(
    // item => unChofer._id !== item._id
    //  );
    //  this.setState({ choferes: updateChofer });
   this.componentWillMount()
  }

  selectChofer(unChofer) {
    this.setState({seleccionado: unChofer})
  }

  choferChangeHandler(unChofer) {
    var nuevaLista = this.state.choferes.map( (item) =>  (item._id !== unChofer._id) ?  item : unChofer   )
    this.setState({choferes: nuevaLista, seleccionado: unChofer})
  }

    renderRows() {
      return this.state.choferes.map((unChofer, index) => {
        return (
          <ChoferRow chofer={unChofer}
            selector={this.selectChofer}
            updateLista={this.updateLista} 
            choferChangedHandler={this.choferChangeHandler}

          />
        );
      })
    }
  
  }



  export default Choferes