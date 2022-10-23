import React,{Component} from "react";


class Courses extends Component{

state={
    editaed:false,
}


handleEdit= (e)=>{
const text = e.target.getAttribute("value");

    this.setState({
        editaed:true
    })

    this.handleForm(text)

}

handleForm=(e)=>{
    
        const {remove} = this.props
        const data = this.props.catch

        const Alldata = data.map((el)=>{
        return e.target.getAttribute("value") === el ? (

        <div key={Math.floor(Math.random()*1000)}>
                <input type="text" defaultValue={el}/>
                <span> Update Course</span>
        </div>

    ):(
        <div key={Math.floor(Math.random()*1000)}>
        <input type="text" defaultValue={el} />
        <span onClick={this.handleEdit}> Edit Course</span>
        <span onClick={()=>remove(el)} id="myDeleteSpan"> Delete Course</span>
        </div>   
    )
        })

        return(
            <>
                {Alldata}
            </>
        )

}




render(){

            const {remove}=this.props

            const Date = this.props.catch
            const AllDate = Date.map((el)=>{
                    return (
                        <div key={Math.floor(Math.random()*1000)}>
                                    <input type="text" defaultValue={el} />
                                    <span onClick={this.handleEdit} value={el}> Edit Course</span>
                                    <span onClick={()=>remove(el)} id="myDeleteSpan"> Delete Course</span>
                        </div>
                    )
                })

        return(

            <div className="course-div">
                {  this.state.editaed === false ? AllDate : this.handleForm()}
                {/* {AllDate} */}
            </div>

        )
    }
}

export default Courses;