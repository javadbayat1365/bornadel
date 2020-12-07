// //---------------------------------------------------------
// const BaseUrl = "http://192.168.1.191/api/v1/"
// const BaseImageUrl="http://192.168.1.191/"
// -----------------------------------------------------
const BaseImageUrl = "http://api.bornadel.com/"
const BaseUrl = "http://api.bornadel.com/api/v1/"

export default {

    GET_EDUCATIONSUBJECT: BaseUrl + "EducationSubject/GetAll",
    GET_GetAllHomeTop: BaseUrl + "Academy/GetAllHomeTop",
    GET_RECENTVIEW: BaseUrl + "ClassRoom/GetAllLastViewHome",
    GET_GetARTICLEHOMEPAG: BaseUrl + "Article/GetAllTopHomePage",
    GET_GetAllNEWHOMEPAFE: BaseUrl + "News/GetAllTopHomePage",
    GET_GetAllCircleMainMenuHomePage: BaseUrl + "EducationSubject/GetAllCircleMainMenuHomePage",
    GET_GetAllCircleSubMenuHomePage: BaseUrl + "EducationSubject/GetAllCircleSubMenuHomePage",
    GET_GetAllLastViewHome: BaseUrl + "ClassRoom/GetAllLastViewHome",
    SHOWIMAGE: BaseImageUrl,
    GET_GetAllSpecialOfferHomePage: BaseUrl + "ClassRoom/GetAllSpecialOfferHomePage",
    GEt_SEARCHtextRESULT: BaseUrl + "ClassRoom/GetAllSearchHomePage",
    Get_GetAllSearchClassRoomList: BaseUrl + "ClassRoom/GetAllSearchClassRoomList",
    Get_GetAllInClassRoomList: BaseUrl + "EducationSubject/GetAllInClassRoomList",
    Get_GetAllClassroomLevel: BaseUrl + "ClassRoomLevel/GetAll",
    Get_GetAllClassroomLevel: BaseUrl + "ClassRoomLevel/GetAll",
    Get_GetAllTeacher: BaseUrl + "Teacher/GetAll",
    Get_GetAllAcademy: BaseUrl + "Academy/GetAll",
}