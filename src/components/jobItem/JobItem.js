import { useState, useEffect } from 'react';

import { Animated } from 'react-animated-css';
import WOW from 'wowjs';

export default function JobItem({
  image,
  title,
  subtitle,
  id,
  latitude,
  longitude,
  dataPuplished
}) {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [publishedDate, setPublishedData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=Vikt0rkovalchuk`
    )
      .then(res => res.json())
      .then(data => {
        if (data.countryName) {
          setLocation(data.countryName);
        } else {
          setLocation('Some Ocean/Sea');
        }
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
      });
    countPuplishedDate(dataPuplished);
  }, []);

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const countPuplishedDate = date => {
    const createdAtDate = new Date(date);
    const currentDate = new Date();
    const diff = new Date(currentDate.getTime() - createdAtDate.getTime());

    const diffYears = diff.getUTCFullYear() - 1970;
    const diffMonths = diff.getUTCMonth();
    const diffDays = diff.getUTCDate() - 1;

    if (diffYears > 0) {
      if (diffYears > 1) {
        setPublishedData(`Posted ${diffYears} years ago`);
      } else {
        setPublishedData(`Posted ${diffYears} year ago`);
      }
    } else {
      if (diffMonths > 0) {
        if (diffMonths > 1) {
          setPublishedData(`Posted ${diffMonths} months ago`);
        } else {
          setPublishedData(`Posted ${diffMonths} month ago`);
        }
      } else {
        if (diffDays > 0) {
          if (diffDays > 1) {
            setPublishedData(`Posted ${diffDays} days ago`);
          } else {
            setPublishedData(`Posted ${diffDays} day ago`);
          }
        } else {
          setPublishedData(`Posted recently`);
        }
      }
    }
  };

  const errorMessage = error ? 'Somethig went wrong' : null;
  const spinner = loading ? 'Loading...' : null;
  const currentLocation = !(loading || error) ? location : null;

  return (
    <Animated className="wow" animationIn="slideInUp">
      <div className="jobitem min-h-164px bg-white sm:bg-EFF0F5 rounded-lg px-4 py-6 mx-5 shadow-jobitem sm:mx-0">
        <div className="jobitem__content flex justify-between sm:flex-col-reverse">
          <div className="jobitem__about flex gap-26px sm:mt-4 sm:gap-19px">
            <div className="jobitem__img shrink-0  h-85px w-85px sm:h-66px sm:w-66px">
              <img
                src={image}
                alt="logo"
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="jobitem__descr">
              <h2
                className="jobitem__descr-title font-bold text-2xl leading-8 tracking-h2 text-3A4562 sm:text-lg sm:font-normal sm:leading-6 sm:tracking-sm-h2 hover:underline cursor-pointer"
                data-id={id}
              >
                {title}
              </h2>
              <h3 className="jobitem__descr-subtitle mt-2 tracking-subtitle text-878D9D self-stretch">
                {subtitle}
              </h3>
              <div className="jobitem__descr-location mt-2 flex gap-11px items-center">
                <div className="_icon-location text-lg text-D8D8D8"></div>
                <p className="country text-base tracking-subtitle text-878D9D">
                  {errorMessage}
                  {spinner}
                  {currentLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="jobitem__save flex gap-8 lg:flex-col lg:justify-between sm:flex-row sm:justify-between sm:ml-85px">
            <div className="jobitem__save-stars flex self-center text-lg text-38415D sm:text-10px sm:text-384564">
              <div className="star _icon-star"></div>
              <div className="star _icon-star"></div>
              <div className="star _icon-star"></div>
              <div className="star _icon-star"></div>
              <div className="star _icon-star"></div>
            </div>
            <div className="jobitem__save-icon flex flex-col justify-between min-w-146px lg:gap-50px sm:min-w-45px">
              <div className="flex justify-end">
                <div className="_icon-save flex justify-end text-70778B text-xl lg:justify-center sm:hidden cursor-pointer"></div>
              </div>
              <p className="data tracking-subtitle text-878D9D sm:font-light sm:text-sm sm:leading-4 sm:text-right">
                {publishedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
}
