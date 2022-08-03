import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import EachJobItemPage from '../EachJobItemPage'

class SelectJob extends Component {
  state = {
    eachJobDetailValues: {},
    similarJobDetailsView: [],
    eachJobApiDetails: 'Loading',
  }

  componentDidMount() {
    this.getEachJobNew()
  }

  getEachJobNew = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const findJobsCookieDetails = Cookies.get('jwt_token')
    const findJobsUrlDetails = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${findJobsCookieDetails}`,
      },
      method: 'GET',
    }
    const findJobsResponseDetails = await fetch(findJobsUrlDetails, options)
    if (findJobsResponseDetails.ok === true) {
      const findJobsJsonDetails = await findJobsResponseDetails.json()
      const changeJobsDataDetails = findJobsJsonDetails.job_details
      console.log(changeJobsDataDetails)
      const JobDeatilsOne = {
        companyLogoUrl: changeJobsDataDetails.company_logo_url,
        companyWebsiteUrl: changeJobsDataDetails.company_website_url,
        employmentType: changeJobsDataDetails.employment_type,
        id: changeJobsDataDetails.id,
        jobDescription: changeJobsDataDetails.job_descriptions,
        lifeAtCompany: {
          description: changeJobsDataDetails.life_at_company.description,
          imageUrl: changeJobsDataDetails.life_at_company.image_url,
        },
        location: changeJobsDataDetails.location,
        packagePerAnnum: changeJobsDataDetails.package_per_annum,
        rating: changeJobsDataDetails.rating,
        skills: changeJobsDataDetails.skills.map(eachItem1 => ({
          name: eachItem1.name,
          imageUrl: eachItem1.image_url,
        })),
        title: changeJobsDataDetails.title,
      }
      const similarJobsList = findJobsJsonDetails.similar_jobs.map(
        eachItem2 => ({
          companyLogoUrl: eachItem2.company_logo_url,
          employmentType: eachItem2.employment_type,
          id: eachItem2.id,
          jobDescription: eachItem2.job_description,
          location: eachItem2.location,
          rating: eachItem2.rating,
          title: eachItem2.title,
        }),
      )

      this.setState({
        eachJobDetailValues: JobDeatilsOne,
        similarJobDetailsView: similarJobsList,
        eachJobApiDetails: 'Success',
      })
    }
  }

  jobFilterCheckStausOne = () => {
    const {eachJobApiDetails} = this.state
    switch (eachJobApiDetails) {
      case 'Loading':
        return this.jobsLoadingView()
      case 'Success':
        return this.jobsListSuccess()
      default:
        return null
    }
  }

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

  jobsListSuccess = () => {
    const {eachJobDetailValues, similarJobDetailsView} = this.state
    return (
      <div>
        <EachJobItemPage
          eachJobFirst={eachJobDetailValues}
          eachJobSecond={similarJobDetailsView}
        />
      </div>
    )
  }

  render() {
    return <div>{this.jobFilterCheckStausOne()}</div>
  }
}

export default SelectJob
