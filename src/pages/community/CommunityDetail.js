import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCommunity,
  deleteCommunity,
} from "../../redux/slice/communitySlice";
import Olleh from "../../components/Olleh/Olleh";
import {
  ArticleDetail,
  ChatBtn,
  CommunityName,
  Contents,
  DateCommunity,
  DeleteButton,
  EditButton,
  InfoCommunity,
  Input,
  InputContainer,
  Label,
  MapContainer,
  NickName,
  TextArea,
} from "../../components/Community/CommunityDetailStyle";
import Map from "../../components/Map/Map";

export default function CommunityDetail() {
  const { state } = useLocation();
  const {
    id,
    info,
    interest,
    communityName,
    memberNickName,
    ollehCount,
    region,
    createdAt,
  } = state.community;
  const { communityId } = useParams();
  //작성자인지 아닌지 판별
  const nickname = useSelector((state) => state.user.nickname);
  const isCommunityUser = nickname === memberNickName;

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id,
    communityName,
    info,
    interest,
    region,
  });

  const handleUpdate = () => {
    dispatch(updateCommunity(updatedData))
      .unwrap()
      .then(() => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.log("Update failed:", error);
      });
  };

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  //Edit form 생성
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Edit form 취소
  const handleCancel = () => {
    setIsEditing(false);
  };
  const navigate = useNavigate();

  const enterChatRoom = () => {
    navigate(`/community/${communityId}/chat-room`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("이 커뮤니티를 정말로 삭제하시겠습니까?")) {
      dispatch(deleteCommunity(id))
        .unwrap()
        .catch((error) => {
          console.log("Delete failed:", error);
        });
    }
  };

  return (
    <section>
      {isCommunityUser ? (
        <InputContainer>
          {isEditing ? (
            <div>
              <EditButton onClick={handleUpdate}>저장하기</EditButton>
              <DeleteButton onClick={handleCancel}>취소하기</DeleteButton>
            </div>
          ) : (
            <EditButton onClick={handleEdit}>수정하기</EditButton>
          )}
          <DeleteButton onClick={() => handleDelete(id)}>삭제하기</DeleteButton>
        </InputContainer>
      ) : null}

      <ArticleDetail>
        <CommunityName>
          {isEditing ? (
            <div>
              <Label>커뮤니티 이름:</Label>
              <Input
                name="communityName"
                value={updatedData.communityName}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            communityName
          )}
        </CommunityName>

        <div>
          <Label>관심사:</Label>
          {isEditing ? (
            <Input
              name="interest"
              value={updatedData.interest}
              onChange={handleInputChange}
            />
          ) : (
            <span>{interest}</span>
          )}
        </div>
        <InfoCommunity>
          <Label>소개글:</Label>
          {isEditing ? (
            <TextArea
              name="info"
              value={updatedData.info}
              onChange={handleInputChange}
            />
          ) : (
            <span>{info}</span>
          )}
        </InfoCommunity>
        <div>
          <Label>지역:</Label>
          {isEditing ? (
            <Input
              name="region"
              value={updatedData.region}
              onChange={handleInputChange}
            />
          ) : (
            <span>{region}</span>
          )}
        </div>
        <DateCommunity>
          {" "}
          {new Date(createdAt).toLocaleDateString()}
        </DateCommunity>

        <NickName>{nickname}</NickName>
      </ArticleDetail>

      <Olleh communityId={id} ollehCount={ollehCount} />
      <MapContainer>
        <Map region={region} />
      </MapContainer>

      <ChatBtn className="enter-chatroom-btn" onClick={enterChatRoom}>
        채팅방 입장하기
      </ChatBtn>
    </section>
  );
}
