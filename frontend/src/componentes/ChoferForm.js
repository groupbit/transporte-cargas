import React from 'react';

class ChoferForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={chofer: props.chofer}
      this.changeHandler = this.changeHandler.bind(this)
      this.sendHandler = this.sendHandler.bind(this)
    }

    componentWillReceiveProps(props) {
      this.setState({chofer: props.chofer})
    }

    changeHandler(event) {
        var nuevoChofer = Object.assign({}, this.state.chofer)
        nuevoChofer[event.target.name] = event.target.value
        this.setState({chofer: nuevoChofer})
    }

    sendHandler(event) {
        fetch('http://localhost:8889/choferes', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.chofer)
        }).then(res => this.props.choferChanged(this.state.chofer) )
          .catch(res => console.log("ERRORRRRRRRRRRR") );

        event.preventDefault();
    }



    render() {

      return (
        <form onSubmit={this.sendHandler}>
          <label>Nombre</label> 
          <input type="text" name='nombre' value={this.state.chofer.nombre} onChange={this.changeHandler} /><br />
          <label>Dnil</label> 
          <input type="text" name='dni' value={this.state.chofer.dni} onChange={this.changeHandler}/><br />
          <br />
          <input type="submit" value="Enviar"/> 
        </form>
    )
  
    }


}
  export default ChoferForm