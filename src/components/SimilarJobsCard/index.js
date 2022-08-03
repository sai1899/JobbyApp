import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarJobsCard = props => {
  const {eachSimilarJobItem} = props

  return (
    <div className="similar_card_conatiner_2">
      <div className="top_image_data">
        <img
          src={eachSimilarJobItem.companyLogoUrl}
          className="find_jobs_each_job_logo"
          alt="similar job company logo"
        />
        <div className="top_right_each_job">
          <p className="each_company_title">{eachSimilarJobItem.title}</p>
          <div className="star_ratings_align">
            <AiFillStar />
            <p className="each_company_title1">{eachSimilarJobItem.rating}</p>
          </div>
        </div>
      </div>
      <h4>Description</h4>
      <p>{eachSimilarJobItem.jobDescription}</p>
      <div className="middle_container_align_each">
        <GoLocation />
        <p className="each_company_title1">{eachSimilarJobItem.location}</p>
        <div className="middle_container_align_each left_margin_style">
          <BsBriefcaseFill />
          <p className="each_company_title1 ">
            {eachSimilarJobItem.employmentType}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SimilarJobsCard
