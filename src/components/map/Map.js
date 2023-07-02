import React, { useEffect, useRef } from "react";

function Map({ region }) {
  // 지도 element를 저장하는 ref 생성
  const mapElement = useRef(null);

  useEffect(() => {
    // naver.maps 라이브러리 및 region 값, element 확인
    const { naver } = window;
    if (!naver || !region || !mapElement.current) return;

    // 지도의 중심 좌표 설정
    const location = new naver.maps.LatLng(37.5656, 126.9769);

    // 지도 옵션 설정
    const mapOptions = {
      center: location,
      zoom: 10,
      mapTypeControl: true,
    };

    // 지도 생성
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 각 region에 대해 좌표를 검색, 해당 좌표에 마커를 추가하는 함수
    const createAndDisplayMarker = (region) => {
      naver.maps.Service.geocode({ query: region }, (status, response) => {
        if (status !== naver.maps.Service.Status.OK) {
          console.log("Geocoding API 요청 실패");
          return;
        }

        // 검색된 주소 정보를 가져오기(위도, 경도)
        const result = response.v2.addresses[0];
        //해당 위치에 지도 위에 마커를 추가
        const coord = new naver.maps.LatLng(result.y, result.x);

        new naver.maps.Marker({
          position: coord,
          map,
        });
      });
    };

    createAndDisplayMarker(region);
  }, [region]);

  return <div ref={mapElement} style={{ width: "100%", height: "400px" }} />;
}

export default Map;
