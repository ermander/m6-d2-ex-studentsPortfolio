import React from 'react';
import './App.css';
import Navbar from "./components/NavBar"
import MainJumbotron from "./components/MainJumbotron"
import Students from "./components/Students"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      isLoading: true,
      errMess: undefined
    }
  }  

  getStudent = async () => {
    try {
    const response = await fetch("http://localhost:3002/students")
    const studentsJson = await response.json()
    this.setState({
        students: studentsJson,
        isLoading: false
      })
    }catch(err){
      this.setState({
        isLoading: false,
        errMess: err.message
      })
    }
  }

  componentDidMount(){
    this.getStudent()
  }

  render(){
    return (
      <>
        <Navbar />
        <MainJumbotron />
        <Students 
            students={this.state.students}
            isLoading={this.state.isLoading}
            errMess={this.state.errMess}
            />
      </>
    )
  }
}  

export default App;
