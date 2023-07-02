import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBoard } from "../../redux/slice/boardSlice";
import {
  BoardFormContainer,
  BoardForm,
  BoardLabel,
  BoardInput,
  BoardTextarea,
  BoardButton,
} from "../../components/Boards/BoardStyle";

export default function BoardUpdatePage() {
  const location = useLocation();
  const {
    post: { title, content, postId },
  } = location.state;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const changeTitle = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const changeContent = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postUpdateRequest = {
      id: postId,
      title: updatedTitle,
      content: updatedContent,
    };

    try {
      await dispatch(updateBoard(postUpdateRequest));
      navigate("/api/v1/post/list");
    } catch (error) {
      console.error(error);
      alert("update실패");
    }
  };

  return (
    <BoardFormContainer>
      <BoardForm onSubmit={handleSubmit}>
        <BoardLabel htmlFor="title">제목</BoardLabel>
        <BoardInput
          type="text"
          name="title"
          id="title"
          value={updatedTitle}
          onChange={changeTitle}
        />

        <BoardLabel htmlFor="content">본문</BoardLabel>
        <BoardTextarea
          name="content"
          id="content"
          value={updatedContent}
          onChange={changeContent}
        />

        <BoardButton type="submit">수정하기</BoardButton>
      </BoardForm>
    </BoardFormContainer>
  );
}
