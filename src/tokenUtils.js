import axios from 'axios';

// 토큰을 저장할 때 사용하는 key
const TOKEN_KEY = "token";

// axios 인스턴스 생성
const instance = axios.create({
  baseURL:'http://localhost:8080/',
  timeout:5000,
  headers:{
    'Content-Type' : 'application/json'
  }
});


export const setToken = () =>{
  const settoken = 'jwt.token.secret';
  localStorage.setItem(TOKEN_KEY, settoken);
}

// 로컬 스토리지에서 토큰을 가져오는 함수
export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
  // const token = localStorage.setItem(TOKEN_KEY);  찬영추천 근데 이걸하면 로그인이 안됌 전체수정필요할듯

  //
  // if (token === null) {
  //   console.error(" 토큰값은null, 로그인성공으로간주");
  //   // navigate(`/api/v1/loginAfter`);
  //   return null;
  // }
  //
  // try {
  //   const parsedToken = JSON.parse(token);
  //   const expiresAt = new Date(parsedToken.expiresAt);
  //
  //   if (expiresAt < new Date()) {
  //     localStorage.removeItem(TOKEN_KEY);
  //     console.log('토큰유효기간!')
  //     // navigate('/api/v1/main');
  //
  //     return null;
  //   }
  //
  //   return parsedToken.value;
  // } catch (err) {
  //   localStorage.removeItem("accessToken");
  //   console.log('error가 발생했어어ㅓㅇㄹ 토큰유틸에서')
  //   return null;
  // }
};


// 로컬 스토리지에 토큰을 저장하는 함수
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// 로컬 스토리지에서 토큰을 삭제하는 함수
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// 토큰 값을 가져오는 함수
// const getAxiosInstance = () => {
//   return localStorage.getItem('accessToken');
// }

// axios 인스턴스를 생성하는 함수
const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout:5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // 인터셉터를 사용하여 Authorization 헤더에 토큰을 담아서 보내는 로직을 추가
  instance.interceptors.request.use((config) => {
    const secretKey = localStorage.getItem(TOKEN_KEY);
    if (secretKey) {
      config.headers.Authorization = `Bearer ${secretKey}`;
    }
    return config;
  });

  return instance;
}

export const createPost = async (post) => {
  try {
  const response = await instance.post('/api/v1/boards', post);
  return response.data;
  } catch (err) {
  throw err;
  }
  };
  
  export const getPost = async (boardId) => {
  try {
  const response = await instance.get(`/api/v1/boards/${boardId}`);
  return response.data;
  } catch (err) {
  throw err;
  }
  };
  
  // export const getPosts = async () => {
  // try {
  // const response = await instance.get('/api/v1/posts');
  // return response.data;
  // } catch (err) {
  // throw err;
  // }
  // };
  
  // export const deletePost = async (postId) => {
  // try {
  // const response = await instance.delete(/api/v1/posts/${postId});
  // return response.data;
  // } catch (err) {
  // throw err;
  // }
  // };
  
  // export const updatePost = async (postId, post) => {
  // try {
  // const response = await instance.put(/api/v1/posts/${postId}, post);
  // return response.data;
  // } catch (err) {
  // throw err;
  // }
  // };