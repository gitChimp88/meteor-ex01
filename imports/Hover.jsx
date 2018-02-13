
import React from 'react'


export default class Hover extends React.Component {
	
	
     removeItem(id){
		this.props.remove(id)
	}
	
	
	render(){
		return <div>
			       <button className="red" onClick = {this.removeItem.bind(this, this.props.id)}>delete</button>
		       </div>
	}
}