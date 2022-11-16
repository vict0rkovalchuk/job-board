import hospital from '../../imgs/hospital-icon.png';

export default function JobItem() {
  return (
    <div className="jobitem min-h-164px bg-white sm:bg-EFF0F5 rounded-lg px-4 py-6 mx-5 shadow-jobitem sm:mx-0">
      <div className="jobitem__content flex justify-between sm:flex-col-reverse">
        <div className="jobitem__about flex gap-26px sm:mt-4 sm:gap-19px">
          <div className="jobitem__img shrink-0  h-85px w-85px sm:h-66px sm:w-66px">
            <img src={hospital} alt="hospital" className="rounded-full" />
          </div>
          <div className="jobitem__descr">
            <h2 className="jobitem__descr-title font-bold text-2xl leading-8 tracking-h2 text-3A4562 sm:text-lg sm:font-normal sm:leading-6 sm:tracking-sm-h2">
              Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
              Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
              Fachärztin für Arbeitsmedizin (m/w/d)
            </h2>
            <h3 className="jobitem__descr-subtitle mt-2 tracking-subtitle text-878D9D self-stretch">
              Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
            </h3>
            <div className="jobitem__descr-location mt-2 flex gap-11px items-center">
              <div className="_icon-location text-lg text-D8D8D8"></div>
              <p className="country text-base tracking-subtitle text-878D9D">
                Vienna, Austria
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
          <div className="jobitem__save-icon flex flex-col justify-between min-w-138px lg:gap-50px sm:min-w-45px">
            <div className="_icon-save flex justify-end text-70778B text-xl lg:justify-center sm:hidden"></div>
            <p className="data tracking-subtitle text-878D9D sm:font-light sm:text-sm sm:leading-4 sm:text-right">
              Posted 2 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
