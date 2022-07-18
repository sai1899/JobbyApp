import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userText: '', passwordText: '', errorText: ''}

  setUsername = () => {
    const {userText} = this.state
    return (
      <div className="userbox">
        <label htmlFor="username" className="form_label_head">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="form_label_input"
          onChange={this.changeUser}
          value={userText}
        />
      </div>
    )
  }

  changeUser = event => {
    this.setState({userText: event.target.value})
  }

  setPassword = () => {
    const {passwordText} = this.state
    return (
      <div className="userbox">
        <label htmlFor="password" className="form_label_head">
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          className="form_label_input"
          onChange={this.changePassword}
          value={passwordText}
        />
      </div>
    )
  }

  changePassword = event => {
    this.setState({passwordText: event.target.value})
  }

  formClicked = async event => {
    event.preventDefault()
    const {userText, passwordText} = this.state
    const userDetails = {userText, passwordText}
    const url = 'https://apis.ccbp.in/login'
    console.log(userDetails)
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {errorText} = this.state

    return (
      <div className="background_container">
        <form className="form_box" onSubmit={this.formClicked}>
          <div className="img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="jobby_logo"
            />
          </div>

          {this.setUsername()}
          {this.setPassword()}
          <button className="login_button">Login</button>
          <p>{errorText}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
