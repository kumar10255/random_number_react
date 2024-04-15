import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onShowLastName = () => {
    const newNumber = Math.ceil(Math.random() *100)
    this.setState({number : newNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Numbers</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="show-hide-container">
            <div className="name-container">
              <button
                type="button"
                className="show-hide-button"
                onClick={this.onShowLastName}
              >
                Generate
              </button>
              <p className="guessvalue">{number}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
