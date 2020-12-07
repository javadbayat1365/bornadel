import { makeStyles } from '@material-ui/core/styles';
import Icons from '../assets/images/iconfinal.svg'
import BGcircleMenu from '../assets/images/bluebackmotion.png'

const useStyles = makeStyles((theme) => ({
    // -----------------------------------------------------------------------------------------
    //                                      header Style
    // -----------------------------------------------------------------------------------------  
    header: {
        width: "100%",
        height: 108,
        position: "fixed",
        backgroundColor: "#ffffff",
        zIndex: 99,

    },
    HeaderMobileSize: {
        width: "100%",
        height: 108,
        backgroundColor: "#ffffff",
        zIndex: 99,
    },
    headerTop: {
        height: 48,
        paddingTop: 6,
        backgroundColor: "#fff",
        zIndex: 15
    },
    Insideheader: {
        maxWidth: "1676px",
        margin: "auto",
        // padding: 12,
        paddingTop: 7
    },
    headerInsideNavbar: {
        maxWidth: "1676px",
        marginTop: 5,
        position: "relative",
    },
    Bornadellogo: {
        width: 42,
        height: 42,
        marginRight: 13,
        cursor: "pointer",
        marginLeft: 14,
        backgroundSize: 1200,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-43px -39px"
    },
    searchBox: {
        wifth: 465,
        maxWidth: 465,
        position: "relative",
    },
    searchicon: {
        width: 30,
        height: 39,
        borderRadius: 6,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        display: "flex",
        zIndex: 6,
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-354px -53px",
        "&::after": {
            content: `''`,
            width: 1,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            marginLeft: -6,
            backgroundPosition: "-730px -61px",
            backgroundColor: "#d9d8da"

        }

    },
    verticalLine: {
        width: 1,
        height: 13,
        backgroundColor: "#d9d8da"
    },
    searchResult: {
        paddingTop: 40,
        backgroundColor: "#fff",
        borderRadius: 6,
        width: "100%",
        minHeight: "100px",
        boxShadow: "0 3px 12px 0 rgba(0,0,0,.2)",
        position: "absolute",
        zIndex: 5
    },
    searchResultContainer: {
        padding: "10px 20px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#fafafa"
        }
    },
    lineINsearchResult: {
        display: "inline-block",
        width: "97%",
        height: 1,
        position: "absolute",
        top: 40,
        right: 7,
        backgroundColor: "#dedede",
        margin: "auto"
    },
    searchResultText: {
        fontSize: 13,
        color: "#474747",
        fontWeight: 700,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
        }
    },
    searchRecordName: {
        fontSize: 13,
        color: "#07a1b4",
        fontWeight: 500
    },
    searchRecordName2: {
        display: "inline-block",
        fontSize: 13,
        width: 300,
        color: "#07a1b4",
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        position: "relative",
        top: 10,
    },
    searchResultText1: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-260px -335px",
        }
    },
    searchResultText2: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-356px -335px",
        }
    },
    searchResultText3: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-453px -335px",
        }
    },
    searchResultText4: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-549px -335px",
        }
    },
    searchResultText5: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-646px -335px",
        }
    },
    searchResultText6: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-741px -335px",
        }
    },
    CloseIconContainer: {
        position: "absolute",
        zIndex: 6,
        right: 10,
        top: 8,
        cursor: "pointer"
    },
    CloseIcon: {
        color: "#fff",
        backgroundColor: "#bcbcbc !important",
        borderRadius: "50%",
        width: "17px",
        height: "17px"
    },
    inputGrid: {
        flex: "1",
        zIndex: 6
    },
    searchInput: {
        height: 39,
        width: "100%",
        fontFamily: "Yekan",
        paddingLeft: 10,
        borderRadius: 6,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: "none",
        position: "relative",
        right: 1,
        alignContent: "center",
        paddingBottom: "5px",
        "&:focus": {
            outline: "none"
        },
        "&::placeholder": {
            fontSize: 12,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
            paddingLeft: 0
        },
        "&::MsInputPlaceholder": {
            fontSize: 12,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
        },
    },
    headerTopLeft: {
        paddingRight: 3,
        paddingTop: 10
    },
    loginButton: {
        width: 107,
        height: 33,
        padding: 0,
        marginRight: "5px",
    },
    loginIcon: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-284px -58px",
    },
    verticalLineLogin: {
        width: 1,
        height: 15,
        backgroundColor: "#eaeaea"
    },
    loginText1: {
        marginRight: 6,
        fontSize: 12,
        color: "#707070",
    },
    loginText2: {
        marginLeft: 6,
        paddingRight: 5,
        fontSize: 12,
        color: "#707070",
    },
    basketIconBtn: {
        padding: 0,
        minWidth: 0,
        width: 33,
        height: 33,
        borderRadius: 4,
        marginRight: 14,
        borderRadius: "4px",
        backgroundColor: "#c59428",
        border: "1px solid #eaeaea",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1100,
        backgroundPosition: "-102px -40px",
        "&:hover": {
            border: "solid 1px #eaeaea",
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1100,
            backgroundPosition: "-160px -40px",
        },
    },
    headerMenu: {
        fontSize: 14,
        fontWeight: 500
    },
    headerNavbar: {
        height: 44,
        boxShadow: "0 7px 8px 0 rgba(0,0,0,.04)",
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        zIndex: 2
    },
    redUnderLuneMenu: {
        height: 1,
        backgroundColor: "#c59428",
        position: "absolute",
        bottom: 0,
        transform: "scale(0)"
    },
    classList: {
        cursor: "default",
        marginRight: 32,
        position: "relative",
        marginLeft: 14,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 1000,
            backgroundPosition: "-730px -61px",

        },
        "&:after": {
            content: `''`,
            position: "relative",
            display: "inline-block",
            width: 1,
            height: 16,
            backgroundColor: "#d8d9db",
            top: 5,
            left: 26

        },
    },
    provision: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-655px -61px",


        }
    },
    articles: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-99px -204px",
        }
    },
    news: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-37px -204px",
        }
    },
    commonQuestion: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 21,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-581px -61px",
        }
    },
    AboutUs: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-507px -61px",
        }
    },
    contactUs: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-433px -61px",
        }
    },
    blackBackgroundOnWindow: {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "#00000038",
        position: "absolute"
    },
    //    -------------------------------------Menu-------------------------------------------
    MenuContainer: {
        marginTop: 44,
        marginLeft: 14,
        zIndex: 1,
    },
    leftMenuGrid: {
        backgroundColor: "#fff"
    },
    rightMenuGrid: {
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #0000000d",
        width: 200,
        zIndex: 3,
    },
    MenuItem: {
        fontSize: 13,
        padding: "11px 8px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItemText: {
        fontSize: 13,
        fontWeight: 500,
        textDecoration: "none",
        color: "#000"
    },
    MenuItem1: {
        padding: "11px 8px",
        cursor: "pointer",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItem2: {
        padding: "11px 8px",
        cursor: "pointer",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItemLogo: {
        width: 20,
        height: 20,
        display: "inline-block",
        marginRight: 7,
        border: "none",
    },
    arrowMenuItem: {
        width: 20,
        height: 20,
        marginLeft: "auto",
        display: "inline-block",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 900,
        backgroundPosition: "-139px -143px",
    },
    SecondLayer: {
        width: 200,
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #0000000d",
        zIndex: 2,
        padding: "5px 8px",
        maxHeight: 500,
        minHeight: 376,
        overflowY: "scroll",
        position: "absolute",
        left: 214,
        // "&::-webkit-scrollbar-thumb": {
        //     backgroundColor: "red",
        //     width: "13px",
        // },
        "&::-webkit-scrollbar": {
            display: "none",
            position: "absolute",
            backgroundColor: "blue"
        }
    },
    SecondLayercontainer: {
        padding: "10px 4px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "9px 4px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    thirdLayer: {
        maxWidth: window.innerWidth - 440,
        position: "absolute",
        padding: "10px 15px",
        left: 414,
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #00000040",
        maxHeight: 550,
    },
    thirdLayercontainer: {
        maxWidth: 120,
        display: "flex",
        fleWrap: "wrap",
        padding: "10px 10px",
        cursor: "pointer",
        color: "#000",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",

        }
    },

    // -----------------------------------------------------------------------------------------
    //                                      main Style
    // -----------------------------------------------------------------------------------------
    main: {
        width: "100%",
        paddingTop: window.innerWidth>959?108:0,
        backgroundColor: "#f5f5f5"
    },
    Insidermain: {
        // maxWidth: "1366px",
        margin: "auto",
    },


    //=====================================home page==================================================
    banneImages: {
        paddingTop: 20,
        maxWidth: "1366px",

    },
    ImagesIntopHome: {
        paddingLeft: 10
    },
    BannerContainer: {
        paddingRight: 10,
        paddingLeft: 15,
        // width: window.innerWidth > 1676 ? 1376 : `calc(${window.innerWidth}px - 300px)`,
        height: window.innerHeight - 180
    },
    education1: {
        position: "relative",
    },
    education2: {
        position: "relative",
    },
    education3: {
        position: "relative",
    },
    educationImage1: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationImage2: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationImage3: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationButton1: {
        width: window.innerWidth>1285?80:window.innerWidth<1286&&window.innerWidth>1100?70:65,
        height: window.innerWidth>1285?27:window.innerWidth<1286&&window.innerWidth>1100?22:17,
        borderRadius: 6,
        backgroundColor: "#0665B8",
        position: "absolute",
        top: "60%",
        left: "10%",
    },
    educationButton2: {
        width: window.innerWidth>1285?80:window.innerWidth<1286&&window.innerWidth>1100?70:65,
        height: window.innerWidth>1285?27:window.innerWidth<1286&&window.innerWidth>1100?22:17,
        borderRadius: 6,
        backgroundColor: "#281B7D",
        position: "absolute",
        top: "60%",
        right: "10%",


    },
    educationButton3: {
        width: window.innerWidth>1285?80:window.innerWidth<1286&&window.innerWidth>1100?70:65,
        height: window.innerWidth>1285?27:window.innerWidth<1286&&window.innerWidth>1100?22:17,
        borderRadius: 6,
        backgroundColor: "#6E3109",
        position: "absolute",
        top: "60%",
        left: "10%",
        backgroundImage: `url(${Icons})`,
    },
    educationButtonIcon1: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    educationButtonIcon2: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    educationButtonIcon3: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    SignInText: {
        fontSize: window.innerWidth > 1023 ? "0.6rem" :
            window.innerWidth > 1124 ? "0.7rem" : window.innerWidth > 1200 ? "0.8rem" : "0.5rem",

        fontFamily: "IRANSans",
        color: "#fff",
        fontFamily: "IRANSans",
        color: "#fff",
    },
    homeUnderBanner: {
        height: 194,
        backgroundColor: "#f5f5f5"
    },
    homeUnderBannerContainer: {
        width: 402
    },
    homeUnderBannerRight: {
        width: 56,
        height: 56,
        marginRight: 20
    },
    homeUnderBannerLeft: {
        width: 56,
        height: 56,
        marginLeft: 20
    },
    HUBannerRightTop: {
        width: 56,
        height: 56,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 690,
        backgroundPosition: "-375px 184px",
    },
    HUBannerLeftTop: {
        width: 56,
        height: 56,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 690,
        backgroundPosition: "-375px 184px",
    },
    HUBContainerText: {
        alignItems: "center",
        fontSize: 18,
        color: "#313237"
    },
    HUBannerRightbottom: {
        marginTop: 15,
        borderRadius: 11,
        border: "1px solid #c59428",
    },
    HUBannerLefttbottom: {
        marginTop: 15,
        borderRadius: 11,
        border: "1px solid #c59428",
    },
    HUBannerbottomText: {
        fontSize: 14,
        color: "#313237",
    },
    circleMenu: {
        height: 634,
        width: window.innerWidth,
        position: "relative",
        zIndex: 1,
        maxWidth: "1366px",
        backgroundImage: `url(${BGcircleMenu})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    usersStatisticContainer: {
        width: "100%",
        display: "flex",
        height: 315,
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        justifyContent: "center"
    },
    usersStatistiTitleContainer: {

    },
    usersStatistiTitle: {
        textAlign: "center",
        marginTop: 38,
        width: 592,
        borderBottom: "1px solid  #9f9f9f",
        fontSize: 17,
        color: "#333539",
    },
    usersStatisticIcons: {
        width: "100%",
        height: 40,
        margin: "40px 0 15px 0"
    },
    InsideusersStatisticIcons: {
        width: 592,
        height: 40,
        padding: "0 20px",
    },
    statisticIcon1: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-976px -41px",
    },
    statisticIcon2: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-915px -41px",
    },
    statisticIcon3: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-855px -41px",
    },
    statisticIcon4: {
        width: 40,
        height: 40,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-800px -41px",
    },
    usersStatisticBottomText: {
        width: 592,
        height: 40,
        padding: "0 17px",
        margin: "auto"
    },
    usersStatistiText1: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingLeft: 3,
    },
    usersStatistiText2: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
    },
    usersStatistiText3: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingRight: 10
    },
    usersStatistiText4: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingRight: 8,

    },
    BestAcademyConyainer: {
        width: "100%",
        marginTop: 10,
        padding: "10px 15px",
        backgroundColor: "#f5f5f5",
        paddingRight: 40,
        paddingLeft: 45,
    },
    BestAcademy: {
        height: 350,
        backgroundColor: "#fff",
        maxWidth: "1282px",
        margin: "auto",
        borderRadius: 10,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"

    },
    BestAcademyTitleContainer: {
        display: "flex",
        justifyContent: "center",
        marginLeft: window.innerWidth > 1020 && window.innerWidth < 1120 ? 25 : window.innerWidth > 1119 && window.innerWidth < 1300 ? 35 : window.innerWidth > 1300 ? 70 : 40,
    },
    BestAcademyTitle: {
        fontSize: 18,
        color: "#0d0d0d",
        padding: "0 15px",
        border: "2px dashed #c59428"
    },
    BestAcademySliderContainer: {
        paddingRight: 40,
    },
    BannerUnderBestAcademyContainer: {
        paddingTop: 10,
        paddingRight: 40,
        paddingLeft: 45,
        paddingBottom: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        overflow: "hidden",
        maxWidth: "1366px",
    },
    BannerUnderBestAcademyImage: {
        width: "100%",
        height: "100%",
        borderRadius: 5,

    },
    BannerUnderBestAcademy: {
        backgroundColor: "#707070",
        width: "100%",
        height: "370px",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.8)",
    },
    homeCursesComponent: {
        height: 475,
        paddingTop: 10,
        paddingBottom: 15,
        maxWidth: "1282px",
    },
    CursesComponentContainer: {
        // minWidth: 700,
        height: 445,
        backgroundColor: "#ffff",
        paddingRight: 12,
        paddingLeft: 14,
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        maxWidth: window.innerWidth - 320

    },
    HeaderCursesComponentContainer: {
        height: 46,
        width: "100%",
        margin: 0,
        paddingTop: 12,
        marginBottom: 25,
        borderBottom: "2px solid #cccccc"
    },
    HeaderCursesComponentContainer2: {
        height: 46,
        width: "100%",
        margin: "0 20px",
        paddingTop: 12,
        marginBottom: 15,
        borderBottom: "2px solid #cccccc"
    },
    HeaderCursesComponentText: {
        width: 155,
        padding: "0 17px 0 8px",
        fontSize: 17,
        color: "##0d0d0d",
        borderBottom: "2px solid #c59428"
    },
    ReceneViewSlider: {
        height: 330,

    },
    sliderItem: {
        // margin: "0 20px",
        // minWidth: 230
        // position:"absolute"
    },
    PrevArrow: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "-1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        right: 0,
        top: 170,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-267px -212px"

    },
    PrevArrowCourseDetail: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "-1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        right: 0,
        top: 210,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-267px -212px"

    },
    NextArrow: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        left: 0,
        top: 170,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-319px -212px"
    },
    NextArrowCourseDetail: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        left: 0,
        top: 210,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-319px -2x12p"
    },
    aloneCursesComponentContainer: {
        display: "flex",
        justifyContent: "flex-end",

    },
    aloneCursesComponent: {
        height: 445,
        minWidth: 200,
        backgroundColor: "#ffff",
        position: "relative",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        maxWidth: 200

    },
    HeaderCursesComponentText2: {
        width: 102,
        fontSize: 17,
        color: "#0d0d0d",
    },
    coursesComponentContainer: {
        minWidth: 166,
        paddingTop: 1,
        backgroundColor: "#fff !important",
        borderTop: "none",
        textDecoration: "none",
        borderRadius: 6,
        height: 323,
        "&:hover": {
            boxShadow: "0 0 6px 1px #c3c3c3",
            borderBottom: "none"
        }
    },
    CoursesRect: {
        height: 103,
        width: "100%",
        borderRadius: 6,
        position: "relative",
        zIndex: 2
    },
    CoursesContainer: {
        display: "flex",
        justifyContent: "center"
    },
    circleinRectContainer: {
        width: 85,
        height: 85,
        borderRadius: "50%",
        margin: "auto",
        position: "relative",
        top: -2,
        clipPath: "Polygon(0% 0%,100% 0%,100% 50% ,0% 50%)"
    },
    circleinRect: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "relative",
    },

    circleinRect2: {
        width: 72,
        height: 72,
        backgroundColor: "#d7d7d7",
        borderRadius: "50%",
        margin: "auto",
        position: "relative",
        bottom: 81,
        overflow: "hidden"
    },
    coursesIconCicle: {
        width: "100%",
        height: "100%",
    },
    coursesIcon: {
        width: 30,
        height: 30,
        position: "relative",
        margin: "auto",
        bottom: 210
    },
    coursesIconRect: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    },
    coursesText: {
        textAlign: "center !important",
        marginTop: 37,
        // fontFamily: "Swiss721BT",
        fontWeight: 900,
        fontSize: 13,
        color: "#000000ab"
    },
    CoursesDetail: {
        paddingTop: 40,
        border: "1px solid #d7d7d7",
        borderTop: "none",
        position: "relative",
        bottom: 4,
        height: "70%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        "&:hover": {
            // borderBottom:"none"
        }
    },
    CoursesteacherText: {
        fontSize: 12,
        color: "#383b40",
        marginTop: 5,
    },
    CoursesTitle: {
        fontFamily: "IRANSansNUMNumber",
        fontSize: 14,
        margin: "10px 0",
        color: "#383b40",
        width: 138,
        height: 26,
        borderRadius: 5,
        backgroundColor: "#f2f2f2",
        textAlign: "center",
    },
    Coursesteacher: {
        margin: "auto",
        marginTop: 0,
        marginBottom: 0
    },
    CoursesDateStartText1: {
        fontSize: 12,
        color: "#383b40",
    },
    CoursesDateStartText2: {
        fontSize: 14,
        color: "#fff",
        backgroundColor: "#ff0029",
        width: "100%",
        textAlign: "center",
        height: 43,
        lineHeight: "37px",
        marginTop: 10,
        marginBottom: 10,
    },
    DiscounText: {
        fontSize: 11,
        color: "#8f8f8f",
        textDecoration: "line-through",
    },
    DiscounRect: {
        marginLeft: 5,
        width: 29,
        height: 14,
        borderTopLeftRadius: 7,
        backgroundColor: "#ff0029",
        position: "relative",
        bottom: 2,
        textAlign: "center",
        lineHeight: "19px"
    },
    CoursesDiscount: {
        marginBottom: 10

    },
    DiscounRectText: {
        textAlign: "center",
        lineHeight: "10px",
        color: "#ffffff"
    },
    CoursesDateStart: {
        marginBottom: 7,
    },
    CoursesPrice: {
        marginBottom: 10

    },
    aloneCursesComponentMain: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 34
    },
    ArticleNewsContainer: {
        height: "75%"
    },
    ArticlesNews: {
        padding: "0px 40px 40px 45px",
        backgroundColor: "#f5f5f5",
        maxWidth: "1366px"
    },
    ArticleContainerBox: {
        paddingRight: 15,

    },
    ArticleContainer: {
        minHeight: 313,
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"
    },
    ArticleHeader: {
        height: 40,
        borderBottom: "1px solid #cccccc",
        marginBottom: 18,
    },
    ArticleHeaderText: {
        fontSize: 19,
        fontWeight: 500,
        color: "#0d0d0d",
        fontFamily: "IRANSans",
        borderBottom: "1px solid #c59428"
    },
    ArticleHeaderText2: {
        fontSize: 14,
        fontWeight: 500,
        color: "#006daa",
        fontFamily: "IRANSans",
        alignSelf: "center", cursor: "pointer",
    },
    articleNewsArrow: {
        display: "inline-block",
        width: 5,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-971px -128px",
        position: "relative",
        top: 5,
        left: 2
    },
    ArticleREctPhotoContainer: {
        width: 124,
        height: 124,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 0,
        overflow: "hidden"

    },
    ArticleREctPhoto: {
        width: 124,
        height: 124,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 26,
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.2)"
        },
        transition: "transform 0.2s linear"
    },
    ArticleTitle: {
        fontFamily: "IRANSans",
        fontSize: 14,
        color: "#0d0d0d",
        paddingTop: 25
    },
    ArticleLeft: {
        maxWidth: "78%",
        flex: 1,
        overflow: "hidden",
        paddingLeft: 25,
        cursor: "pointer"
    },
    ArticleTextField: {
        fontSize: 11,
        color: "#767676",
    },
    ArticleMain: {
        position: "relative"
    },
    ArticleRCirclePhoto: {
        display: "inline-block",
        width: 42,
        height: 42,
        borderRadius: "50%",
        position: "absolute",
        left: 100,
        top: 18,
        overflow: "hidden"
    },
    ReadMore: {
        cursor: "pointer"
    },
    threeArrow: {
        display: "inline-block",
        width: 13,
        height: 13,
        position: "relative",
        top: 3,
        backgroundImage: `url(${Icons})`,
        // backgroundSize: 750,
        backgroundPosition: "-382px -230px",
    },
    NewsContainer: {
        minHeight: 313,
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"


    },
    NewsREctPhoto: {
        width: 65,
        height: 65,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 0,
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.2)"
        },
        transition: "transform 0.2s linear"
    },
    NewsTitle: {
        fontSize: 11,
    },
    // ======================================Courses page=======================================

    CoursesContainer: {
        padding: "25px 30px 35px 30px ",
        backgroundColor: "#f5f5f5",
        maxWidth: 1366
    },
    groupFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: 200,
        borderRadius: 4,
        padding: "12px 10px",
        maxHeight: 200,
        backgroundColor: "#fff",
        marginBottom: 15,
        padding: "10px 10px"
    },
    groupFilterHeaderText: {
        fontWeight: 700
    },
    groupFilterHeader: {
        fontSize: 12,
        cplor: "#424750",
        borderBottom: "1px solid #dcdcdc"
    },
    groupFilterItem: {
        fontSize: 12,
        cplor: " #424750",
    },
    treelabel: {
        textDecoration:"none",
        "&:hover": {
            backgroundColor: "#fff !important"
        },
        "&:focus": {
            backgroundColor: "#fff  !important",
            fontSize: 20
        }
    },
    treelableText:{
        textDecoration:"none",
        color:"#000"
    },
    treeselected: {
        backgroundColor: "#fff  !important",
        "& div div": {
            backgroundColor: "#fff !important"
        }
    },
    levelFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 270,
        borderRadius: 4,
        padding: "10px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    levelFilterContainer: {
        padding: "5px 10px",
        height: 220,
        overflow:"auto",
        border: "1px solid #c6c6c6",
        borderRadius: 5,
    },
    levelFilterContainerRow: {
        height: 18
    },
    levelFilterTitle: {
        color: "#424750",
        fontsize: 12,
        fontWeight: 700,
        paddingBottom: 5
    },
    levelFilterText: {
        color: "#424750 !important",
        fontSize: "11px",
    },
    FormControllContainer: {
        height: 25
    },
    levelFilterItemText: {
        fontFamily: "Swiss721BT",
        fontSize: 10,
        fontWeight: "bold",
        color: "#424750",
    },
    teacherFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 350,
        borderRadius: 4,
        padding: "10px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        overflow: "hidden",

    },
    teacherFilterTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#424750"
    },
    searchInputteacherFilter: {
        height: 24,
        width: "90%",
        borderRadius: 4,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: "1px solid #2fc98e",
        borderLeft: "none",
        position: "relative",
        right: 1,
        alignContent: "center",
        paddingBottom: "5px",
        "&:focus": {
            outline: "none"
        },
        "&::placeholder": {
            fontSize: 11,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
            paddingLeft: 4
        },
        "&::MsInputPlaceholder": {
            fontSize: 11,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
        },

    },
    searchiconFilter: {
        width: 25,
        height: 24,
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        border: "1px solid #2fc98e",
        borderRight: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1100,
        backgroundPosition: "-280px -46px",
    },
    teacherFilterBox: {
        minHeight: 280,
        maxHeight: 280,
        padding: "3px 10px",
        marginTop: 7,
        border: "1px solid #d8d8d8",
        borderRadius: 5,
        overflowY: "scroll",
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#424750",
            width: "13px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#e6e6e6",
        }
    },
    startHoursFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 80,
        borderRadius: 4,
        padding: "5px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    startHoursFilterBox: {
        borderRadius: 5,
        border: "1px solid #d8d8d8",
        padding: "5px 0px"
    },
    startHoursFilterTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#424750"
    },
    startHoursFilterSearch: {
        width: 54,
        height: 17,
        borderRadius: 4,
        fontSize: 11,
        fontFamily: "IRANSansNUMNumber",
        textAlign: "center",
        border: "1px solid #2fc98e",
        "&:focus": {
            outline: "none"
        },

    },
    startHoursFilterText: {
        padding: "0 3px",
        fontSize: 11,
        color: "#424750",

    },
    AcademyFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 350,
        borderRadius: 4,
        padding: "12px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    AcademyFilterTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#424750"
    },
    AcademyFilterBpx: {
        minHeight: 280,
        maxHeight: 280,
        marginTop: 7,
        padding: "3px 10px",
        border: "1px solid #d8d8d8",
        borderRadius: 5,
        overflowY: "scroll",
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#424750",
            width: "13px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#e6e6e6",
        }
    },
    priceFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 120,
        borderRadius: 4,
        padding: "5px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    priceFilterHead: {
        fontWeight: 700
    },
    priceFilterBox: {
        height: 80,
        border: "1px solid #d8d8d8",
    },
    priceFilterSearch: {
        display: "inline-block",
        width: 64,
        fontSize: 11,
        fontFamily: "IRANSansNUMNumber",
        height: 17,
        borderRadius: 4,
        textAlign: "center",
        border: "1px solid #2fc98e",
        "&:focus": {
            outline: "none"
        }
    },
    swich1: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 39,
        borderRadius: 4,
        padding: "0px 10px",
        backgroundColor: "#fff",
        marginBottom: 5,
    },
    thumbReadyClasses: {
        width: 15,
        height: 15,
        marginLeft: 2,
        marginTop: 2,
    },
    swich2: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 39,
        borderRadius: 4,
        padding: "0px 10px",
        backgroundColor: "#fff",
        marginBottom: 5,
        paddingRight: 44
    },
    switchText: {
        color: " #424750",
        fontSize: 12,
        fontWeight: 700
    },
    filterButtunContainer: {
        minWidth: 210,
        maxWidth: 210,
        height: 29,
        borderRadius: 4,
        marginTop: 20,
    },
    filterButtun: {
        width: "80%",
        height: "100%",
    },
    CoursesContainerRight: {
        flex: 1
    },
    CoursesContainerLeft: {
        paddingLeft: 25,
        // width: window.innerWidth - 300
        flex: 4

    },
    CoursesContainerLeftHeader: {
        height: 31,
        backgroundColor: "#fff",

    },
    coursesComponentDetail: {
        paddingTop: 15
    },
    coursesComponentDetailItem: {
        paddingBottom: 15,
        minWidth: window.innerWidth > 1360 ? 180 : window.innerWidth > 1265 && window.innerWidth < 1361 ? 180 :
            window.innerWidth > 1100 && window.innerWidth < 1266 ? 166 : window.innerWidth > 1022 && window.innerWidth < 1101 ? 166 : 166
    },
    leftheaderIcon: {
        width: 27,
        height: '100%',
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-55px -289px",
        backgroundSize: "1157px"

    },
    leftheaderTitle: {
        fontSize: 12,
        color: "#424750",
        marginLeft: 10
    },
    leftheaderText: {
        width: 68,
        cursor: "pointer",
        fontSize: 12,
        color: "#424750",
        marginLeft: 12,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "#ebf7f2"
        }
    },
    activeFilterHeaderLeft: {
        width: 68,
        cursor: "pointer",
        height: 20,
        backgroundColor: "#2fc98e",
        borderRadius: 4,
        marginLeft: 12,
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    // ======================================CoursesDetail page=======================================

    CourseDetailContainer: {
        backgroundColor: "#f5f5f5",
        padding: "28px 25px",
        maxWidth: 1366,
    },
    CourseDetailBox: {
        backgroundColor: "#fff",
        padding: "22px 27px 40px 27px",
        border: "solid 1px #dadada",
        borderRadius: 6,
    },
    CourseDetailElements: {
        minHeight: 280,
    },
    CourseDetailText: {
        fontSize: 22,
        color: "#00000"
    },
    MarginTop: {
        paddingTop: 25
    },
    CourseDetailClassTitle: {
        backgroundColor: "#2f6c81",
        color: "#ffff",
        padding: "0 14px",
        borderTopRightRadius: 15,
        width: 58,
        height: 23,
        textAlign: "center"
    },
    CourseDetailClassNameTitle: {
        fontSize: 12,
        color: "#000"
    },
    CourseDetailClassNameContainer: {
        marginTop: 20
    },
    CourseDetailClassName: {
        fontSize: 12,
        color: "#787878"
    },
    CourseDetailClassNameNUM: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 12,
        color: "#787878"
    },
    CourseDetailteacherNameContainer: {
        marginTop: 20
    },
    CourseDetailClassSUMhousrs: {
        marginTop: 20
    },
    CourseDetailteacherNameContainer2: {
        marginTop: 0
    },
    CourseDetailteacherNameTitle: {
        fontSize: 12,
        color: "#000"
    },
    CourseDetailteacherName: {
        fontSize: 12,
        color: "#787878"
    },
    CourseDetailteacherNameNUM1: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 12,
        color: "#c59428"
    },
    CourseDetailteacherNameNUM2: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 12,
        color: "#000"
    },
    CourseDetailteacherFiveCourse: {
        color: "#0a7f51",
        cursor: "pointer"
    },
    verticalLine: {
        maxWidth: 1,
        height: 210,
        backgroundColor: "#b4b4b4",
        alignSelf: "center",
        marginRight: 20,
        marginLeft: 28
    },
    CourseDetailAcademyNameContainer: {
        marginTop: 15,
    },
    CourseDetailAcademyTitle: {
        backgroundColor: "#2f6c81",
        color: "#ffff",
        padding: "0 14px",
        borderTopRightRadius: 15,
        width: 71,
        height: 23,
        textAlign: "center"
    },
    CourseDetailَAcademyImage: {
        display: "inline-block",
        width: 93,
        height: 93,
        border: "1px solid #dadada",
        borderRadius: 8,
    },
    CourseDetailAcademyImageContainer: {
        marginTop: 3
    },
    CourseLogoANDregisterBox: {
        width: 230,
        position: "relative",
        height: 240,
        borderRadius: 7,
        backgroundColor: "#f2f2f2",
    },
    CourseLogoANDregisterButton: {
        texAlign: "center",
        width: 229,
        height: 29,
        marginTop: 10,
    },
    CourseLogoANDregisterCircle: {
        display: "inline-block",
        width: 110,
        height: 110,
        backgroundColor: "#b4b4b4",
        borderRadius: "50%",
        margin: "auto",
        marginTop: 0,
    },
    CourseLogoANDregisterTitle: {
        fontSize: 20,
        fontFamily: "Swiss721BT",
        color: "#3d3d3d",
        fontWeight: "bold",
        fontStretch: "condensed",
        margin: "auto",
        marginBottom: 13,
    },
    CourseLogoANDregisterLogo: {
        display: "inline-block",
        width: 30,
        height: 30,
        backgroundColor: "#b4b4b4",
        margin: "auto",
        marginBottom: 0,
    },
    CourseLogoANDregisterShareLogo: {
        width: 20,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-204px 59px",
        position: "absolute",
        right: 5
    },
    CourseLogoANDregisterBellLogo: {
        width: 20,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-257px 59px",
        position: "absolute",
        right: 5,
        top: 27
    },
    teacherANDAcademyDetail: {
        height: 125,
        backgroundColor: "#fff",
        marginTop: 20,
    },
    CourseDetailteacherDetail: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },

        MozuserSelect: "none",
        userSelect: "none",
    },
    CourseDetailAcademyDetail: {
        width: 140,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "270px 57px",
            backgroundSize: 1000
        },
        MozuserSelect: "none",
        userSelect: "none",
    },
    CourseDetailِDownloadDetail: {
        width: 150,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "328px 57px",
            backgroundSize: 1000
        },
        MozuserSelect: "none",
        userSelect: "none",
    },
    ExtraWidth: {
        height: 35,
        backgroundColor: "#fafafa",
        border: "1px solid #dfdfdf",
        display: "flex",
        flex: 1
    },
    ActiveTeacher: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
    },
    ActiveAcademy: {
        width: 140,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "270px 57px",
            backgroundSize: 1000
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
    },
    ActiveDownload: {
        width: 150,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "328px 57px",
            backgroundSize: 1000
        },
        backgroundColor: "#fff",
        border: "none",
        MozuserSelect: "none",
        userSelect: "none",
        borderTop: "1px solid #2fc98e",
    },
    CourseDetailQuestion: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },

        MozuserSelect: "none",
        userSelect: "none",
    },
    CourseDetailComent: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },

        MozuserSelect: "none",
        userSelect: "none",
    },
    ActiveQuestion: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
    },
    ActiveComent: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
            backgroundSize: 1000
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
    },
    SimilarItemContainer: {
        backgroundColor: "#fff",
        padding: 22,
        marginTop: 20,
        borderRadius: 6,
        border: "solid 1px #dadada",
        paddingBottom: 40,
        position: "relative",
    },
    SimilarItemHeader: {
        fontSize: 20,
        marginBottom: 25,
        width: "100%",
        borderBottom: "1px solid #d7d7d7",
    },
    CourseDetailImageUnderSimilar: {
        backgroundColor: "#f06eaa",
        borderRadius: 8,
        marginTop: 20,
    },







    // -----------------------------------------------------------------------------------------
    //                                      footer Style
    // -----------------------------------------------------------------------------------------   
    footer: {
        width: "100%",
        backgroundColor: "#f5f5f5"
    },
    Insidefooter: {
        maxWidth: 1450,
        margin: "auto",
        height: 479,
        backgroundColor: "#f5f5f5"
    },
    footerTop: {
        height: 81,
        borderBottom: "1px solid #c2c2c2"
    },
    footerTopLeft: {
        paddingRight: 112
    },
    footerTopRightText: {
        marginLeft: 54,
        fontSize: 17,
        color: "#4b4b4b"
    },
    footerTopLeftTopText: {
        fontSize: 12,
        color: "#006eab",
        marginBottom: 4
    },
    footerTopLeftBottom: {
        width: 192
    },
    AparatIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-719px -115px",
    },
    LinkdinIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-663px -115px",
    },
    TelegramIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-819px -115px",
    },
    InstagramIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-766px -115px",
    },
    footerMain: {
        height: 245,
        borderBottom: "1px solid #c2c2c2"
    },
    footerMainList: {
        // minWidth: 195
    },
    footerMainListItem: {
        listStyle: "none",
        paddingLeft: 45,
        paddingRight: 20,
        marginTop: 41,
        lineHeight: "27px",
        fontSize: 17,
        color: "#006eab"
    },
    oneArrow: {
        display: "inline-block",
        width: 13,
        height: 13,
        position: "relative",
        top: 3,
        backgroundImage: `url(${Icons})`,
        // backgroundSize: 900,
        backgroundPosition: "269px -158px",
    },
    footerMainBigImage: {
        width: "100%",
        height: 158,
        flex: 1,
        marginRight: 30,
        backgroundColor: "#8c8888",
        paddingLeft: 10,
        borderRadius: 10
    },
    FooterBigImageText: {
        fontSize: 14,
        lineHeight: "18px",
        color: "#fff",
    },
    footerMainSmallImageContainer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    footerMainSmallImage: {
        width: 158,
        height: 158,
        marginRight: 40,
        display: "inline-block",
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    namad: {
        width: 158,
        height: 158,
        borderRadius: 8
    },

    footerMainSmallImageRight: {
        width: 158,
        height: 158,
        display: "inline-block",
        marginRight: 20,
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    resaneDigital: {
        width: 158,
        height: 158,
        borderRadius: 8

    },
    footerBottom: {
        borderBottom: "1px solid #c2c2c2"
    },
    footerBottomRight: {
        paddingTop: 14,
        paddingLeft: 44,
    },
    footerBottomRightInsider: {
        width: 510
    },
    NavigationIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-518px -107px",
    },
    AddressText: {
        fontSize: 14,
        color: "#5f5f5f",
    },
    FarsiNumber: {
        display: "inline-block",
        fontFamily: "IRANSansNUMNumber",

    },
    FarsiNumber1: {
        display: "inline-block",
        fontFamily: "IRANSansNUMNumber",
        fontWeight: "bold",
        fontSize: 13

    },
    CoursesPriceText: {
        fontWeight: "bold",
        color: "#000",
    },
    FarsiNumberFooterText: {
        fontSize: 14,
        color: "#5f5f5f",
        fontFamily: "IRANSansNUMNumber",

    },
    footerBottomRightPhone: {
        width: 200
    },
    footerBottomRightMail: {
        marginLeft: 72
    },
    emalText: {
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 14,
        color: "#5f5f5f"
    },
    PhoneIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-570px -105px",
    },
    MailIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-464px -105px",
    },
    footerBottomLeft: {
        paddingRight: 40,
    },
    footerBottomLeftRect: {
        marginLeft: 5,
        display: "inline-block",
        width: 109,
        height: 31,
        borderRadius: 5,
        backgroundColor: "black",
        cursor: "pointer",
    },
    FooterImage: {
        width: 109,
        height: 31,
        borderRadius: 8,

    },
}));
export default useStyles



