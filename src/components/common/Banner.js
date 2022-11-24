import { useNavigate } from 'react-router-dom'
import logoRowImg from './../../assets/images/logo_row_white.png'
import { useCookies } from "react-cookie";
import { toastMaker } from '../../lib/utils';
const Banner = ({setIsScrollTo}) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
      <header className="header-door">
        <div className="overlay">
          <h1 className="subtitle">우리가 만드는 공유책장</h1>
          <img className="w-150 mb-20" src={logoRowImg} alt="img" />
          <button
            className='primary-btn btn-big'
            type="button"
            onClick={() => {
              if (!cookies.userData) {
                toastMaker.error("로그인이 필요합니다.")
                navigate('/login');
                return;
              }
              navigate("/store")
            }}
          >
              책방 입장하기
          </button>
          <button
            className='transparent-btn btn-big mt-10'
            type="button"
            onClick={()=>{setIsScrollTo(true)}}
          >
            공유책방 소개
          </button>
          <div className="shape">
            <svg viewBox="0 0 1500 200">
              <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
            </svg>
          </div>  
        </div>  
        
        <div className="mouse-icon" >
          <div className="wheel">
          </div>
        </div>
    </header>
    </>
  )
}

export default Banner;