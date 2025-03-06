import React, { useState } from 'react';

const dummyData = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const itemsPerPage = 10;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            margin: '5px',
            padding: '8px 12px',
            background: currentPage === i ? '#007bff' : '#f0f0f0',
            color: currentPage === i ? 'white' : 'black',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {renderPageNumbers()}
      </div>
    </div>
  );
}

export default Pagination;