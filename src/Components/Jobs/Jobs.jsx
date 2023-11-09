import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';



const Jobs = ({ jobData }) => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabSelect = (index) => {
        setTabIndex(index);
    };

    // const categories = ["All", ...new Set(jobData.map((job) => job.category))];
    return (

        <div>

            <div className="flex items-center justify-center">
                <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
                    <TabList className="flex flex-row items-center justify-center gap-4">
                        {Object.keys(jobData).map((tabKey, index) => (
                            <Tab
                                key={index}
                                className={`cursor-pointer p-2 border rounded  ${tabIndex === index
                                    ? 'bg-blue-700 text-white'
                                    : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                                    }`}
                            >
                                {jobData[tabKey].tabName}
                            </Tab>
                        ))}
                    </TabList>

                    <div className="pt-6 ">

                        {Object.keys(jobData).map((tabKey, index) => (
                            <TabPanel key={index}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {tabKey === 'all' ? (
                                        Object.keys(jobData).reduce((allCards, key) => {
                                            if (key !== 'all' && jobData[key].cards) {
                                                return allCards.concat(jobData[key].cards);
                                            }
                                            return allCards;
                                        }, []).map((card) => (
                                            <Card key={card.id} id={card.id} name={card.name} title={card.title} postingDate={card.postingDate} deadline={card.deadline} salaryRange={card.salaryRange} applicants={card.applicants} />
                                        ))
                                    ) : (
                                        jobData[tabKey].cards.map((card) => (
                                            <Card key={card.id} id={card.id} name={card.name} title={card.title} postingDate={card.postingDate} deadline={card.deadline} salaryRange={card.salaryRange} applicants={card.applicants} />
                                        ))
                                    )}
                                </div>
                            </TabPanel>
                        ))}




                    </div>


                </Tabs>
            </div>

         

        </div >

    );
};

export default Jobs;