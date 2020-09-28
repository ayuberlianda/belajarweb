import React, {Component} from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state = {
			valueInput:'',
			valueInput2:'',
			valueInput3:'',
			valueInput4:''
		}
		this.ubahState = this.ubahState.bind(this)
	}

	ubahState(namaValue, e){
		e.preventDefault()

		//perubahan state secara regular
		// this.setState({[namaValue]:e.target.value})
		
		//perubahan state secara Asynchronous
		var tampungData = e.target.value
		this.setState(function(state, props){
			return {
				[namaValue] :tampungData
			}
		});
	}
	


	render(){
		return(
		<div>
		<center>
		<h5>Contoh 1</h5>
		<p>{this.state.valueInput}</p>
		<input value={this.state.valueInput} onChange={(e)=>this.ubahState("valueInput",e)}/>
		<h5>=====================</h5>

		<h5>Contoh 2</h5>
		<p>{this.state.valueInput2}</p>
		<input value={this.state.valueInput2} onChange={(e)=>this.ubahState("valueInput2",e)}/>
		<h5>=====================</h5>

		<h5>Contoh 3</h5>
		<p>{this.state.valueInput3}</p>
		<input value={this.state.valueInput3} onChange={(e)=>this.ubahState("valueInput3",e)}/>
		<h5>=====================</h5>

		<h5>Contoh 4</h5>
		<p>{this.state.valueInput4}</p>
		<input value={this.state.valueInput4} onChange={(e)=>this.ubahState("valueInput4",e)}/>
		<h5>=====================</h5>
		</center>
		</div>
			)
	}
}

export default Registrasi;