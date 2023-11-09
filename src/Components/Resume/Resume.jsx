

const Resume = () => {
    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="bg-[#113946] rounded-3xl h-[600px] grid grid-cols-1 lg:h-80 p-10 lg:flex lg:justify-between ">
                <div className="text-white space-y-4">
                    <h2 className="font-bold text-4xl">Do not just find.be found <br /> put your CV in front of employers</h2>
                    <span id="selectedResume"></span>

                    <input className="border-2 rounded-3xl w-24" type="file" accept=".pdf, .docx" name="resume" id="resume" onChange={() => {
                        const fileInput = document.getElementById('fileInput');
                        const fileName = fileInput.value.split('\\').pop();
                        document.getElementById('selectedFileName').textContent = fileName;

                    }} />
                    <button className=" btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold ml-3">Upload CV</button>

                </div>

                <div>
                    <img className="h-64 rounded-lg" src="https://i.ibb.co/sFnHDj7/getjob.webp" alt="" />
                </div>


            </div>

        </div>
    );
};

export default Resume;