
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const tokenState = atom({
  key: 'tokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const usernameState = atom({
  key: 'usernameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

//GlobalState는 변수이다
//tokenState는 Recoil atom으로서 토큰 값을 관리하는 역할, 초기값은 빈 문자열('')로 설정
//이렇게 해주면 LoginForm의  const [token, setToken] = useRecoilState(tokenState)'에서 
// tokenState가  default로 담겨있다가 토큰이 들어오면 token이라는 state에 담기게 된다.