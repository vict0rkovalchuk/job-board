import JobItem from '../jobItem/JobItem';

export default function JobBoard() {
  return (
    <div className="wrapper max-w-100vw min-h-100vh bg-sky-blue pt-29px pb-29px sm:pt-0">
      <div className="container max-w-1440px my-0 mx-auto flex flex-col gap-2 sm:p-9px">
        <JobItem />
      </div>
    </div>
  );
}
