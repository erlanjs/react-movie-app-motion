import React from "react";

export default function Pagination({
  currentPage = 1,
  allPages,
  onChangePage,
}) {
  const pages = [];

  for (let i = 1; i < allPages; i++) {
    pages.push(i);
    console.log(i);
  }

  function changePrevPage() {
    onChangePage(currentPage - 1);
  }

  function changeNextPage() {
    onChangePage(currentPage + 1);
  }

  function selectedPage(page) {
    onChangePage(page + 1);
  }

  return (
    <div className="py-3">
      <button
        className="p-3 bg-[#26567E] text-white rounded-md disabled:bg-[#B8C1CC] disabled:cursor-no-drop"
        disabled={currentPage <= 1}
        onClick={changePrevPage}
      >
        Prev page
      </button>
      {pages.map((page, index) => (
        <button
          className="py-2 px-3 border-1 border-solid border-[#26567E]"
          style={{
            background: index + 1 === currentPage ? "#26567E" : "none",
            color: index + 1 === currentPage ? "white" : "black",
          }}
          onClick={() => selectedPage(index)}
        >
          {page}
        </button>
      ))}
      <button
        className="p-3 bg-[#26567E] text-white rounded-md disabled:bg-[#B8C1CC] disabled:cursor-no-drop"
        onClick={changeNextPage}
        disabled={currentPage === allPages - 1}
      >
        Next page
      </button>
    </div>
  );
}
