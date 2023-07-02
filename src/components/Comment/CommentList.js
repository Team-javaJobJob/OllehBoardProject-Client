import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  updateComment,
  getCommentList,
} from "../../redux/slice/commentSlice";
import {
  CommentLists,
  MemberName,
  Content,
  EditButton,
  InfoContainer,
} from "./CommentStyle";
import Reply from "./Reply";

export default function CommentList(props) {
  const { id, postId, memberName, content } = props;

  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.nickname);
  const isCurrentUserComment = nickname === memberName;

  const [newContent, setNewContent] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDelete = () => {
    dispatch(deleteComment(id))
      .then(() => {
        alert("삭제되었습니다.");
        dispatch(getCommentList(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = () => {
    dispatch(updateComment({ commentId: id, content: newContent }))
      .then(() => {
        alert("수정되었습니다.");
        setIsEditMode(false);
        dispatch(getCommentList(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleEdit = () => {
    setIsEditMode(true);
    setNewContent(content);
  };

  return (
    <CommentLists>
      <InfoContainer>
        <MemberName>{memberName}</MemberName>
        {isEditMode ? (
          <textarea value={newContent} onChange={handleChange} />
        ) : (
          <Content>{content}</Content>
        )}

        <Reply commentId={id} postId={postId} />
      </InfoContainer>

      {isCurrentUserComment && (
        <div>
          {isEditMode ? (
            <EditButton onClick={handleUpdate}>수정 완료</EditButton>
          ) : (
            <EditButton onClick={handleEdit}>수정</EditButton>
          )}
          <EditButton onClick={handleDelete}>삭제</EditButton>
        </div>
      )}
    </CommentLists>
  );
}
