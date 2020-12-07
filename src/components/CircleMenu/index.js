import React from 'react'
import { fetchPost } from '../../config/Utils'

export default function CircleMenu(titleArraynew, idArraynew) {

    // const history = useHistory()


    document.FillMenuContent = function (titleArray, idArray, afterDownCallBack) {

        fetchPost("http://api.bornadel.com/api/v1/EducationSubject/GetAllCircleMainMenuHomePage").then(({ responseJSON, status }) => {
            if (status === 200) {
                titleArray = (responseJSON.data ? responseJSON.data.map((item, index) => {
                    return ([item.namE_0, item.namE_1, item.namE_2, item.namE_3, item.namE_4, item.namE_5, item.namE_6, item.namE_7, item.namE_8])
                }) : null)
                fetchPost("http://api.bornadel.com/api/v1/EducationSubject/GetAllCircleSubMenuHomePage").then(({ responseJSON, status }) => {
                    idArray = (responseJSON.data ? responseJSON.data.map((item, index) => {
                        return ([0, item.iD_0, item.iD_1, item.iD_2, item.iD_3, item.iD_4, item.iD_5, item.iD_6, item.iD_7, item.iD_8])
                    }) : null)
                    afterDownCallBack(titleArray, idArray)
                })
            }
        })

        var wm = document.querySelector('.circleMenu').offsetWidth;
        var hm = document.querySelector('.circleMenu').offsetHeight;
        var wb = document.querySelector('.circleMenu').parentNode.offsetWidth;
        var hb = document.querySelector('.circleMenu').parentNode.offsetHeight;

        document.querySelector('.circleMenu').style.left = (1. * (wb - wm) / 2.) + 'px';
        document.querySelector('.circleMenu').style.top = (1. * (hb - hm) / 2.) + 'px';

    };

    document.subMenuClick = function (menuIden) {
        // history.push(`/CourseDetail/${menuIden}`)
    };

    const script = document.createElement("script");
    script.src = "/center_menu/menu.js";
    script.async = true;
    document.body.appendChild(script);





    script.onload = function () {

        window.eval(`setTimeout(function(){

          const menustyle = document.createElement("div"); 
          menustyle.innerHTML = '<style>'+initLiveStyle()+'</style>';
          document.body.appendChild(menustyle);
          document.menuIdentity = [];
          document.FillMenuContent(menuText, document.menuIdentity , function(mt,mi){
            
            menuText = mt;
            document.menuIdentity = mi;

            document.querySelector('.circleMenu').innerHTML = initCircleMenuContent(); 
          
            window.eval(' var  CM = createCM();var wind= createWind();var dyOut = createDyOut();actCircleMenuContent();'+
            'CM.defineOnClick(  function(m){   for(var i=0;i<menuText.length;i++){for(var j=1; j<menuText.length;j++){if(menuText[i][j] == m) '+
            'document.subMenuClick( document.menuIdentity[i][j] )}} } );');

          });

         },100) `);
    };



    return (
        <div dir='ltr' onClick={(event) => { event.stopPropagation() }} className="ab circleMenu  w-50 h-20   f-center ">

        </div>
    )
}

