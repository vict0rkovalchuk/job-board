import './pagination.scss';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import JobsItems from '../jobItems/JobItems';

import { useState, useEffect } from 'react';

import useJobService from '../../services/JobService';

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);

  const { loading, error, getJobs, clearError } = useJobService();

  useEffect(() => {
    updateJobs();
  }, []);

  const onJobsLoaded = jobs => {
    setJobs(jobs);
  };

  const updateJobs = () => {
    clearError();
    getJobs().then(onJobsLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <JobsItems data={jobs} /> : null;

  return (
    <div className="wrapper max-w-100vw min-h-100vh bg-sky-blue pt-29px pb-16 sm:pt-0">
      <div className="container max-w-1440px min-h-100vhminus58px my-0 mx-auto flex flex-col gap-2 sm:p-9px">
        {errorMessage}
        {spinner}
        {content}
      </div>
    </div>
  );
}
