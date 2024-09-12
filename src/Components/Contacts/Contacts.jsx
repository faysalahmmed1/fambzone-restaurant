

const Contacts = () => {
    return (
        <div className="bg-red-50 w-full">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl"> Contacts Us </h1>
            <div className="text-center mt-16  ml-16 mr-16  ">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Name" />
                </label>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                   
                    <input type="text" className="grow" placeholder="Enter your Email" />
                </label>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="text" className="grow" placeholder="Search" />
                </label>
                <br />
                <button className="btn btn-outline mb-5 btn-primary">Submit</button>
                
            </div>
        </div>
    );
};

export default Contacts;