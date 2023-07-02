import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { PaginationBox } from "../Pager/PagerStyle";

const Pager = ({ setCurrentPosts, count, posts, postsPerPage }) => {
  //초기 페이지 설정
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 번호가 변경될 때 호출되어 게시글 목록을 업데이트하는 함수
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    const indexOfLastPost = selectedPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  };

  return (
    <PaginationBox>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={postsPerPage}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
      />
    </PaginationBox>
  );
};

export default Pager;
