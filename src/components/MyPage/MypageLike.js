import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../tokenUtils";
import { ArticleList } from "../../components/MyPage/MypageStyle";

export default function MypageLike() {
  const [likeList, setlikeList] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    getlikeList();
  }, []);

  const getlikeList = async () => {
    try {
      const response = await axios.get("/api/v1/members/myLog/olleh", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setlikeList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ArticleList>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          {likeList.length === 0 ? (
            <p>관심글이 없습니다.</p>
          ) : (
            <ul>
              {likeList.map((item) => (
                <li key={item.id}>
                  {item.communityName}
                  {new Date(item.createdAt).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </ArticleList>
  );
}
