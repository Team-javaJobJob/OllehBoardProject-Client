import React from "react";
import { BoardListBox } from "./BoardStyle";

export default function BoardList({ currentPosts, navigate }) {
  return (
    <ul>
      {currentPosts.map((post) => (
        <li
          key={post.id}
          onClick={() =>
            navigate(`/api/v1/post/${post.id}`, { state: { post } })
          }
        >
          <BoardListBox>
            <div>
              <h2>{post.title}</h2>
            </div>
            <div>
              {post.member && <h3>{post.member.nickName}</h3>}
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </BoardListBox>
        </li>
      ))}
    </ul>
  );
}
