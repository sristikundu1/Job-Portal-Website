
const WorkingProgress = () => {
    return (
        <div className="max-w-6xl mx-auto py-4">
            <h2 className="font-love text-5xl text-center my-16 text-[#363062]">How it work</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="border-2 rounded-s-full border-[#ED7D31]  space-y-4 p-14 pl-16">
                    <img className="w-28 rounded-full" src="https://i.ibb.co/rxLKh46/wp1.png" alt="" />
                    <h2 className="font-bold text-xl">Register Your Account</h2>
                    <p className="text-[#4F4A45]">Create your professional profile on our job portal website to access job listings, connect with employers, and advance your career.</p>
                </div>
                <div className="border-2  border-[#ED7D31] space-y-4 p-14">
                    <img className="w-28 rounded-full" src="https://i.ibb.co/Ctw4Bwv/wp2.jpg" alt="" />
                    <h2 className="font-bold text-xl">Apply For Dream Job</h2>
                    <p className="text-[#4F4A45]">Explore your career aspirations by applying for your dream job opportunities through our job portal and take the next step towards your ideal career path.</p>
                </div>
                <div className="border-2 rounded-e-full border-[#ED7D31] space-y-4 p-14">
                    <img className="w-28 rounded-full" src="https://i.ibb.co/tBXk6Yg/wp3.jpg" alt="" />
                    <h2 className="font-bold text-xl">Upload Your Resume</h2>
                    <p className="text-[#4F4A45]">Elevate your job application by uploading your resume, showcasing your skills and experiences to potential employers on our job portal.</p>
                </div>
            </div>

        </div>
    );
};

export default WorkingProgress;