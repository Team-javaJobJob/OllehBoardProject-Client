import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentContainer from "../../components/Comment/CommentContainer";
import BoardDetail from "../../components/Boards/BoardDetail";

export default function BoardDetailPage() {
  const {
    state: { post },
  } = useLocation();
  const { postId } = useParams();

  return (
    <div>
      <BoardDetail post={post} postId={postId} />
      <CommentContainer postId={postId} />
    </div>
  );
}
