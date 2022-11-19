import JobItem from '../jobItem/JobItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { useState, useEffect } from 'react';

import useJobService from '../../services/JobService';

export default function JobBoard() {
  const [jobs, setJobs] = useState({});

  const { loading, error, getJobs, clearError } = useJobService();

  useEffect(() => {
    updateJobs();
  }, []);

  const onJobsLoaded = jobs => {
    setJobs(jobs);
    console.log(jobs);
  };

  const updateJobs = () => {
    clearError();
    getJobs().then(onJobsLoaded);
  };

  const jobList = Array.from(jobs).map((item, i) => {
    return (
      <JobItem
        key={item.id}
        id={item.id}
        image={item.pictures[0]}
        title={item.title}
        subtitle={item.address}
        latitude={item.location.lat}
        longitude={item.location.long}
        dataPuplished={item.createdAt}
      />
    );
  });

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? jobList : null;

  return (
    <div className="wrapper max-w-100vw min-h-100vh bg-sky-blue pt-29px pb-29px sm:pt-0">
      <div className="container max-w-1440px min-h-100vhminus58px my-0 mx-auto flex flex-col gap-2 sm:p-9px">
        {errorMessage}
        {spinner}
        {content}
      </div>
    </div>
  );
}
