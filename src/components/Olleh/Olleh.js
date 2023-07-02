import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../tokenUtils";
import { HeartButtonImg, HeartCount, OllehContainer } from "./OllehStyle";
import ollehbeforelike from "../../assets/ollehbeforelike.png";
import ollehlike from "../../assets/ollehlike.png";

export default function Olleh({ communityId, ollehCount }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(ollehCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/v1/communities/${communityId}/olleh`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        if (res.data.type === "liked") {
          setLike(true);
        }
        setCount(res.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [communityId]);

  const toggleLike = async (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    try {
      const response = await axios.post(
        `/api/v1/communities/${communityId}/olleh`,
        null,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updatedCount = response.data.response;

      setLike((prevLike) => !prevLike);
      setCount(updatedCount);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log(error);
      }
    }
  };

  const HeartButton = ({ like, onClick }) => {
    return (
      <HeartButtonImg
        src={like ? ollehlike : ollehbeforelike}
        onClick={onClick}
        alt="Heart"
      />
    );
  };

  return (
    <OllehContainer>
      <HeartButton like={like} onClick={toggleLike} />
      <HeartCount> 👍 : {count}</HeartCount>
    </OllehContainer>
  );
}
