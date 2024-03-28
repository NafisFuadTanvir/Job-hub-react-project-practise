import { useLoaderData, useParams } from "react-router-dom";

const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();

    const idInt= parseInt(id);
    const job = jobs.find(job => job.id === idInt);

     console.log(job)
    return (
        <div>
             <h2 className="text-center text-2xl">Job Details</h2>

            <div className="grid grid-cols-4 gap-4">
                <div className="border grid col-span-3">
                  <h2>Job details things</h2>
                </div>
                <div className="border grid col-span-1">
                        <h2>Job details in a card</h2>
                        <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;