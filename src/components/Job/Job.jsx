import { MdOutlineLocationOn } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>

          <div>
            <button className="px-5 py-2 font-extrabold mr-4 rounded border border-[#7E90FE] text-purple-300">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold mr-4 rounded border border-[#7E90FE] text-purple-300">{job_type}</button>
          </div>

          <div className="flex mt-4">
            <h2 className="flex mr-4" ><MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn>{location}</h2>
            <h2 className="flex mr-4" ><CiBadgeDollar className="text-xl" ></CiBadgeDollar>salary: {salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/&{id}`}> 
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
