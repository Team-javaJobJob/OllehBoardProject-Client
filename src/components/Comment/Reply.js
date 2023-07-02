import React, { useState, useEffect } from "react";
import {
  Replytextarea,
  ReplyButton,
  EditButton,
  ReplyLists,
  MemberName,
  Content,
} from "./CommentStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  createReply,
  deleteReply,
  getReply,
  updateReply,
} from "../../redux/slice/ReplySlice";
import Modal from "../Common/Modal/Modal";

export default function Reply(props) {
  const { commentId, postId } = props;

  const [showModal, setShowModal] = useState(false); //로그인 여부 확인 모달

  const [content, setContent] = useState(""); //Reply 내용
  const [replyList, setReplyList] = useState([]); // Reply 목록
  const [showReplies, setShowReplies] = useState(false); // 전체 댓글 표시 여부
  const [isReplyMode, setIsReplyMode] = useState(false); // 대댓글 작성 모드 여부

  const [editReplyId, setEditReplyId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (showReplies) {
      dispatch(getReply(commentId))
        .unwrap()
        .then((response) => setReplyList(response));
    }
  }, [showReplies, dispatch, commentId]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const toggleReplies = async () => {
    // 대댓글이 닫혀있고 아직 대댓글을 가져온 적이 없을 경우
    if (!showReplies && replyList.length === 0) {
      const response = await dispatch(getReply(commentId)).unwrap();
      setReplyList(response);
    }
    // 대댓글 표시 여부를 전환
    setShowReplies(!showReplies);
  };

  //대댓글 모드 생성
  const toggleReplyMode = () => {
    if (!token) {
      setShowModal(true);
    } else {
      setIsReplyMode(!isReplyMode);
      setContent("");
    }
  };

  //대댓글 생성
  const handleCreateReply = async () => {
    if (content.trim() === "") {
      alert("대댓글 내용을 입력해주세요.");
      return;
    }
    try {
      await dispatch(createReply({ postId, commentId, content }));
      alert("대댓글이 등록되었습니다.");
      setContent("");
      toggleReplies();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditContentChange = (e) => {
    setEditContent(e.target.value);
  };

  //대댓글 목록 보여주는 함수
  const toggleEditReplyMode = (replyId) => {
    if (editReplyId === null) {
      setEditReplyId(replyId);
      setEditContent(content);
    } else {
      setEditReplyId(null);
    }
  };

  //대댓글 수정 함수
  const handleUpdateReply = async () => {
    if (editContent.trim() === "") {
      alert("대댓글 내용을 입력해주세요.");
      return;
    }
    try {
      await dispatch(
        updateReply({ replyId: editReplyId, content: editContent })
      );
      alert("대댓글이 수정되었습니다.");
      toggleEditReplyMode(null);
      setEditReplyId(null);
      toggleReplies();
    } catch (error) {
      console.error(error);
    }
  };

  //대댓글 삭제 함수
  const handleDeleteReply = async (replyId) => {
    try {
      await dispatch(deleteReply(replyId));
      alert("대댓글이 삭제되었습니다.");
      toggleReplies();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isReplyMode ? (
        <div>
          <Replytextarea value={content} onChange={handleChange} />
          <ReplyButton onClick={handleCreateReply}>완료</ReplyButton>
          <ReplyButton onClick={toggleReplyMode}>취소</ReplyButton>
        </div>
      ) : (
        <ReplyButton onClick={toggleReplyMode}>Reply to</ReplyButton>
      )}

      <ReplyButton onClick={toggleReplies}>
        {showReplies ? "댓글▲" : "댓글▼"}
      </ReplyButton>

      {showReplies && (
        <ReplyLists>
          {replyList.map((reply) => (
            <div key={reply.id}>
              {editReplyId === reply.id ? (
                <>
                  <Replytextarea
                    value={editContent}
                    onChange={handleEditContentChange}
                  />
                  <EditButton onClick={handleUpdateReply}>수정 완료</EditButton>
                  <EditButton onClick={() => toggleEditReplyMode(null)}>
                    수정 취소
                  </EditButton>
                </>
              ) : (
                <React.Fragment>
                  <MemberName>{reply.nickname}</MemberName>
                  <Content>{reply.content}</Content>
                  <EditButton onClick={() => toggleEditReplyMode(reply.id)}>
                    수정
                  </EditButton>
                  <EditButton onClick={() => handleDeleteReply(reply.id)}>
                    삭제
                  </EditButton>
                </React.Fragment>
              )}
            </div>
          ))}
        </ReplyLists>
      )}

      <Modal
        type="loginRequest"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
