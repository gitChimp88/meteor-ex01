import React from 'react'
import {Todos} from './api/Todo'
import TodosItems from './TodosItems'
import "../client/main.css"

export default class HelloMeteor extends React.Component {
	
	
	constructor(){
                super()
                this.state = {
					todo: '',
					todos: ''
					
				}
		
	}
	
	addTodos(){
		
		debugger;
		if(this.state.todo){
            //first we check that we have a todo to submit/insert
               Meteor.call('addTodo',this.state.todo,()=>{
               // here we call the method 'addTodo' passing our todo and a callback
                    this.refs.input.value = ""
                    this.setState({todo:''})
              // then inside the callback we clear our input and our state.
               })
            }
		}
	
	
		
		 
		
	
	
	componentWillMount(){
		Tracker.autorun(()=>{
			var todos = Todos.find({}).fetch()
			this.setState({todos})
		})
	
	}
	
	handleRemove(id){
		
		
        Meteor.call('removeTodo',id)
                //call the meteor method 'removeTodo' 
                //passing the id to remove as an argument
	}
	
	
			 getTodos(e){
							this.setState({todo:e.target.value})
					}

	
	
	
       updateTodo(id, todo){
       
                Meteor.call('updateTodo', id, todo, (err,done)=>{
                        console.log(err,done)
                })
        }
	
	render(){
		return (
			<div className="wrapper">
				<input 
					   ref='input' 
					   placeholder="add Todo"
					   onChange = {this.getTodos.bind(this)}
					/>
				<button className="curs" onClick = {this.addTodos.bind(this)}>Add</button>
				<TodosItems
					remove = {this.handleRemove.bind(this)}
					update = {this.updateTodo.bind(this)}
					todos = {this.state.todos}
					/>
			</div>
		)
	}
}