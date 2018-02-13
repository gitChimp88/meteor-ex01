import React from 'react'
import TodoItem from './TodoItem'

export default class TodosItems extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.todos.map((ele, i)=>{
					return <TodoItem 
							   remove = {this.props.remove}
							   update = {this.props.update}
							   key={i} 
							   id = {ele._id}
							   todo = {ele}/>
				})}
			</div>
		)
	}
}