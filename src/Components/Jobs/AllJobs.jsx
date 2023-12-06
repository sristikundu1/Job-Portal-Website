import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJob from '../../hooks/useJob';
import TabJob from '../../Pages/Home/TabJob';

const AllJobs = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [job] = useJob();

    const All = job;
    const RemoteJob = job.filter(jobitem => jobitem.category === 'Remote')
    const PartTime = job.filter(jobitem => jobitem.category === 'Part-Time')
    const Hybrid = job.filter(jobitem => jobitem.category === 'Hybrid')
    const OnSiteJob = job.filter(jobitem => jobitem.category === 'On Site')

    return (
        <div>
            <div className="flex items-center justify-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex flex-row items-center justify-center gap-4">
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 0
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                            }`}>All</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 1
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                            }`}>RemoteJob</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 2
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                            }`}>PartTime</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 3
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                            }`}>Hybrid</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 4
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-orange-500'
                            }`}>OnSiteJob</Tab>
                    </TabList>
                    <TabPanel>


                        <TabJob
                            jobitems={All}></TabJob>



                    </TabPanel>

                    <TabPanel>
                        <TabJob
                            jobitems={RemoteJob}></TabJob>

                    </TabPanel>
                    <TabPanel>
                        <TabJob
                            jobitems={PartTime}></TabJob>

                    </TabPanel>
                    <TabPanel>

                        <TabJob
                            jobitems={Hybrid}></TabJob>

                    </TabPanel>
                    <TabPanel>

                        <TabJob
                            jobitems={OnSiteJob}></TabJob>
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default AllJobs;