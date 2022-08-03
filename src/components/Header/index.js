import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {HiOutlineLogout} from 'react-icons/hi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const userLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  console.log('in header')
  return (
    <div className="home_container">
      <div className="small_container">
        <div>
          <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="home_logo"
              alt="website logo"
            />
          </Link>
        </div>
        <div className="icons-small-container">
          <ul className="home_icons">
            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
              <li>
                <AiFillHome className="home_icon1" />
              </li>
            </Link>
            <Link
              to="/jobs"
              style={{color: 'inherit', textDecoration: 'inherit'}}
            >
              <li>
                <BsFillBriefcaseFill className="home_icon1" />
              </li>
            </Link>
            <li onClick={userLogout}>
              <HiOutlineLogout className="home_icon1" />
            </li>
          </ul>
        </div>
      </div>
      <div className="large_container">
        <div>
          <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="home_logo"
              alt="website logo"
            />
          </Link>
        </div>
        <ul className="large_home_text">
          <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <p className="home_text">Home</p>
          </Link>
          <Link
            to="/jobs"
            style={{color: 'inherit', textDecoration: 'inherit'}}
          >
            <p className="home_text">Jobs</p>
          </Link>
        </ul>
        <button className="logout_button" onClick={userLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
