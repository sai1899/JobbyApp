import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'
import Header from '../Header'
import SimilarJobsCard from '../SimilarJobsCard'
import './index.css'

const EachJobItemPage = props => {
  const {eachJobFirst, eachJobSecond} = props
  console.log('in')
  console.log(eachJobFirst)
  console.log(eachJobSecond)
  return (
    <div>
      <Header />
      <div className="bakcground_conatiner_one">
        <div className="each_card_list_job_container_one">
          <div className="top_image_data_one">
            <img
              src={eachJobFirst.companyLogoUrl}
              className="find_jobs_each_job_logo_one"
              alt="job details company logo"
            />
            <div className="top_right_each_job_one">
              <p className="each_company_title_one">{eachJobFirst.title}</p>
              <div className="star_ratings_align_one">
                <AiFillStar />
                <p className="each_company_title1_one">{eachJobFirst.rating}</p>
              </div>
            </div>
          </div>
          <div className="each_job_middle_cotainer_one">
            <div className="middle_container_align_each_one">
              <GoLocation />
              <p className="each_company_title1_one">{eachJobFirst.location}</p>
              <div className="middle_container_align_each left_margin_style_one">
                <BsBriefcaseFill />
                <p className="each_company_title1_one">
                  {eachJobFirst.employmentType}
                </p>
              </div>
            </div>
            {/* <p className="each_company_title1_one">{`${eachJobFirst.packagePerAnnum}`}</p> */}
            <a
              href={eachJobFirst.companyWebsiteUrl}
              className="each_company_title1_one"
            >
              Visit
            </a>
          </div>
          <hr className="each_job_hr_details_one" />
          <h4>Description</h4>
          <p>{eachJobFirst.jobDescription}</p>
          <h4>Skills</h4>
          <div className="skills_needed_one">
            {eachJobFirst.skills.map(eachItem => (
              <div className="each_skill_needed">
                <img
                  src={eachItem.imageUrl}
                  className="all_languages_url"
                  alt={eachItem.name}
                />
                <p>{eachItem.name}</p>
              </div>
            ))}
          </div>
          <h4>Life at Company</h4>
          <div className="life_at_comapany_flex">
            <p>{eachJobFirst.lifeAtCompany.description}</p>
            <img
              src={eachJobFirst.lifeAtCompany.imageUrl}
              className="life_at_work_image"
              alt="life at company"
            />
          </div>
        </div>
        <h1 className="similar_para">Similar Jobs</h1>
        <div className="similar_jobs_conatiner">
          {eachJobSecond.map(eachItem => (
            <SimilarJobsCard eachSimilarJobItem={eachItem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EachJobItemPage
