const Catagory = ({catagory}) => {

    const {logo,category_name,availability}=catagory;
    return (
        <div className="border-2 p-2">

        <img className="w-6 " src={logo} alt="" />
        <h2>{category_name}</h2>
        <h2>{availability}</h2>
            
        </div>
    );
};

export default Catagory;