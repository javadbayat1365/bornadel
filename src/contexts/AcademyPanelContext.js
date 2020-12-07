import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPut, fetchDelete, fetchPost } from '../config/Utils'
import Apis from '../constants/Api'

const AcademyPanelContext = createContext({
    articles: [],
    setArticles: () => { },
    bestAcademy: [],
    setBestAcademy: () => { },
    news: [],
    setNews: () => { },
    underLuneScale: [],
})

export { AcademyPanelContext }


export default function AcademyPanelContextProvider({ children }) {
    const [articles, setArticles] = useState("")
    const [bestAcademy, setBestAcademy] = useState([])
    const [news, setNews] = useState([])
    const [recentView, setRecentView] = useState([])
    const [pageTypeTeacherList, setPageTypeTeacherList] = useState(3)
    const [selectedTeachers, setSelectedTeachers] = useState([])

    localStorage.setItem("ClassRoomIDList", "1")
    let ClassRoomIDList = localStorage.getItem("ClassRoomIDList")

    useEffect(() => {

    }, [])
    const toggleSelectedTeacher = (teacher, type) => {
        if (type) {
            setSelectedTeachers(selectedTeachers.filter((su) => {
                if (su.id == teacher.id) {
                    return false
                }
                return true
            }))
        } else {
            setSelectedTeachers([teacher])
            // setSelectedUsers([...selectedUsers, user])

        }
    }
    let ApproveTeacher = () => {

    }
    return (
        <AcademyPanelContext.Provider value={{
            bestAcademy, recentView, news, articles, pageTypeTeacherList, setPageTypeTeacherList,
            ApproveTeacher, selectedTeachers, setSelectedTeachers, toggleSelectedTeacher,

        }} >
            {children}
        </AcademyPanelContext.Provider>
    )
}




