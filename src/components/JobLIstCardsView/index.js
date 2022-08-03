import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobLIstCardsView = props => {
  const {eachJobView} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = eachJobView
  return (
    <Link
      to={`/jobs/${id}`}
      style={{color: 'inherit', textDecoration: 'inherit'}}
    >
      <div className="each_card_list_job_container">
        <div className="top_image_data">
          <img
            src={companyLogoUrl}
            className="find_jobs_each_job_logo"
            alt="company logo"
          />
          <div className="top_right_each_job">
            <p className="each_company_title">{title}</p>
            <div className="star_ratings_align">
              <AiFillStar />
              <p className="each_company_title1">{rating}</p>
            </div>
          </div>
        </div>
        <div className="each_job_middle_cotainer">
          <div className="middle_container_align_each">
            <GoLocation />
            <p className="each_company_title1">{location}</p>
            <div className="middle_container_align_each left_margin_style">
              <BsBriefcaseFill />
              <p className="each_company_title1 ">{employmentType}</p>
            </div>
          </div>
          <p className="each_company_title1">{`${packagePerAnnum}`}</p>
        </div>
        <hr className="each_job_hr_details" />
        <p>Description</p>
        <p>{jobDescription}</p>
      </div>
    </Link>
  )
}

export default JobLIstCardsView
