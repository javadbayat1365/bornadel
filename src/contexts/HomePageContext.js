import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPut, fetchDelete, fetchPost } from '../config/Utils'
import Apis from '../constants/Api'

const HomePageContext = createContext({
    articles: [],
    setArticles: () => { },
    bestAcademy: [],
    setBestAcademy: () => { },
    news: [],
    setNews: () => { },
    underLuneScale: [],
})

export { HomePageContext }


export default function HomePageContextProvider({ children }) {
    const [articles, setArticles] = useState("")
    const [bestAcademy, setBestAcademy] = useState([])
    const [news, setNews] = useState([])
    const [recentView, setRecentView] = useState([])

    localStorage.setItem("ClassRoomIDList", "1")
    let ClassRoomIDList = localStorage.getItem("ClassRoomIDList")

    useEffect(() => {
        fetchPost(Apis.GET_GetAllLastViewHome + "?ClassRoomIDList=" + ClassRoomIDList).then(({ responseJSON, status }) => {
            setRecentView(responseJSON.data)
        })
        fetchPost(Apis.GET_GetAllHomeTop).then(({ responseJSON, status }) => {
            setBestAcademy(responseJSON.data);
        })
        fetchPost(Apis.GET_GetARTICLEHOMEPAG).then(({ responseJSON, status }) => {
            setArticles(responseJSON.data);
        })
        fetchPost(Apis.GET_GetAllNEWHOMEPAFE).then(({ responseJSON, status }) => {
            setNews(responseJSON.data);
        })
    }, [])

    return (
        <HomePageContext.Provider value={{
            bestAcademy, recentView, news, articles,
        }} >
            {children}
        </HomePageContext.Provider>
    )
}




