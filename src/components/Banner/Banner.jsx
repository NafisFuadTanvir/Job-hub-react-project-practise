import mainpic from '../Banner/mainpic.png'; 
const Banner = () => {
    return (
        <div>
            <div className="maincontainer mt-10 flex">

                <div className="written part w-2/4 mt-5">

                    <h1 className="text-5xl mt-1 font-extrabold">One Step  </h1>
                    <h1 className="text-5xl mt-1 font-extrabold">Closer To Your</h1>
                    <h1 className="text-5xl mt-1 text-purple-400 font-extrabold">Dream Job</h1>

                    <p className="mt-2">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className="btn  btn-primary mt-4">Get Started</button>

                </div>

                <div className="picture w-2/4">

                    <img src={mainpic} alt="main pic" />
                </div>
            </div>
        </div>
    );
};

export default Banner;