import map from '../../imgs/map.jpg';

import { Link } from 'react-router-dom';

export default function JobDetails() {
  return (
    <div className="wrapper pt-14 pb-40 relative sm:pt-6 sm:pb-12">
      <div className="container max-w-1440px my-0 mx-auto">
        <div className="details max-w-1260px my-0 mx-auto flex gap-20">
          <div className="details__info w-793px pl-5 pr-14 lg:w-11/12 sm:w-80 sm:my-0 sm:mx-auto xl:my-0 xl:mx-auto sm:px-1.5">
            <div className="details__header flex justify-between items-center border-b border-solid border-slate-700/0.13 sm:flex-col sm:pb-2">
              <h2 className="font-bold text-[28px] tracking-0.413333px text-3A4562">
                Job Details
              </h2>
              <div className="details__actions flex gap-6 items-center sm:mt-3">
                <div className="_icon-save flex gap-4 items-center text-xl text-70778B cursor-pointer">
                  <span className="text-lg text-3A4562">Save to my list</span>
                </div>
                <div className="_icon-share flex gap-4 items-center text-xl text-70778B cursor-pointer">
                  <span className="text-lg text-3A4562">Share</span>
                </div>
              </div>
            </div>
            <button className="details__apply mt-10 bg-384564 text-white py-18px px-30px rounded-lg sm:my-0 sm:mx-auto sm:mt-10">
              Apply now
            </button>
            <div className="mt-8 flex gap-14 justify-between sm:flex-col">
              <div className="details__title max-w-500px font-bold text-2xl tracking-[-0.75px] text-3A4562">
                Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
                Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
                Fachärztin für Arbeitsmedizin (m/w/d)
              </div>
              <div className="details__salary">
                <span className="font-bold text-xl text-3A4562">
                  € 54 000—60 000
                </span>{' '}
                <span className="text-lg">Brutto, per year</span>
              </div>
            </div>
            <div className="details__published mt-1.5 text-B8BBC5 text-lg">
              Posted 10 years ago
            </div>
            <div className="details__descr">
              <br /> Reprehenderit Lorem consectetur non et minim adipisicing
              deserunt. Ipsum reprehenderit do pariatur proident esse sint magna
              ullamco qui minim. Anim Lorem ut laborum occaecat culpa
              consectetur reprehenderit aliquip ex cupidatat proident quis
              laborum. Nulla aute ipsum et anim.
              <br /> <br /> Responsopilities:
              <br /> Ex qui consequat deserunt laborum cupidatat ut ullamco
              veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco
              elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut
              proident voluptate quis nulla anim commodo in pariatur ad.
              <br />
              <br />
              Compensation & Benefits:
              <br />
              <tt /> Incididunt et sint incididunt laboris duis. Deserunt
              consectetur sint aute et sint aliqua quis nostrud non elit aliqua
              elit tempor. Aliquip ad dolore proident eu consequat elit amet
              laborum aute excepteur sit labore.
              <br />
              <br />
            </div>
            <button className="details__apply  bg-384564 text-white py-18px px-30px rounded-lg block sm:my-0 sm:mx-auto">
              Apply now
            </button>
            <div className="details__addtional mt-20 font-bold text-[28px] tracking-0.413333px text-3A4562 border-b border-solid border-slate-700/0.13">
              Additional info
            </div>
            <div className="details__types mt-4">
              <span className="text-lg text-3A4562">Employment type</span>
              <div className="details__types-list mt-2.5 flex gap-2 sm:flex-col sm:items-center">
                <div className="item bg-E1E6F4 py-4 w-56 flex justify-center items-center rounded-lg text-55699E font-bold text-base border border-solid border-[#B7C0DA]">
                  {' '}
                  Full time
                </div>
                <div className="item bg-E1E6F4 py-4 w-56 flex justify-center items-center rounded-lg text-55699E font-bold text-base border border-solid border-[#B7C0DA]">
                  Part time
                </div>
                <div className="item bg-E1E6F4 py-4 w-56 flex justify-center items-center rounded-lg text-55699E font-bold text-base border border-solid border-[#B7C0DA]">
                  Temporary
                </div>
              </div>
            </div>
            <div className="details__benefits mt-4">
              <span className="text-lg text-3A4562">Benefits</span>
              <div className="details__benefits-list mt-2.5 flex gap-2 sm:flex-col sm:items-center">
                <div className="item bg-FFF8D9 py-4 w-56 flex justify-center items-center rounded-lg text-988B49 font-bold text-base border border-solid border-[#FFCF00]">
                  Flexible shedule
                </div>
                <div className="item bg-FFF8D9 py-4 w-56 flex justify-center items-center rounded-lg text-988B49 font-bold text-base border border-solid border-[#FFCF00]">
                  Relocation assistance
                </div>
              </div>
            </div>
            <div className="details__images mt-20 border-b border-solid border-slate-700/0.13 ">
              <span className="font-bold text-[28px]  text-3A4562">
                Attached images
              </span>
            </div>
            <div className="images mt-5 flex gap-2.5 sm:flex-col sm:items-center">
              <div className="image w-52 h-28">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full object-cover rounded-lg"
                  alt="people"
                />
              </div>
              <div className="image w-52 h-28">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full object-cover rounded-lg"
                  alt="people"
                />
              </div>
              <div className="image w-52 h-28">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full object-cover rounded-lg"
                  alt="people"
                />
              </div>
            </div>
            <Link
              to="/job-board/"
              className="details__return mt-24 flex justify-center ml-minus80px items-center gap-5 rounded-lg bg-E4E5EA w-72 py-5 px-6 font-semibold lg:ml-0 sm:hidden"
            >
              <span className="_icon-arrow "></span>RETURN TO JOB BOARD
            </Link>
          </div>
          <div className="details__map lg:hidden sm:hidden xl:hidden">
            <img className="rounded-lg" src={map} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
