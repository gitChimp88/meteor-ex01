
import React from 'react'


export default class DisplayInput extends React.Component {
	
	
	
	
	
	handleUpdate(){
		var text = this.refs.input.value.trim()
		
		this.props.update(this.props.todo._id, text)
		this.refs.input.value = ""
	}
	
	
	render(){
		return <div>
			
			<input ref = "input"/>
			    <button className="blue" onClick = {this.handleUpdate.bind(this)}>update</button>

	          </div>
	}
}