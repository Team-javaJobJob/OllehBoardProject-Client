import React from "react";
import CommunityList from "./community/CommunityList";
import CarouselMain from "../components/main/CarouselMain";

function Home() {
  return (
    <div>
      <CarouselMain />
      <CommunityList />
    </div>
  );
}

export default Home;
