import React, { Component } from 'react'
import './App.css'
import Employee from './components/Employee'
import Form from './components/Form'
import Jumbotron from './components/Jumbotron'
let employees = [{
  id: 1,
  first_name: 'Barnaby',
  last_name: 'Seabright',
  email: 'bseabright0@cnet.com',
  Job_Title: 'Jedi Master'
}, {
  id: 2,
  first_name: 'Marlene',
  last_name: 'Margrie',
  email: 'mmargrie1@admin.ch',
  Job_Title: 'Jedi Master'
}, {
  id: 3,
  first_name: 'Jeffie',
  last_name: 'Auletta',
  email: 'jauletta2@cloudflare.com',
  Job_Title: 'Padawan'
}, {
  id: 4,
  first_name: 'Jaimie',
  last_name: 'Quilty',
  email: 'jquilty3@rambler.ru',
  Job_Title: 'Jedi Master'
}, {
  id: 5,
  first_name: 'Elysia',
  last_name: 'Denniss',
  email: 'edenniss4@earthlink.net',
  Job_Title: 'Padawan'
}, {
  id: 6,
  first_name: 'Pauletta',
  last_name: 'Grelak',
  email: 'pgrelak5@issuu.com',
  Job_Title: 'Jedi Master'
}, {
  id: 7,
  first_name: 'Irving',
  last_name: 'Node',
  email: 'inode6@techcrunch.com',
  Job_Title: 'Padawan'
}, {
  id: 8,
  first_name: 'Paige',
  last_name: 'Deroche',
  email: 'pderoche7@time.com',
  Job_Title: 'Padawan'
}, {
  id: 9,
  first_name: 'Candis',
  last_name: 'Cadogan',
  email: 'ccadogan8@bbb.org',
  Job_Title: 'Padawan'
}, {
  id: 10,
  first_name: 'Karalee',
  last_name: 'Tregidga',
  email: 'ktregidga9@nifty.com',
  Job_Title: 'Jedi Master'
}]

class App extends Component {

  state = {
    employees: employees,
    inputValue: '',
    category: 'last_name',
    firstName: 'first_name'
  }

  handleJobTitle = () => {
    let employees=this.state.employees
    employees.sort((a, b) => {
      let master = a.Job_Title
      let padawan = b.Job_Title
      if (master < padawan) {
        return -1
      }
      if (master > padawan) {
        return 1
      }
      return 0
    })
    // console.log(employees)
    this.setState({
      employees
    })
  }

  handleSort = () => {
    let employees = this.state.employees
    employees.sort((a, b) => {
      let nameA = a.last_name
      let nameB = b.last_name
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    // console.log(this.state.employees)
    this.setState({
      employees
    })
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearch = event => {
    event.preventDefault()
    console.log(event.target.value) 
    let found = employees.filter((employee) => {
      return employee[this.state.category].toLowerCase() === this.state.inputValue.toLowerCase()
    })
    this.setState({
      employees: found, inputValue: ''
    })
}

  handleFirst = event => {
    event.preventDefault()
    console.log(event.target.value)
    let found = employees.filter((employee) => {
      return employee.first_name.toLowerCase() === this.state.inputValue.toLowerCase()
    })
    this.setState({
      employees: found, inputValue: ''
    })
  }

  render() {
    return (

      <div className='container'>
        <div className= 'row'>
          <Jumbotron />
        </div>
        <div className='row'>
        <div className='col'>
          <p>
            <button onClick={this.handleSort} className="btn btn-primary">Sort by last name</button>
          </p>
          <p>
            <button onClick={this.handleJobTitle} className="btn btn-success">Sort by job title</button>
          </p>
          <Form
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleSearch={this.handleSearch}
            handleFirst={this.handleFirst} />
        </div>
        <div className='col'>
          <Employee employees={this.state.employees} />
        </div>
        </div>
      </div>
    )
  }
}

export default App
