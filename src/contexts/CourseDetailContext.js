import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPost } from '../config/Utils'
import Apis from '../constants/Api'

const CourseDetailContext = createContext({
    articles: [],
    setArticles: () => { },
    bestAcademy: [],
    setBestAcademy: () => { },
    news: [],
    setNews: () => { },
    underLuneScale: [],
})

export { CourseDetailContext }


export default function CourseDetailContextProvider({ children }) {
    const [articles, setArticles] = useState("")
    const [bestAcademy, setBestAcademy] = useState([])
    const [news, setNews] = useState([])
    const [recentView, setRecentView] = useState([])
    const [courseDetailData, setCourseDetailData] = useState([])

    localStorage.setItem("ClassRoomIDList", "1")
    let ClassRoomIDList = localStorage.getItem("ClassRoomIDList")

    useEffect(() => {
       
       
    }, [])
    return (
        <CourseDetailContext.Provider value={{
            bestAcademy, recentView, news, articles,courseDetailData, setCourseDetailData
        }} >
            {children}
        </CourseDetailContext.Provider>
    )
}




