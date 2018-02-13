import React from 'react'
import DisplayInput from './DisplayInput'
import Hover from './Hover'


export default class TodoItem extends React.Component {
	
	constructor(){
		super()
		this.state = {
			clicked: false,
			hover: false
		}
	}
	
	
	
	
	handleClick(){
	
	     var clicked = this.state.clicked
		 this.setState({clicked: !clicked})
	}
	
	
	
	
	onMouseEnter(){
		
		var hover = this.state.hover
		this.setState({hover: true})
	}
	
	onMouseLeave(){
		var hover = this.state.hover
		this.setState({hover: false})
	}
	
	render(){
		return (
			
				
				<div onMouseEnter = {this.onMouseEnter.bind(this)}
					 onMouseLeave = {this.onMouseLeave.bind(this)}
					>
					<h1 className="curs" onClick = {this.handleClick.bind(this)}
					
					>{this.props.todo.todo}</h1>
					
				    
					{this.state.hover == true ? <Hover todo = {this.props.todo} id = {this.props.id} remove = {this.props.remove}/> : null}
					{this.state.clicked == true ?  <DisplayInput update = {this.props.update} todo = {this.props.todo}/> : null }
				</div>
				
				
			
			)
	}
}