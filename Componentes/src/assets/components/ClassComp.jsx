import { Component } from "react";

export default class MiComponente extends Component {
    constructor(props){
        super(props)
        this.state ={
            saludo: "state component Ivn"
        }
    }


    render(){
        return(
            <div 
            onClick={()=>this.setState({saludo: 'Hola react'})}
            >Este es un componente basado en clase, {this.state.saludo}</div>
        )
    }
}