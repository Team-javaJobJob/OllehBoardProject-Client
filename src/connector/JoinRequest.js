import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/members';

const JoinRequest = {
  join: (member) => {
    return axios.post(`${API_URL}/join`, member)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default JoinRequest;


//위 코드에서는 join 함수가 member 객체를 인자로 받아 서버에 POST 요청을 보내는 
//역할을 합니다. 응답받은 데이터는 then 구문에서 처리되며, 에러 발생 시 
//catch 구문에서 처리됩니다.