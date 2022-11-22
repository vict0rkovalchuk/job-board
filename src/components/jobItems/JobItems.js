import ReactPaginate from 'react-paginate';

import { useState, useEffect } from 'react';

import { Animated } from 'react-animated-css';
import WOW from 'wowjs';

import JobItem from '../jobItem/JobItem';

export default function JobItems(props) {
  const { data } = props;

  const [extremePaginationBtn, setExtremePaginationBtn] = useState('start');

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    console.log(itemOffset);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

    if (itemOffset === 0) {
      setExtremePaginationBtn('start');
      return;
    }
    if (data.length - itemOffset <= itemsPerPage) {
      setExtremePaginationBtn('end');
      return;
    }
    setExtremePaginationBtn(null);
  }, [itemOffset, itemsPerPage, data]);

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const handlePageClick = event => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const paginationClass = btnLocation => {
    switch (btnLocation) {
      case 'start':
        return 'pagination-start';
      case 'end':
        return 'pagination-end';
      default:
        return '';
    }
  };

  return (
    <>
      {currentItems.map((item, i) => {
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
      })}

      <Animated className="wow" animationIn="slideInUp">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div
              className={`_icon-arrow _icon-arrow-next bg-white text-7D859C rotate-180 pl-6 h-full py-17px pr-7 rounded-l-10.4px opacity-50 hover:opacity-100 sm:hidden ${
                data.length - itemOffset <= itemsPerPage && 'hidden'
              }
            `}
            ></div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={
            <div
              className={`_icon-arrow _icon-arrow-prev bg-white text-7D859C pl-6 h-full py-17px pr-7 rounded-l-10.4px opacity-50 hover:opacity-100 sm:hidden ${
                itemOffset === 0 && 'hidden'
              }`}
            ></div>
          }
          renderOnZeroPageCount={null}
          containerClassName={`pagination mt-12 flex justify-center items-center h-52px text-lg ${paginationClass(
            extremePaginationBtn
          )}`}
          pageLinkClassName="page-num bg-white font-bold text-70778B h-31px w-31px text-xl flex items-center justify-center hover:text-5876C5"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active text-5876C5"
        />
      </Animated>
    </>
  );
}
