import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList, createComment } from "../../redux/slice/commentSlice";
import CommentList from "./CommentList";
import {
  TextArea,
  CommentButton,
  FormContainer,
  CommentSection,
} from "./CommentStyle";
import Modal from "../Common/Modal/Modal";

export default function CommentContainer({ postId }) {
  const [content, setContent] = useState("");
  const [commentId, setCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const commentList = useSelector((state) => state.comment);

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreateComment = (e) => {
    e.preventDefault();

    if (!token) {
      setShowModal(true);
    } else {
      if (content.trim() === "") {
        alert("코멘트를 입력해주세요");
        return;
      }

      dispatch(createComment({ postId, content }))
        .then((response) => {
          setContent("");
          dispatch(getCommentList(postId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    dispatch(getCommentList(postId));
  }, [commentId]);

  return (
    <CommentSection>
      <h1>코멘트</h1>
      <ul>
        {commentList.map((comment) => (
          <li key={comment.id}>
            <CommentList
              id={comment.id}
              postId={postId}
              memberName={comment.memberName}
              content={comment.content}
            />
          </li>
        ))}
      </ul>

      <FormContainer>
        <TextArea rows="10" value={content} onChange={changeContent} required />
        <CommentButton onClick={handleCreateComment}>등록</CommentButton>
      </FormContainer>

      <Modal
        type="loginRequest"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </CommentSection>
  );
}
