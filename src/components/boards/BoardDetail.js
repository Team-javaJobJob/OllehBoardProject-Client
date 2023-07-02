import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteBoard, getBoardList } from "../../redux/slice/boardSlice";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import {
  DetailWrapper,
  DetailHeader,
  DetailTitle,
  DetailNickName,
  DetailTime,
  AuthorAndActions,
  BoardButton,
  DetailContent,
} from "./BoardStyle";

export default function BoardDetail({ postId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState();

  const location = useLocation();
  useEffect(() => {
    const postFromLocation = location.state?.post || null;
    setPost(postFromLocation);
  }, []);

  const userNickname = useSelector((state) => state.user.nickname);

  if (!post) {
    return <p>작성한 포스트가 없습니다.</p>;
  }

  // member를 못받아온다면 기본값을 지정
  const member = post.member || { nickName: "." };

  const { title, content } = post;
  const isAuthor = userNickname === member.nickName;

  const deletePost = async () => {
    try {
      await dispatch(deleteBoard(postId));
      alert("삭제되었습니다.");
      await dispatch(getBoardList());
      navigate("/api/v1/post/list");
    } catch (error) {
      console.error(error);
    }
  };

  const postUpdateRequest = {
    title: title,
    content: content,
    member: member,
    postId: postId,
  };

  const updatePost = () => {
    navigate("/api/v1/post/update", {
      state: {
        post: postUpdateRequest,
      },
    });
  };

  return (
    <DetailWrapper>
      <DetailHeader>
        <div>
          <DetailTitle>{title}</DetailTitle>
        </div>

        <AuthorAndActions>
          <div>
            <DetailNickName>{member.nickName}</DetailNickName>
            <DetailTime>
              {new Date(post.createdAt).toLocaleDateString()}
            </DetailTime>
          </div>

          {isAuthor ? (
            <div>
              <BoardButton onClick={deletePost}>
                <FaTrashAlt /> 삭제하기
              </BoardButton>
              <BoardButton onClick={updatePost}>
                <FaPencilAlt /> 수정하기
              </BoardButton>
            </div>
          ) : null}
        </AuthorAndActions>
      </DetailHeader>

      <DetailContent>{content}</DetailContent>
    </DetailWrapper>
  );
}
