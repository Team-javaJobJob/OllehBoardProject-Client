import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../tokenUtils';

const PostCount = ({ postId }) => {
  const [ count, setCount ] = useState(0);    // default 값 '0'

  useEffect(() => {
    const fetchPostCount = async () =>{
      try {
        const response = await axios.get(`/api/v1/boards/${postId}`,{
        headers:{
          Authorization: `Bearer ${getToken()}`, // 토큰을 authorization 헤더에 추가
        }
        });
        const count = response.data.count; 
        
        setCount(count);
        
        increasePostCount(postId)
      } catch(error) {
        console.error('Error fetching post count:', error);
      }
    };

    fetchPostCount();
  },[postId])

  const increasePostCount = async(postId)=>{
    try{
      await axios.get(`/api/v1/boards/${postId}`,{
        headers:{
        Authorization: `Bearer ${getToken()}`,
      },
      });
    } catch(error){
      console.error("증가안됌", error)
    }
  }

  if(count === 0){
    return <span>네 글은 인기가 없다.</span>
  }
  return (
    <div>
      <p>조회수 : {count}</p>
    </div>
  );
};

export default PostCount;