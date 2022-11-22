/*global kakao */
import {useEffect} from "react";
const { kakao } = window;

const KakaoMap = ({
  result,
  setResult,
  onClickRegisterBtn
}) => {

  useEffect(()=>{
    
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(result.latitude, result.longitude),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(result.latitude, result.longitude); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <>
    <div className="container w-100p">
    <div className=" desktop-box">

      <span className="fc-main fs-32 fw-bold">
        Step 5
      </span>
      <p className="fc-dark fs-28" >
        위치를 확인해주세요
      </p>
      <div id="map" ></div>

      <button
        type="button"
        className="mtb-10 primary-btn btn-big w-100p"
        onClick={()=>{
          onClickRegisterBtn();
        }}
      >
        등록하기
      </button>
    </div>

    </div>
    </>
  );
}

export default KakaoMap;