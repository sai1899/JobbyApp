import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="find_home_container">
          <h1 className="find_home_head">Find The Job That Fits Your Life</h1>
          <p className="find_home_para">
            Millions of people are searching for jobs, salary
            information,company reviews.find the job that fits your ability and
            potential
          </p>
          <Link
            to="/jobs"
            style={{color: 'inherit', textDecoration: 'inherit'}}
          >
            <button className="find_jobs_button">Find Jobs</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
