import React,{Component} from 'react';
import './App.css';

// import Courses from './Component/Courses/Courses';
import RightCourses from './Component/Courses/RightCourses';
import Input from './Component/input/input';


class App extends Component {

  state={
    Courses:[],
  }

handleChange=(e)=>{

    const arr = this.state.Courses
    arr.push(e)
    this.setState({
      Courses:arr
    })

}

remove=(e)=>{
    const TheArr = this.state.Courses
    const FilterdArr = TheArr.filter((ele)=>{
      return ele !== e
    })

    this.setState({
      Courses:FilterdArr
    })

}

update=(index,value)=>{

const Thearray = this.state.Courses

Thearray[index] = value

this.setState({
Courses : Thearray
})

}



render(){

  const Data = this.state.Courses
  const Alldata = Data.map((el,index)=>{
    return(

          <RightCourses name={el} index={index} remove={this.remove} key={index} update={this.update}/>

    )
  })



return ( 
      <div className='crud'>
          <div className = "App" >

            <h2> Crud Application Using Only React </h2>

                <Input handleChange={this.handleChange}  />

                {/* <Courses catch={this.state.Courses} remove={this.remove} /> */}

                <ul> { Alldata.length !== 0 ? (Alldata):(<h3>"There Is No Courses To Show Try To Add One"</h3>) } </ul> 
          </div>
      </div>
      )
  }

}


export default App;