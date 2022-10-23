import React,{Component} from "react";
import'./input.css';

class Input extends Component{

    state={
        text:""
    }

editState=(e)=>{
        this.setState({
            text:e.target.value
        })
}

click=()=>{
if(this.state.text !== ""){

    this.props.handleChange(this.state.text);
    this.setState({
    text:""
    })

}else{
    window.alert("Enter A Value To The Input !")
}
}


render(){


        return(

            <div className="input-info">

            <input type="text" placeholder="Enter Course Name" onChange={this.editState} value={this.state.text}/>
            <button value="Add Course" onClick={this.click}> Add Course</button>

            </div>

        )

    }
}

export default Input;