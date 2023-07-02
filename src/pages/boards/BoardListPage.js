import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoardList } from "../../redux/slice/boardSlice";
import { useNavigate } from "react-router-dom";
import BoardList from "../../components/Boards/BoardList";
import {
  BoardCreateButton,
  HeaderContainer,
} from "../../components/Boards/BoardStyle";
import Pager from "../../components/Common/Pager/Pager";
import Modal from "../../components/Common/Modal/Modal";

export default function BoardListPage() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const posts = useSelector((state) => state.boards);

  const [showModal, setShowModal] = useState(false);
  const [currentPosts, setCurrentPosts] = useState([]);

  const navigate = useNavigate();

  //한 페이지당 게시글 개수
  const POSTS_PER_PAGE = 5;

  // 게시판 목록 가져오기
  useEffect(() => {
    dispatch(getBoardList());
  }, [dispatch]);

  //각 포스트를 추출하여 currentPosts를 업데이트
  useEffect(() => {
    if (posts.length > 0) {
      setCurrentPosts(posts.slice(0, POSTS_PER_PAGE));
    }
  }, [posts]);

  // 로그인 상태에 따른 모달 처리
  const handleCreatePost = () => {
    if (!token) {
      setShowModal(true);
    } else {
      navigate("/api/v1/post");
    }
  };

  return (
    <section>
      <HeaderContainer>
        <h1>자유 게시판</h1>
        <BoardCreateButton onClick={handleCreatePost}>
          글쓰기{" "}
        </BoardCreateButton>
      </HeaderContainer>

      <BoardList currentPosts={currentPosts} navigate={navigate} />
      <Pager
        setCurrentPosts={setCurrentPosts}
        count={posts.length}
        posts={posts}
        postsPerPage={POSTS_PER_PAGE}
      />
      <Modal
        type="loginRequest"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}
