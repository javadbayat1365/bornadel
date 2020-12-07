import React, { useContext, useEffect, useState } from 'react'
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent'
import useStyles from '../../styles'
import { fetchPost } from '../../config/Utils'
import { Grid, Typography } from '@material-ui/core'
import LevelFilter from '../../components/Filters/LevelFilter'
import GroupFilter from '../../components/Filters/GroupFilter'
import TeacherFilter from '../../components/Filters/TeacherFilter'
import StartHoursFilter from '../../components/Filters/StartHoursFilter'
import PriceFilter from '../../components/Filters/PriceFilter'
import AcademyFilter from '../../components/Filters/AcademyFilter'
import ReadyClassesSwitch from '../../components/Filters/SwitchReadyClasses'
import DegreeSwith from '../../components/Filters/SwitchDegree'
import LeftHeaderFilter from '../../components/Filters/LeftHeaderFilter/LeftHeaderFilter'
import Button from '@material-ui/core/Button';
import MyPagination from '../../components/Pagination/pagination'
import { CoursesContext } from '../../contexts/CoursesContext'
import { useParams } from "react-router-dom";
import Apis from '../../constants/Api'


export default function Courses() {
    const classes = useStyles()
    const [widthAllcourses, setWidthAllcourses] = useState(0)
    const [fixed, setFixed] = useState(false)
    let { coursesData, setCoursesData, page, itemPerPage, minPrice, maxPrice, minTime,
        maxTime, selectedTeacher, selectedAcademy, checkedDegreeSwith, sortType
    ,checkedReadyClasses,level } = useContext(CoursesContext)

    let { id, title, type } = useParams()

    useEffect(() => {
        let CoursesContainer = document.querySelector('#CoursesContainer')
        setWidthAllcourses(CoursesContainer.offsetWidth)
        let FilterConteiner = document.querySelector('#CoursesContainerRight')
        let filterButtun = document.querySelector('#filterButtun')
        let CoursesContainerLeft = document.querySelector('#CoursesContainerLeft')
        window.addEventListener('scroll', (e) => {

            if (window.pageYOffset + window.innerHeight - 110 === CoursesContainerLeft.offsetHeight || window.pageYOffset + window.innerHeight - 110 > CoursesContainerLeft.offsetHeight) {
                setFixed(false)
                return
            }
            if (window.pageYOffset + window.innerHeight - 110 === 1496 || window.pageYOffset + window.innerHeight - 110 > 1496) {
                // setFixed(true)
                // FilterConteiner.style.width = `${window.innerWidth - CoursesContainerLeft.offsetWidth - 75}px`
                return
            }
        })
    }, [])

    useEffect(() => {
        let body = {
            "record_ID": id,
            "record_Name": title && title.length > 0 ? title : "",
            "record_Type": type && type.length > 0 ? type : 0,
            "sort_Type": sortType,
            "educationSubject_ID": 0,
            "teacher_ID_List": "",
            "academy_ID_List": "",
            "classRoomLevel_ID_List": "",
            "startTime_From": "",
            "startTime_To": "",
            "price_From": 0,
            "price_To": 0,
            "haveDocument": false,
            "isActive": true
        }
        fetchPost(Apis.Get_GetAllSearchClassRoomList, body).then(({ responseJSON, status }) => {
            setCoursesData(responseJSON.data)
        })
    }, [id, sortType])


    let ApplyFilter = () => {
        let body = {
            "record_ID": id,
            "record_Name": title && title.length > 0 ? title : "",
            "record_Type": type && type.length > 0 ? type : 0,
            "sort_Type": sortType,
            "educationSubject_ID": 0,
            "teacher_ID_List": selectedTeacher.toString().replaceAll(",", ";"),
            "academy_ID_List": selectedAcademy.toString().replaceAll(",", ";"),
            "classRoomLevel_ID_List": level.toString().replaceAll(",", ";"),
            "startTime_From": minTime,
            "startTime_To": maxTime,
            "price_From": minPrice,
            "price_To": maxPrice,
            "haveDocument": checkedDegreeSwith,
            "isActive": checkedReadyClasses
        }
        fetchPost(Apis.Get_GetAllSearchClassRoomList, body).then(({ responseJSON, status }) => {
            setCoursesData(responseJSON.data)
        })
    }
    return (
        <Grid container className={classes.CoursesContainer}>
            <Grid item container direction="column" className={classes.CoursesContainerRight}>
                <Grid item container direction="column" id="CoursesContainerRight"
                    style={{ position: fixed ? "fixed" : "static", top: "auto", bottom: 15 }}>
                    <GroupFilter />
                    <LevelFilter />
                    <TeacherFilter />
                    <StartHoursFilter />
                    <PriceFilter />
                    <AcademyFilter />
                    <ReadyClassesSwitch />
                    <DegreeSwith />
                    <Grid item container justify="center" className={classes.filterButtunContainer}>
                        <Button variant="contained" color="primary"
                            id="filterButtun"
                            className={classes.filterButtun} onClick={() => ApplyFilter()}
                        >
                            اعمال فیلتر ها
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item direction="column" id="CoursesContainerLeft" className={classes.CoursesContainerLeft} >
                <Grid item container id="CoursesContainer" className={classes.CoursesContainerLeftHeader} >
                    <LeftHeaderFilter />
                </Grid>
                <Grid item container className={classes.coursesComponentDetail}>
                    {
                        coursesData && coursesData.length > 0 ?
                            coursesData.slice((page - 1) * itemPerPage, (page - 1) * itemPerPage + itemPerPage).map((data, index) => {
                                return (
                                    <Grid item
                                        alignItems="center" className={classes.coursesComponentDetailItem}
                                        style={{
                                            marginLeft:
                                                widthAllcourses === 1025 && (index + 1) % 5 === 0 ? 0 :
                                                    widthAllcourses === 1025 && (index + 1) % 5 !== 0 ? 15 :
                                                        window.innerWidth > 1360 && (index + 1) % 5 === 0 ? 0 :
                                                            window.innerWidth > 1360 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (900)) / 4) / 2 :
                                                                window.innerWidth > 1300 && window.innerWidth < 1361 && (index + 1) % 5 === 0 ? 0 :
                                                                    window.innerWidth > 1300 && window.innerWidth < 1361 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (5 * 180)) / 4) / 2 :
                                                                        window.innerWidth > 1264 && window.innerWidth < 1301 && (index + 1) % 5 === 0 ? 0 :
                                                                            window.innerWidth > 1264 && window.innerWidth < 1301 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (5 * 180)) / 4) / 2 :
                                                                                window.innerWidth > 1020 && window.innerWidth < 1265 && (index + 1) % 4 === 0 ? 0 :
                                                                                    window.innerWidth > 1020 && window.innerWidth < 1265 && (index + 1) % 4 !== 0 ? (((widthAllcourses) - (4 * 166)) / 3) / 2 :
                                                                                        window.innerWidth > 820 && window.innerWidth < 1021 && (index + 1) % 3 === 0 ? 0 :
                                                                                            window.innerWidth > 820 && window.innerWidth < 1021 && (index + 1) % 3 !== 0 ? (((widthAllcourses) - (3 * 166)) / 2) / 2 :
                                                                                                window.innerWidth > 600 && window.innerWidth < 821 && (index + 1) % 2 === 0 ? 0 :
                                                                                                    (((widthAllcourses) - (2 * 166)) / 1) / 2


                                            ,

                                            marginRight:
                                                widthAllcourses === 1025 && index % 5 === 0 ? 0 :
                                                    widthAllcourses === 1025 && index % 5 !== 0 ? 16 :
                                                        window.innerWidth > 1360 && index % 5 === 0 ? 0 :
                                                            window.innerWidth > 1360 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (900)) / 4) / 2) :
                                                                window.innerWidth > 1300 && window.innerWidth < 1361 && index % 5 === 0 ? 0 :
                                                                    window.innerWidth > 1300 && window.innerWidth < 1361 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (5 * 180)) / 4) / 2) :
                                                                        window.innerWidth > 1264 && window.innerWidth < 1301 && index % 5 === 0 ? 0 :
                                                                            window.innerWidth > 1254 && window.innerWidth < 1301 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (5 * 180)) / 4) / 2) :
                                                                                window.innerWidth > 1020 && window.innerWidth < 1265 && index % 4 === 0 ? 0 :
                                                                                    window.innerWidth > 1020 && window.innerWidth < 1265 && index % 4 !== 0 ? ((((widthAllcourses) - (4 * 166)) / 3) / 2) :
                                                                                        window.innerWidth > 820 && window.innerWidth < 1021 && index % 3 === 0 ? 0 :
                                                                                            window.innerWidth > 820 && window.innerWidth < 1021 && index % 3 !== 0 ? (((widthAllcourses) - (3 * 166)) / 2) / 2 :
                                                                                                window.innerWidth > 600 && window.innerWidth < 821 && index % 2 === 0 ? 0 :
                                                                                                    (((widthAllcourses) - (2 * 166)) / 1) / 2



                                        }}
                                    >
                                        <CoursesComponent
                                            data={data}
                                            id={data.classRoom_ID}
                                            teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                            title={data.classRoom_Subject} date={data.classRoom_DateTime}
                                            photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                            price={data.classRoom_Price}
                                            LastPrice={data.last_Price}
                                            Discoun={data.classRoom_Discount}
                                            minWidth={180}
                                            maxWidth={180}
                                            dir="rtl"
                                            teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                            educationSubject={data.educationSubject_Name}
                                        />
                                    </Grid>
                                )
                            })
                            : null
                    }
                    {coursesData && coursesData.length > 0 ?
                        <Grid item container justify="center" alignItems="center" className={classes.CoursesContainerLeftHeader} >
                            <MyPagination />
                        </Grid>
                        : null
                    }
                </Grid>
            </Grid>
        </Grid >
    )
}
