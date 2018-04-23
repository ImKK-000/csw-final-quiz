import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCounties,
  createCountry,
  deleteCountry,
} from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.props.fetchCounties()
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.createCountry(this.state);
  }

  handleDelete = (e) => {
    const { id } = e.target;
    console.log(id)
    this.props.deleteCountry(id);
  }

  render() {
    const { countryList } = this.props.countries;
    const {
      handleSubmit,
      handleChange,
      handleDelete,
    } = this;

    return (
      <div>
        <h1>Country</h1>
        <ul>
          {
            countryList.map((data, index) => {
              if (data) {
                const { id, name } = data
                return <li
                  key={id}>{`${id}. ${name} `}
                  <button id={id} onClick={handleDelete}>delete</button>
                </li>
              }
            })
          }
        </ul>
        <h1>Add country</h1>
        <input type="text" name="name" onChange={this.handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = ({ countries }) => {
  return {
    countries,
  }
}

export default connect(mapStateToProps, { fetchCounties, createCountry, deleteCountry })(App);

