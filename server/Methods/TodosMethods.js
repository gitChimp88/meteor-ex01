
import { Todos}   from '../../imports/api/Todo'
import { Meteor }  from 'meteor/meteor';

Meteor.methods({
        addTodo:function(todo){
                console.log("addTodo meteor method called from the server", todo)
                Todos.insert({todo},(err,done)=>{
                        console.log(err + " id = " + done)
                })
        },
        removeTodo:function(todo){
                console.log("remove Todo meteor method called from the server todo id = ", todo)
                Todos.remove({_id:todo})
        },
	
	
		updateTodo:function(id,todo){
			  console.log("update Todo meteor method the id is = ", id," and the todo is = ", todo)
			  Todos.update({_id:id},{ $set:{ todo:todo }
			  })
		}
})