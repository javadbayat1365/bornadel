import React, { useEffect } from 'react'
import './usersStatisticCircle.Style.css'


export default function CirleStatistic() {



  return (
    <div style={{ width: "100%", height: 100 }}>
      <div className="CirleContainer">
        <div className="InsideCirleContainer">
          <div className="CircleRight"><div className="InsideCircle" >113544</div></div>
          <div className="beatwenCircles" style={{ right: 72 }}>
            <div className="beatweenCirclesClipPathTop">
            </div>
            <div className="beatweenCirclesClipPathBottom">
            <div style={{width:14,height:77,backgroundColor:"#f5f5f5",borderRadius:"50%",transform:"rotate(50deg)",position:"absolute",left:-1,top:-2}}></div>

            </div>
          </div>
          <div className="CircleRight"><div className="InsideCircle" >113544</div></div>
          <div className="beatwenCircles" style={{ right: 242 }}>
            <div className="beatweenCirclesClipPathTop">
            </div>
            <div className="beatweenCirclesClipPathBottom">
            <div style={{width:14,height:77,backgroundColor:"#f5f5f5",borderRadius:"50%",transform:"rotate(50deg)",position:"absolute",left:-1,top:-2}}></div>

            </div>
          </div>
          <div className="CircleRight"><div className="InsideCircle" >113544</div></div>
          <div className="beatwenCircles" style={{ right: 412 }}>
            <div className="beatweenCirclesClipPathTop">
            </div>
            <div className="beatweenCirclesClipPathBottom">
              <div style={{width:14,height:77,backgroundColor:"#f5f5f5",borderRadius:"50%",transform:"rotate(50deg)",position:"absolute",left:-1,top:-2}}></div>
            </div>
          </div>
          <div className="CircleRight" style={{marginLeft:0}}><div className="InsideCircle" >113544</div></div>
        </div>
      </div>
    </div>
  );

}