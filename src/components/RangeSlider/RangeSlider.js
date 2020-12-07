// import React, { useEffect, useState } from 'react'
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';


// const AirbnbSlider = withStyles({
//     root: {
//         color: '#2fc98e',
//         height: 3,
//         padding: '13px 0',
//         width: 170,
//         marginLeft: 13,
//     },
//     thumb: {
//         height: 14,
//         width: 14,
//         backgroundColor: '#fff',
//         border: '1px solid currentColor',
//         marginTop: -6,
//         marginLeft: -13,
//         boxShadow: '#ebebeb 0 2px 2px',
//         '&:focus, &:hover, &$active': {
//             boxShadow: '#ccc 0 2px 3px 1px',
//         },
//         '& .bar': {
//             // display: inline-block !important;
//             height: 5,
//             width: 1,
//             backgroundColor: 'currentColor',
//             marginLeft: 1,
//             marginRight: 1,
//         },
//     },
//     active: {},
//     track: {
//         height: 3,
//     },
//     rail: {
//         color: '#d8d8d8',
//         opacity: 1,
//         height: 3,
//     },
// })(Slider);

// function AirbnbThumbComponent(props) {

//     return (
//         <>
//             <span {...props}>
//                 <span className="bar" />
//                 <span className="bar" />
//                 <span className="bar" />
//             </span>
//             <span >
//                 <span className="bar" />
//                 <span className="bar" />
//                 <span className="bar" />
//             </span>
//         </>
//     );
// }



// export default function RangeSlider({ priceStart,setPriceStart,priceEnd,setPriceEnd }) {
//     return (
//         <>
//             <AirbnbSlider
//                 ThumbComponent={AirbnbThumbComponent}
//                 getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
//                 defaultValue={[100, 0]}
//                 // value={[priceEnd,priceStart]}
//                 onChangeCommitted={(e,value) => {
//                     setPriceStart(value[0])
//                     setPriceEnd(value[1])

//                 }}

//             />
//         </>
//     )
// }
import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import useStyles from '../../styles'
import { CoursesContext } from '../../contexts/CoursesContext'
import { Grid } from '@material-ui/core'

export default function RangeSlider() {
    let { minPrice, setMinPrice, maxPrice, setMaxPrice,minValue,maxValue } = useContext(CoursesContext)
    const classes = useStyles()
    const [minPrice1, setMinPrice1] = useState(0)
    const [maxPrice1, setMaxPrice1] = useState(100)
    let miP = minValue
    let maP = maxValue
    
    useEffect(() => {
        
        if(minPrice1===0){
            setMinPrice(miP)  
            return
        }
        setMinPrice(Math.ceil(((maP - miP) / 100) * minPrice1))
    }, [minPrice1])
    useEffect(() => {
        
        if(maxPrice1===100){
            setMaxPrice(maP)
            return
        }
        setMaxPrice(Math.ceil(((maP - miP) / 100) * maxPrice1))
    }, [maxPrice1])
    useEffect(() => {
        let inputLeft = document.getElementById("input-left");
        let inputRight = document.getElementById("input-right");

        let thumbLeft = document.querySelector(".slider > .thumb.left");
        let thumbRight = document.querySelector(".slider > .thumb.right");
        let range = document.querySelector(".slider > .range");

        function setLeftValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(parseInt(_this.value), parseInt(inputLeft.value) - 20);

            setMinPrice1(((_this.value - min) / (max - min)) * 100)


        }
        setLeftValue();

        function setRightValue() {
            // console.log(e.target);
            var _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputRight.value) + 20);

            setMaxPrice1(((_this.value - min) / (max - min)) * 100)
        }
        setRightValue();



        inputRight.addEventListener("input", () => {
            setLeftValue()
        });
        inputLeft.addEventListener("input", () => {
            setRightValue()
        });

        inputLeft.addEventListener("mouseover", function () {
            thumbRight.classList.add("hover");
        });
        inputLeft.addEventListener("mouseout", function () {
            thumbRight.classList.remove("hover");
        });
        inputLeft.addEventListener("mousedown", function () {
            thumbRight.classList.add("active");
        });
        inputLeft.addEventListener("mouseup", function () {
            thumbRight.classList.remove("active");
        });

        inputRight.addEventListener("mouseover", function () {
            thumbLeft.classList.add("hover");
        });
        inputRight.addEventListener("mouseout", function () {
            thumbLeft.classList.remove("hover");
        });
        inputRight.addEventListener("mousedown", function () {
            thumbLeft.classList.add("active");
        });
        inputRight.addEventListener("mouseup", function () {
            thumbLeft.classList.remove("active");
        });
    }, [])
    useEffect(() => {
        let range = document.querySelector(".slider > .range");
        let thumbRight = document.querySelector(".slider > .thumb.right");

        thumbRight.style.right = (maxPrice1) + "%";
        range.style.left = (100 - maxPrice1) + "%";

    }, [maxPrice1])
    useEffect(() => {
        let range = document.querySelector(".slider > .range");
        let thumbLeft = document.querySelector(".slider > .thumb.left");

        thumbLeft.style.left = (100 - minPrice1) + "%";
        range.style.right = (minPrice1) + "%";

    }, [minPrice1])





    function separateNum(value, input) {
        var nStr = value + '';
        nStr = nStr.replace(/\,/g, "");
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        if (input !== undefined) {

            input.value = x1 + x2;
        } else {
            return x1 + x2;
        }
    }



    return (
        <div>

            <div class="middle" dir="rtl">
                <div class="multi-range-slider">
                    <input type="range" id="input-right" min="1" max="100" value={minPrice1} />
                    <input type="range" id="input-left" min="1" max="100" value={maxPrice1} />

                    <div class="slider">
                        <div class="track"></div>
                        <div class="range"></div>
                        <div class="thumb right"></div>
                        <div class="thumb left"></div>
                    </div>
                </div>
            </div>
            <span className={classes.startHoursFilterText}> از </span>
            <span className={classes.priceFilterSearch}>{separateNum(minPrice)}</span>
            <span className={classes.startHoursFilterText}>تا  </span>
            <span className={classes.priceFilterSearch}>{separateNum(maxPrice)}</span>
            <span className={classes.startHoursFilterText}>تومان  </span>
        </div>
    )
}
