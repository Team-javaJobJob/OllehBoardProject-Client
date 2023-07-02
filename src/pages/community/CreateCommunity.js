import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCommunity } from "../../redux/slice/communitySlice";
import axios from "axios";
import { getToken } from "../../tokenUtils";
import {
  Form,
  FormSection,
  Input,
  Label,
  SubmitButton,
  Title,
} from "../../components/Community/CreateCommunityStyle";

export default function CreateCommunity() {
  const [image, setImage] = useState(null);
  const [communityCreateRequest, setCommunityCreateRequest] = useState({
    region: "",
    interest: "",
    info: "",
    communityName: "",
    keywords: [],
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "keywords") {
      const keywordsArray = value.split(",").map((keyword) => keyword.trim());
      setCommunityCreateRequest((prev) => ({ ...prev, [name]: keywordsArray }));
    } else {
      setCommunityCreateRequest((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 수정된 부분
    const formData = new FormData();
    formData.append(
      "communityCreateRequest",
      new Blob([JSON.stringify(communityCreateRequest)], {
        type: "application/json",
      })
    );
    formData.append("file", image);
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };

    try {
      const response = await axios.post(
        "/api/v1/communities",
        formData,
        config
      );
      const communityData = { ...response.data };
      //dispatch(createCommunity(communityData));
      setImage(null);
      setCommunityCreateRequest({
        region: "",
        interest: "",
        info: "",
        communityName: "",
        keywords: [],
      });
      alert("저장되었습니다");
    } catch (error) {
      console.log("Error details:", error);
      console.error(error);
    }
  };

  return (
    <FormSection>
      <Title>커뮤니티 생성하기</Title>
      <Form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <Label htmlFor="image">
          커뮤니티 이미지 (이미지 파일만 업로드 가능합니다.)
        </Label>
        <Input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          multiple={true}
          onChange={handleImageChange}
        />

        <Label htmlFor="communityName">커뮤니티 이름</Label>
        <Input
          type="text"
          id="communityName"
          name="communityName"
          value={communityCreateRequest.communityName}
          placeholder="커뮤니티 이름"
          onChange={handleChange}
          required
        />
        <Label htmlFor="region">지역</Label>
        <Input
          type="text"
          id="region"
          name="region"
          value={communityCreateRequest.region}
          placeholder="ex) 서울시 강남구 역삼동"
          onChange={handleChange}
          required
        />
        <Label htmlFor="interest">관심분야</Label>
        <Input
          type="text"
          id="interest"
          name="interest"
          value={communityCreateRequest.interest}
          placeholder="관심"
          onChange={handleChange}
          required
        />
        <Label htmlFor="info">세부내용</Label>
        <Input
          type="text"
          id="info"
          name="info"
          value={communityCreateRequest.info}
          placeholder="세부내용"
          onChange={handleChange}
          required
        />
        <Label htmlFor="keywords">키워드</Label>
        <Input
          type="text"
          id="keywords"
          name="keywords"
          value={communityCreateRequest.keywords}
          placeholder="키워드"
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">생성하기</SubmitButton>
      </Form>
    </FormSection>
  );
}
