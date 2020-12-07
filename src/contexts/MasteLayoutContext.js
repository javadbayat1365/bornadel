import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPost } from '../config/Utils'
import Apis from '../constants/Api'


const MasteLayoutContext = createContext({
    element: [],
    setElement: () => { },
    linwWidth: [],
    setLinewidth: () => { },
    underLinePlace: [],
    setUnderLinePlace: () => { },
    underLuneScale: [],
    setUnderLineScale: () => { },
    HandelUndeiLineEnter: () => { },
    HandleUndeLineExit: () => { },
})

export { MasteLayoutContext }


export default function MasteLayoutContextProvider({ children }) {
    const [element, setElement] = useState("")
    const [linwWidth, setLinewidth] = useState("")
    const [underLinePlace, setUnderLinePlace] = useState("")
    const [underLuneScale, setUnderLineScale] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [ExitOnmenu, setExitOnmenu] = useState(false)
    const [allmenu, setAllmenu] = useState([])
    const [firstlayout, setFirstlayout] = useState([])
    const [filterSecondmenu, setFilterSecondmenu] = useState([])
    const [filterThirdmenu, setFilterThirdmenu] = useState([])
    const [SecondLevelShow, setSecondLevelShow] = useState(false)
    const [secondHeight, setSecondHeight] = useState(0)
    const [ThirdLevelShow, setThirdLevelShow] = useState(false)
    const [search, setSearch] = useState("")
    const [changeState, setChangeState] = useState(true)
    const [ShowSearchBox, setShowSearchBox] = useState(false)
    const [ShowCloseIcon, setShowCloseIcon] = useState(false)
    const [searchData, setSearchData] = useState([])


    useEffect(() => {
        let body = {
            "educationSubject_ID": 0
        }
        fetchPost(Apis.GET_EDUCATIONSUBJECT, body).then(({ responseJSON, status }) => {
            if (status === 200 && responseJSON.isSuccess) {
                setAllmenu(responseJSON.data)
                setFirstlayout(responseJSON.data.filter((rd) => {
                    if (rd.educationSubject_EducationSubject_Ref === null) {
                        return true
                    }
                    return false
                }))
            }
        })

    }, [])




    let HandelUndeiLineEnter = (e) => {
        let lineWidth = e.target.clientWidth;
        let linePlace = e.target.offsetLeft
        setLinewidth(`${lineWidth}`)
        setUnderLinePlace(`${linePlace}`)
        setUnderLineScale(1)
    }

    let HandleExit = () => {
        setShowMenu(false)
    }

    let HandleShow = () => {
        setShowMenu(true)

    }

    let HandleUndeLineExit = () => {
        setUnderLineScale(0)
    }

    let HandleShowMenu = () => {
        setShowMenu(true)
    }

    let HandleHiddenMenu = () => {
        setShowMenu(false)
    }

    let SecondLayer = (firstLevelID) => {
        setFilterSecondmenu(allmenu.filter((all) => {
            if (all.educationSubject_EducationSubject_Ref === firstLevelID) {
                return true
            }
            return false
        }))
    }

    let ThirdLayer = (secondLevelID) => {
        setFilterThirdmenu(allmenu.filter((all) => {
            if (all.educationSubject_EducationSubject_Ref === secondLevelID) {
                return true
            }
            return false
        }))
    }



    let SetSearchText = (e) => {
        setSearch(e.target.value);
    }


    let GetSearchText = () => {
        fetchPost(Apis.GEt_SEARCHtextRESULT + "?Description=" + search).then(({ responseJSON, status }) => {
            setSearchData(responseJSON.data);
        })

    }

    useEffect(() => {
        setTimeout(() => {
            setChangeState(!changeState)
        }, 2000);
        if (search.length > 1) {
            setShowSearchBox(true)
        } else {
            setShowSearchBox(false)
        }

        if (search.length === 0) {
            setShowCloseIcon(false)
        } else {
            setShowCloseIcon(true)
        }

        if(search.length===0){
            setSearchData([])
        }

    }, [search])


    useEffect(() => {
        if (search.length > 1) {
            GetSearchText()
        }
    }, [changeState])



    return (
        <MasteLayoutContext.Provider value={{
            element, setElement, linwWidth, setLinewidth, underLinePlace,
            setUnderLinePlace, underLuneScale, allmenu, firstlayout,
            SecondLayer, ThirdLayer, filterSecondmenu, filterThirdmenu, setUnderLineScale,
            HandelUndeiLineEnter, HandleUndeLineExit, HandleHiddenMenu, HandleShowMenu, showMenu,
            setShowMenu, ExitOnmenu, HandleShow, HandleExit, SecondLevelShow, setSecondLevelShow, ThirdLayer,
            secondHeight, setSecondHeight, ThirdLevelShow, setThirdLevelShow, SetSearchText, GetSearchText,
            ShowSearchBox, setShowSearchBox, ShowCloseIcon, search, setSearch,searchData
        }} >
            {children}
        </MasteLayoutContext.Provider>
    )
}




