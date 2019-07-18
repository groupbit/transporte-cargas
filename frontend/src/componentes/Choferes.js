import React from 'react';
import ChoferRow from './ChoferRow'
import ChoferForm from './ChoferForm'
import {Table} from 'reactstrap';

class Choferes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { choferes: [], seleccionado: {}}
    this.selectChofer = this.selectChofer.bind(this)
    this.choferChangeHandler = this.choferChangeHandler.bind(this)
  }

  selectChofer(unChofer) {

    this.setState({seleccionado: unChofer})
  }

  choferChangeHandler(unChofer) {
    var nuevaLista = this.state.choferes.map( (item) =>  (item._id !== unChofer._id) ?  item : unChofer   )
    this.setState({choferes: nuevaLista, seleccionado: unChofer})
  }

  componentWillMount() {
    fetch(`http://localhost:8889/choferes`)
      .then( res => res.json())
      .then( clts => this.setState({choferes: clts}));
  }

    render() {

      
      if( this.state.choferes.length > 0 ) {
        return(
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
          <ChoferForm chofer={this.state.seleccionado} choferChanged={this.choferChangeHandler}/>
        </div>)
      }

      else {
        return(
          <div className="choferesCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDOOOOOOOOOOOOOOOOOOOOO
          </div>);  
      }

    }

    renderRows() {
      return this.state.choferes.map((unChofer, index) => {
        return (
          <ChoferRow chofer={unChofer} selector={this.selectChofer}/>
        );
      })
    }
  
  }



  export default Choferes