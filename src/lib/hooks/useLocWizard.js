import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import $ from 'jquery'

import {  scrollToTop, onCloseHamburger } from "../utils";

const useLocWizard = () => {
  const {pathname} = useLocation();
  
  
    $(document).on('scroll', function(){
      if(pathname === "/test") {
        $("nav").removeClass("non-top");
      } else if ($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $('.top-btn').addClass( 'active' );
      } else {
        $("nav").removeClass("non-top");
        $('.top-btn').removeClass( 'active' );
      }
    })
  

  

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])


}

export default useLocWizard;