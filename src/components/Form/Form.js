import React from 'react'

const Form = props => {
  console.log('form=', props)
  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="inputValue" value={props.inputValue} onChange={props.handleInputChange} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSearch}>Search by Last Name</button>
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={props.handleFirst}>Search by First Name</button>
    </form>
  )
}

export default Form
