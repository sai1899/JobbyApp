import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class ProfileCard extends Component {
  state = {
    profileApi: 'Loading',
    profileName: '',
    profileAvathar: '',
    profileBio: '',
  }

  componentDidMount() {
    this.getPersonalData()
  }

  getPersonalData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const personalUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const profileUrlFirst = await fetch(personalUrl, options)
    if (profileUrlFirst.ok === true) {
      const fetchedProfile = await profileUrlFirst.json()
      console.log('fetced')
      console.log(fetchedProfile)
      console.log(fetchedProfile.profile_details.profile_image_url)
      this.setState({
        profileAvathar: fetchedProfile.profile_details.profile_image_url,
        profileName: fetchedProfile.profile_details.name,
        profileBio: fetchedProfile.profile_details.short_bio,
        profileApi: 'Success',
      })
    } else {
      this.setState({profileApi: 'Failure'})
    }
  }

  switchProfile = () => {
    const {profileApi} = this.state
    switch (profileApi) {
      case 'Loading':
        return this.getLoadedSpinner()
      case 'Success':
        return this.showProfileData()
      case 'Failure':
        return this.showFailure()
      default:
        return null
    }
  }

  showFailure = () => (
    <div>
      <button onClick={this.getPersonalData}>Retry</button>
    </div>
  )

  getLoadedSpinner = () => {
    console.log('hello')
    return (
      <div className="loader-container" testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    )
  }

  showProfileData = () => {
    const {profileAvathar, profileName, profileBio} = this.state
    return (
      <div>
        <img src={profileAvathar} alt="profile" />
        <h3>{profileName}</h3>
        <p>{profileBio}</p>
      </div>
    )
  }

  render() {
    const {profileAvathar, profileName, profileBio} = this.state
    return <div className="profile_container">{this.switchProfile()}</div>
  }
}

export default ProfileCard
