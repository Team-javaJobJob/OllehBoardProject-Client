import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../tokenUtils";
import { useNavigate } from "react-router-dom";
import { ArticleList } from "../MyPage/MypageStyle";

export default function MypageWrote() {
  const [wroteList, setWroteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getwroteList();
  }, []);

  const getwroteList = async () => {
    try {
      const response = await axios.get("/api/v1/members/myLog/post", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setWroteList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (post) => {
    navigate(`/api/v1/post/${post.id}`, {
      state: { post: post },
    });
  };

  return (
    <ArticleList>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          {wroteList.length === 0 ? (
            <p>내가 쓴 글이 없습니다.</p>
          ) : (
            <ul>
              {wroteList.map((item) => (
                <li key={item.id} onClick={() => handleClickItem(item)}>
                  {item.title}
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
