import React from 'react';
// import './Pagination.css';

const Pagination = (props) => {

//complete implamentaion
  return (
    <div className="Pagination" id="pagination">
     <button id="previous">prev</button>
     page {props.currentPage} of {props.totalPages}
     <button id="next">next</button>
    </div>
  );
}

export default Pagination;
