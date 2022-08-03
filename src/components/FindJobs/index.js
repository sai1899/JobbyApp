import {AiOutlineSearch} from 'react-icons/ai'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import OptionsList from '../OptionsList'
import ProfileCard from '../ProfileCard'
import Header from '../Header'
import JobLIstCardsView from '../JobLIstCardsView'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class FindJobs extends Component {
  state = {
    apiStatusJob: 'Loading',
    jobListFilter: [],
    searchOption: '',
    salaryParam: 0,
    empType: [],
  }

  componentDidMount() {
    this.getFindJobsApiData()
  }

  salaryRangeGotFunction = getData => {
    this.setState({salaryParam: getData}, this.getFindJobsApiData)
    console.log('in getdata')
    console.log(getData)
  }

  empTypeGotFunction = getEmp => {
    const {empType} = this.state
    console.log('empTypeGotFunction')
    console.log(empType)
    for (let i = 0; i < empType.length; i = i + 1) {
      if (getEmp === empType[i]) {
        console.log('matched')
        console.log(getEmp)
      }
    }
    this.setState(
      prev => ({empType: [...prev.empType, getEmp]}),
      this.getFindJobsApiData,
    )
    console.log('in getdata')
    console.log(getEmp)
  }

  getFindJobsApiData = async () => {
    console.log('wpw')
    const {searchOption, salaryParam, empType} = this.state
    const findJobsCookie = Cookies.get('jwt_token')
    console.log('in salary param')
    const parmJoin = empType.join()
    const findJobsUrl = `https://apis.ccbp.in/jobs?employment_type=${parmJoin}&minimum_package=${salaryParam}&search=${searchOption}`
    const options = {
      headers: {
        Authorization: `Bearer ${findJobsCookie}`,
      },
      method: 'GET',
    }
    const findJobsResponse = await fetch(findJobsUrl, options)
    if (findJobsResponse.ok === true) {
      const findJobsJson = await findJobsResponse.json()
      console.log(findJobsJson)
      const changeJobsData = findJobsJson.jobs.map(eachItem => ({
        companyLogoUrl: eachItem.company_logo_url,
        employmentType: eachItem.employment_type,
        id: eachItem.id,
        jobDescription: eachItem.job_description,
        location: eachItem.location,
        packagePerAnnum: eachItem.package_per_annum,
        rating: eachItem.rating,
        title: eachItem.title,
      }))
      console.log('in changeJobs')
      console.log(changeJobsData)
      this.setState({jobListFilter: changeJobsData, apiStatusJob: 'Success'})
    } else {
      this.setState({apiStatusJob: 'Failure'})
    }
  }

  jobFilterCheckStaus = () => {
    const {apiStatusJob} = this.state
    switch (apiStatusJob) {
      case 'Loading':
        return this.jobsLoadingView()
      case 'Success':
        return this.jobsListSuccess()
      case 'Failure':
        return this.jobsListFailure()
      default:
        return null
    }
  }

  jobsListFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h2>Oops! Something Went Wrong</h2>
      <p>We cannot seem to find the page you are looking for</p>
      <button testid="button" onClick={this.getFindJobsApiData}>
        Retry
      </button>
    </div>
  )

  jobsLoadingView = () => {
    console.log('in loading view')
    return (
      <div>
        <div className="loader-container" testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
        </div>
      </div>
    )
  }

  onSerachChanged = event => {
    this.setState({searchOption: event.target.value}, this.getFindJobsApiData)
  }

  jobsListSuccess = () => {
    const {jobListFilter} = this.state
    const countList = jobListFilter.length > 0

    return countList ? (
      <div className="all_job_cards_view">
        {jobListFilter.map(eachItem => (
          <JobLIstCardsView eachJobView={eachItem} key={eachItem.id} />
        ))}
      </div>
    ) : (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
        />
        <h1>No Jobs Found</h1>
        <p>We could not find any jobs. Try other filters</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="find_jobs_container">
          <div className="find_jobs_left_container">
            <div className="find_jobs_search_container">
              <input
                type="search"
                className="seach_input_box"
                onChange={this.onSerachChanged}
              />
              <button className="search_button" testid="searchButton">
                <AiOutlineSearch />
              </button>
            </div>
            <ProfileCard />
            <OptionsList
              firstEachList={employmentTypesList}
              secondEachList={salaryRangesList}
              salaryRangeGotFunction={this.salaryRangeGotFunction}
              empTypeGotFunction={this.empTypeGotFunction}
            />
          </div>
          <div className="jobs_right_container">
            {this.jobFilterCheckStaus()}
          </div>
        </div>
      </div>
    )
  }
}

export default FindJobs
