import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from'./components/Todos';
import Header from'./components/layout/Header';
import AddTodo from'./components/AddTodo';
import About from'./components/pages/About';
import uuid from 'uuid';

import './App.css';



class App extends Component {
  state={
    todos:[{
      id:uuid.v4(),
      title:'take out the trash',
      completed:false
    },{
      id:uuid.v4(),
      title:'dinner with wife',
      completed:true
    },
    {
      id:uuid.v4(),
      title:'metting with boss',
      completed:false
    }
    ]}

    // toggle complete
  markComplete=(id)=> {
    this.setState({todos:this.state.todos.map(todo=>{
     if(todo.id===id){
       todo.completed=!todo.completed
     }
     return todo;
    })});
}

  //  delete todo
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id
      !==id
      )]})
  }

  // add todo
  AddTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }
  
  render() {
    return (
      <Router>
      <div className="app">
      <div className="container">
       <Header/>
       <Route exact path="/" render={props=>(
         <React.Fragment>
           <AddTodo AddTodo={this.AddTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
         </React.Fragment>
       )}/>
        <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    )
  }
}




export default App;
