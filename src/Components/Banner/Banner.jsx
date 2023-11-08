import NavBar from "../NavBar/NavBar";


const Banner = () => {
    return (
        <div className="p-4 ">
            <div>
                <NavBar></NavBar>
            </div>
            <div className="flex flex-col lg:grid grid-cols-3 p-7">
                <div className="col-span-2 pl-28 space-y-7 py-4">
                    <h2 className="font-bold text-6xl">Your Path to Success Starts Here</h2>
                    <p className="font-medium text-xl">Welcome to DreamCatalyst, where job seekers and employers come b together. <br />Find the perfect job or ideal candidate with ease. Post, search, and apply – your future begins now.</p>
                    <input className="w-96 h-11 p-4 rounded" type="text" placeholder="Search for jobs......" name="" id="" />
                    <button className="btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold text-xl">Search</button>
                </div>
                <div>
                    <img className="h-[400px]" src="https://i.ibb.co/5jG3Gw3/banner.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;