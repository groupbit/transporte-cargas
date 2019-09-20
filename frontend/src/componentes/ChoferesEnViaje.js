import React from 'react';
import ClienteRow from './ClienteRow'
import ClienteForm from './ClienteForm'



class ChoferesEnViaje extends React.Component {

    constructor(props){
        super(props);
        this.state= {choferasignado:this.props.chofer.enviaje, choferesViajando:[]};
        this.listadoChoferesEnViaje=this.listadoChoferesEnViaje.bind(this)
        this.selectChofer = this.selectChofer.bind(this)
    }

    componentWillMount(){
    fetch(`http://localhost:8889/choferes/enviaje`)
        .then( res => res.json())
        .then( chfsviaje => this.setState({choferesViajando: chfsviaje}));
    }
    
      renderRowsChoferAsignado(){
        return this.state.choferes.map((unChofer, index) => {
          return (
            <ClienteRow choferasignado={unChofer.enviaje}
             listadoChoferesEnViaje={this.listadoChoferesEnViaje}
  
            />
          );
        })
      }
    
      listadoChoferesEnViaje(){
          this.componentWillMount()
      }

}


export default ChoferesEnViaje