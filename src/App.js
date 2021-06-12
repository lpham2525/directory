import React, { Component } from 'react'
import './App.css'
import Employee from './components/Employee'
import Form from './components/Form'
import Jumbotron from './components/Jumbotron'

let employees = [{
  id: 1,
  first_name: 'Luke',
  last_name: 'Skywalker',
  email: 'luke.skywalker@tatooine.com',
  Job_Title: 'Padawan',
  home_world: 'Tatooine'
}, {
  id: 2,
  first_name: 'Leia',
  last_name: 'Organa',
  email: 'leia.organa@alderaan.com',
  Job_Title: 'Padawan',
  home_world: 'Alderaan'
}, {
  id: 3,
  first_name: 'Mace',
  last_name: 'Windu',
  email: 'mace.windu@haruunkal.com',
  Job_Title: 'Jedi Master',
  home_world: 'Haruun Kal'
}, {
  id: 4,
  first_name: 'Baby',
  last_name: 'Yoda',
  email: 'emailwhatis@grandmaster.com',
  Job_Title: 'Jedi Master',
  home_world: 'unknown'
}, {
  id: 5,
  first_name: 'Ben',
  last_name: 'Kenobi',
  email: 'obiwan.kenobi@stewjon.com',
  Job_Title: 'Jedi Master',
  home_world: 'Stewjon'
}, {
  id: 6,
  first_name: 'Qui-Gon',
  last_name: 'Jinn',
  email: 'quigon.jinn@coruscant.com',
  Job_Title: 'Jedi Master',
  home_world: 'Coruscant'
}, {
  id: 7,
  first_name: 'Rey',
  last_name: 'Skywalker',
  email: 'rey.skywalker@jakku.com',
  Job_Title: 'Padawan',
  home_world: 'Jakku'
}, {
  id: 8,
  first_name: 'Ben',
  last_name: 'Solo',
  email: 'ben.solo@chandrila.com',
  Job_Title: 'Padawan',
  home_world: 'Chandrila'
}, {
  id: 9,
  first_name: 'Anakin',
  last_name: 'Skywalker',
  email: 'anakin.skywalker@podracer.com',
  Job_Title: 'Padawan',
  home_world: 'Dagobah'
}, {
  id: 10,
  first_name: 'Ezra',
  last_name: 'Bridger',
  email: 'ezra.bridger@lothal.com',
  Job_Title: 'Padawan',
  home_world: "Lothal"
}]

class App extends Component {

  state = {
    employees: employees,
    inputValue: '',
    category: 'last_name',
    firstName: 'first_name'
  }

  handleSortByRank = () => {
    let employees = this.state.employees
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
    this.setState({
      employees
    })
  }

  handleSortFName = () => {
    let employees = this.state.employees
    employees.sort((a, b) => {
      let nameA = a.first_name
      let nameB = b.first_name
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    this.setState({
      employees
    })
  }

  handleSortLName = () => {
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

  handleReset = () => {
    let reset = window.location.reload() 
      this.setState({
      employees: reset, inputValue: ''
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Jumbotron />
        </div>
        <div className='row'>
          <div className='col'>
            <Form
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleSearch={this.handleSearch}
              handleFirst={this.handleFirst} />
              <p>
            <button onClick={this.handleSortFName} className="btn btn-primary">Sort by first name</button>

            <button onClick={this.handleSortLName} className="btn btn-success">Sort by last name</button>

            <button onClick={this.handleSortByRank} className="btn btn-secondary">Sort by rank</button>

            <button onClick={this.handleReset} className="btn btn-danger">Reset list</button>
            </p>
            <Employee employees={this.state.employees} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
