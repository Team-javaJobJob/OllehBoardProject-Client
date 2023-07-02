import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import Home from "./pages/Home";
import SignUpPage from "./pages/users/SignUpPage";
import LoginPage from "./pages/users/LoginPage";
import BoardCreatePage from "./pages/boards/BoardCreatePage";
import BoardList from "./pages/boards/BoardListPage";
import BoardDetailPage from "./pages/boards/BoardDetailPage";
import BoardUpdatePage from "./pages/boards/BoardUpdatePage";
import CreateCommunity from "./pages/community/CreateCommunity";
import CommunityList from "./pages/community/CommunityList";
import CommunityDetail from "./pages/community/CommunityDetail";
import ChatRoom from "./pages/chatroom/ChatRoom1";
import MyPage from "./pages/mypage/MyPage";
import MyPageEdit from "./pages/mypage/MyPageEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/api/v1/members/join", element: <SignUpPage /> },
      { path: "/api/v1/members/login", element: <LoginPage /> },
      { path: "/api/v1/post", element: <BoardCreatePage /> },
      { path: "/api/v1/post/list", element: <BoardList /> },
      { path: "/api/v1/post/:postId", element: <BoardDetailPage /> },
      { path: "/api/v1/post/update", element: <BoardUpdatePage /> },
      { path: "/api/v1/community", element: <CreateCommunity /> },
      { path: "/api/v1/community/list", element: <CommunityList /> },
      { path: "/api/v1/community/:communityId", element: <CommunityDetail /> },
      { path: "/api/v1/myPage", element: <MyPage /> },
      { path: "/api/v1/myPage/update", element: <MyPageEdit /> },
      { path: "/api/v1/chat", element: <ChatRoom /> },
      { path: "/community/:communityId/chat-room", element: <ChatRoom /> },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
