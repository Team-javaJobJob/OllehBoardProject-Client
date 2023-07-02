import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCommunitiesByKeyword,
  getCommunity,
} from "../../redux/slice/communitySlice";
import { SearchBtn, SearchingBox, SearchingInput } from "./KeyWordStyle";
import { BsSearchHeart } from "react-icons/bs";

const Keyword = ({ setSearchedCommunities }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  //중복 제거 함수
  const getUniqueCommunities = (mergedCommunities) => {
    // community 객체의 id 값을 추출하여 중복 제거
    const uniqueIds = Array.from(
      new Set(mergedCommunities.map((community) => community.id))
    );
    return uniqueIds.map((id) =>
      mergedCommunities.find((community) => community.id === id)
    );
  };

  //커뮤니티 이름, 키워드 검색 함수
  const handleSearch = async () => {
    try {
      const communities = (await dispatch(getCommunity())).payload;

      // 검색어에 일치하는 커뮤니티 목록을 필터링
      const filteredCommunities = communities.filter((community) =>
        community.communityName.toLowerCase().includes(keyword.toLowerCase())
      );

      // 키워드에 해당하는 커뮤니티 목록을 가져오기
      const fetchedByKeyword = (
        await dispatch(fetchCommunitiesByKeyword(keyword))
      ).payload;

      // 두 목록을 병합
      const mergedCommunities = [...filteredCommunities, ...fetchedByKeyword];

      // id 값을 기반으로 중복 제거된 객체 배열로 변환
      const uniqueCommunities = getUniqueCommunities(mergedCommunities);

      // 필터링된 목록을 상위 컴포넌트로 전달
      setSearchedCommunities(uniqueCommunities);
      setKeyword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchingBox>
      <SearchingInput
        type="text"
        value={keyword}
        onChange={handleKeywordChange}
        onKeyPress={handleKeyPress}
        placeholder="키워드로 검색"
      />
      <SearchBtn onClick={handleSearch}>
        <BsSearchHeart />
      </SearchBtn>
    </SearchingBox>
  );
};

export default Keyword;
