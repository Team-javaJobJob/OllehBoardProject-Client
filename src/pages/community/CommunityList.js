import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CommunityLayout,
  Container,
  Image,
  ImageList,
  List,
  Nickname,
  OllehCtn,
  Region,
  StyledHeader,
} from "../../components/Community/CommunityListStyle";
import Korean from "react-timeago/lib/language-strings/ko";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import TimeAgo from "react-timeago";

import CommunitySearching from "../../components/Community/CommunitySearching";
import { getCommunity } from "../../redux/slice/communitySlice";
import Keyword from "../../components/Community/KeyWord";
export default function CommunityList() {
  const dispatch = useDispatch();
  const communityList = useSelector((state) => state.community);
  const [sortedCommunities, setSortedCommunities] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setSortedCommunities(communityList);
  }, [communityList]);

  useEffect(() => {
    dispatch(getCommunity());
  }, [dispatch]);

  //createdAt 한국어
  const formatter = buildFormatter(Korean);

  return (
    <CommunityLayout>
      <StyledHeader>Olleh 커뮤니티💜</StyledHeader>
      <Container>
        <Keyword />
        <CommunitySearching
          communityList={communityList}
          setSortedCommunities={setSortedCommunities}
        />
        <List>
          {sortedCommunities.map((community) => (
            <ImageList
              key={community.id}
              onClick={() => {
                navigate(`/api/v1/community/${community.id}`, {
                  state: { community },
                });
              }}
            >
              {community.image && (
                <Image
                  src={`${require("../../assets/" + community.image)}`}
                  alt={community.imageDTO?.alt || "Community"}
                />
              )}
              <Nickname>작성자: {community.memberNickName}</Nickname>
              <h1>커뮤니티 이름: {community.communityName}</h1>
              <OllehCtn>👍 {community.ollehCount}</OllehCtn>
              <Region> {community.region}</Region>
              <TimeAgo date={community.createdAt} formatter={formatter} />
            </ImageList>
          ))}
        </List>
      </Container>
    </CommunityLayout>
  );
}
