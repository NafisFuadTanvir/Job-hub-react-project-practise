import { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";

const Catagorylist = () => {
  const [catagorys, setCatagory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-5xl text-center">Job Category List</h2>
        <p className="text-center mt-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="flex gap-10 justify-center mt-3 ">

        {
            catagorys.map(catagory=> <Catagory  key={catagory.id} catagory={catagory}></Catagory> )
        }
      </div>
    </div>
  );
};

export default Catagorylist;
