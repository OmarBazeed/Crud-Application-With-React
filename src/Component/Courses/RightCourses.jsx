import React,{Component} from "react";
import'./courses.css'


class RightCourses extends Component{

state={
    isEdited:false,
    text:this.props.name,
}


handleClick=()=>{
    this.setState({
        isEdited:true
    })
}

add=()=>{
    return(
    <li>
    <span>{this.props.name}</span> 
    <button onClick={this.handleClick}> Edit Course</button>
    <button onClick={()=> this.props.remove(this.props.name)}> Delete Course</button>
    </li>
    )
}

changeIt=(e)=>{
    this.setState({
        text:e.target.value
    })
}


update=()=>{

    this.setState({
        isEdited:false,
    })

    this.props.update(this.props.index,this.state.text);
}

handleForm=()=>{
    return(
        <li className="small-li">
        <input defaultValue={this.props.name} onChange={this.changeIt}/> 
        <button onClick={this.update}> Update Course</button>
        </li>
    )
}



render()
    {
    return this.state.isEdited === false ? (this.add()) : (this.handleForm())
    }
}

export default RightCourses;