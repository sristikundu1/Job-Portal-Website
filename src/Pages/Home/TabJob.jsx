import Card from "../../Components/Jobs/Card";


const TabJob = ({jobitems}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-2 lg:gap-6 mb-14 mt-10">
                        {
                          jobitems.map(jobitem => <Card
                          key={jobitem._id}
                          jobitem = {jobitem}></Card>)
                        }

                    </div>
    );
};

export default TabJob;