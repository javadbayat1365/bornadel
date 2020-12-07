import { makeStyles } from '@material-ui/core/styles';
import { Rotate90DegreesCcw } from '@material-ui/icons';
import Icons from '../assets/images/iconfinal.svg'

const useStylesAp = makeStyles((theme) => ({
    //===================================Sidebar====================================
    AcademyPanelContainer: {
        maxWidth: "220px",
        minWidth: "180px",
        height: "100%",
        paddingTop: 25,
        borderRight: "1px solid #d0d0d0",
        borderLeft: "1px solid #d0d0d0"
    },
    AcademyImage: {
        width: 80,
        height: 80,
        borderRadius: "50%",
        border: "1px solid #c78e23"
    },
    AcademyName: {
        fontSize: 13,
        color: "#4b4b4b",
        padding: "10px 15px",
        userSelect: "none",
    },
    SidebarMenu: {
        fontSize: 13,
        color: "#4b4b4b",
        padding: "10px 15px",
        cursor: "pointer",
        borderBottom: "1px solid #d0d0d0",
        userSelect: "none",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#d8d8d8"
        },
    },
    APsideBarProfile: {
        border: "1px solid #d0d0d0",
        borderRight: "none",
        borderLeft: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-481px -422px",
        },

    },
    APsideBarProfileActive: {
        border: "1px solid #d0d0d0",
        borderRight: "none",
        borderLeft: "none",
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-539px -422px",
        },

    },
    APsideBarTeachers: {

        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-597px -422px",
        },
    },
    APsideBarTeachersActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-656px -422px",
        },
    },
    APsideBarClasses: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-714px -422px",
        },
    },
    APsideBarClassesActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-773px -422px",
        },
    },
    APsideBarCourses: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 22,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-831px -422px",
        },
    },
    APsideBarCoursesActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 22,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-890px -422px",
        },
    },
    APsideBarQuestionANDcoment: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-950px -422px",
        },
    },
    APsideBarQuestionANDcomentActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-1009px -422px",
        },
    },
    APsideBarTicket: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-1067px -422px",
        },
    },
    APsideBarTicketActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-1126px -422px",
        },
    },
    APsideBarBank: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-1183px -422px",
        },
    },
    APsideBarBankActive: {
        color: "#c88f23",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-1242px -422px",
        },

    },
    //==================================AppBar=================================================
    AcademyPanelAppBar: {
        height: 30,
        backgroundColor: "#d2d2d2",
    },
    AcademyPanelScoreContainer: {
        padding: "0 3px",
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 4,
        marginBottom: 4
    },
    AcademyPanelScore: {
        fontSize: 12,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 15,
            height: 15,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 4,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-424px -425px",
        },
    },
    AcademyPanelScoreText: {
        fontFamily: "IRANSansNUMNumber",
        color: "#c78e23",
        paddingLeft: 3,

    },
    AcademyAppBarICONContainer: {
        flex: 1,
        paddingRight: 20
    },
    AcademyAppBarICON1: {
        cursor: "pointer",
        marginRight: 10,
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
            backgroundPosition: "-186px -422px",
        },
    },
    AcademyAppBarICON2: {
        cursor: "pointer",
        marginRight: 5,
        "&::before": {
            content: `''`,
            width: 25,
            height: 25,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-149px -422px",
            backgroundSize: 1200
        },
    },
    AcademyAppBarICON3: {
        cursor: "pointer",
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
            backgroundPosition: "-67px -422px",
        },
    },
    //==========================================Profile Page===============================================
    ProfileContainer: {
        padding: "20px 25px 30px 25px"
    },
    EditProfile: {
        width: 90,
        height: 20,
        padding: "0 5px",
        marginRight: 10
    },
    EditPassword: {
        width: 90,
        height: 20,
        padding: "0 5px",

    },
    EditProfiletext: {
        fontSize: "11px !important"

    },
    EditPasswordtext: {
        fontSize: "11px !important"

    },
    AcademyConditionText: {
        fontSize: 13,
        color: "#4d4d4d",
        zIndex: "2"
    },
    AcademyConditionComponent: {
        paddingLeft: 10,
        flex: 1,
    },
    AcademyConditionLine: {
        height: 1,
        width: 200,
        backgroundColor: "#000",
        width: "252px",
        marginLeft: 22,
        position: "relative",
        bottom: 10,
    },
    AcademyConditionBox1Active: {
        width: 95,
        height: 20,
        backgroundColor: "#ff1b36",
        marginRight: 5,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    AcademyConditionBox1: {
        width: 95,
        height: 20,
        backgroundColor: "#e3e3e3",
        marginRight: 5,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    AcademyConditionBox2: {
        width: 95,
        height: 20,
        backgroundColor: "#e3e3e3",
        marginRight: 5,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    AcademyConditionBox2Active: {
        width: 95,
        height: 20,
        backgroundColor: "#ff1b36",
        marginRight: 5,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    AcademyConditionBox3Active: {
        width: 95,
        height: 20,
        backgroundColor: "#ff1b36",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    AcademyConditionBox3: {
        width: 95,
        height: 20,
        backgroundColor: "#e3e3e3",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    AcademyConditionBoxActive: {
        backgroundColor: "#000",
    },
    rectinBox1: {
        display: "inline-block",
        width: 20,
        height: 20,
        background: "whitesmoke",
        transform: "rotate(45deg)",
        position: "absolute",
        left: -15,
    },
    AcadConText: {
        fontSize: 13,
    },
    AcadConTextactive: {
        fontSize: 13,
        color: "#fff"
    },
    rectinBox3: {
        display: "inline-block",
        width: 14,
        height: 14,
        background: "#e3e3e3",
        transform: "rotate(45deg)",
        position: "absolute",
        right: -8,
    },
    rectinBox3Active: {
        display: "inline-block",
        width: 14,
        height: 14,
        background: "#ff1b36",
        transform: "rotate(45deg)",
        position: "absolute",
        right: -8,
    },
    AcademyPanelcircle1: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "whitesmoke",
        position: "absolute",
        left: 25,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    AcademyPanelcircleActive1: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "#ff1b36",
        position: "absolute",
        left: 25,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    verticalLinAcademy1: {
        display: "inline-block",
        position: "absolute",
        backgroundColor: "black",
        width: 1,
        height: 9,
        top: 7,
        left: 2,
    },
    AcademyPanelcircle2: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "whitesmoke",
        position: "absolute",
        left: 120,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    AcademyPanelcircleActive2: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "#ff1b36",
        position: "absolute",
        left: 120,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    verticalLinAcademy2: {
        display: "inline-block",
        position: "absolute",
        backgroundColor: "black",
        width: 1,
        height: 9,
        top: 7,
        left: 2,
    },
    AcademyPanelcircleActive3: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "#ff1b36",
        position: "absolute",
        left: 220,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    AcademyPanelcircle3: {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: "whitesmoke",
        position: "absolute",
        left: 220,
        bottom: -3,
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow: "inset 0 0 0 1px #fff",
    },
    verticalLinAcademy3: {
        display: "inline-block",
        position: "absolute",
        backgroundColor: "black",
        width: 1,
        height: 9,
        top: 7,
        left: 2,
    },
    AcademyLogoRect: {
        display: "inline-block",
        width: 70,
        height: 70,
        backgroundColor: "#fff"
    },
    AcademyPanelDetailContainer: {
        paddingRight: 10,
        marginBottom: 8
    },
    AcademyPanelProfileDetailText: {
        fontSize: 13,
        color: "#4b4b4b",
        minWidth: 72,
        textAlign: "end"
    },
    AcademyPanelProfileDetailTextInput: {
        height: 22,
        flex: 1,
        backgroundColor: "#fff",
        border: "1px solid #d4d4d4",
        marginLeft: 10,
        borderRadius: 4,
        overflow: "auto"
    },
    AcademyPanelDetailDes: {
        paddingLeft: 15,
        fontSize: 13,
        overflow: "auto"
    },
    AcademyPanelProfileDetailDesInput: {
        height: 122,
        flex: 1,
        backgroundColor: "#fff",
        border: "1px solid #d4d4d4",
        borderRadius: 4,
    },
    AcademyProfileTableContainer: {
        marginTop: 10
    },
    AcademyProfileTableRow: {
        width: 80,
        height: 20,
        borderRadius: 4,
        backgroundColor: "#e3e3e3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        alignSelf: "center"
    },
    AcademyProfileTableName: {
        width: 220,
        height: 20,
        borderRadius: 4,
        backgroundColor: "#e3e3e3",
        margin: "0 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        alignSelf: "center"
    },
    AcademyProfileTableLink: {
        flex: 1,
        height: 20,
        borderRadius: 4,
        backgroundColor: "#e3e3e3",
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        alignSelf: "center"
    },
    //==============================TeacherList===================================================
    TeacherListContainer: {
        padding: "20px 25px 30px 25px",
        // backgroundColor:"red",
    },
    HeaderTextTeacherList: {
        fontSize: 14,
        color: "#010101",
        backgroundColor: "#e8e8e8",
        width: 115,
        height: 26,
        borderRadius: 6,
        textAlign: "center",
        position: "relative",
        top: 9,
    },
    IconContainerTeacherList: {
        backgroundColor: "#e8e8e8",
        borderRadius: 6,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: 10,
        height: 29

    },
    editTeacherINTeacherList: {
        cursor: "pointer",
        backgroundColor: "#33d599",
        margin: 5,
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 0,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            margin: "0 5px",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-401px -494px",
        },
        "&:hover": {
            backgroundColor: "#32916e"
        },
    },
    deleteTeacherINTeacherList: {
        cursor: "pointer",
        backgroundColor: "#33d599",
        margin: 5,
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 0,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            margin: "0 5px",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-345px -494px",
        },
        "&:hover": {
            backgroundColor: "#32916e"
        },
    },
    addTeacherINTeacherList: {
        cursor: "pointer",
        backgroundColor: "#33d599",
        margin: 5,
        width: 25,
        height: 25,
        borderRadius: 4,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            margin: "0 5px",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-289px -494px",
        },
        "&:hover": {
            backgroundColor: "#32916e"
        },
    },
    teacherLiseTableHeaderField: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
    },
    ClassListteacherLiseTableHeaderField1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 1
    },
    ClassListteacherLiseTableHeaderField2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 2
    },
    teacherLiseTableHeaderFieldDUC1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 1
    },
    teacherLiseTableHeaderFieldDUC2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 2
    },
    ADDteacherDUCteacherLiseTableHeaderField1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 1
    },
    ADDteacherDUCteacherLiseTableHeaderFieldDUC2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        color: "#ffffff",
        backgroundColor: "#666666",
        borderRadius: 6,
        margin: "0px 10px",
        flex: 2

    },

    teachrListTableContainer: {
        padding: "20px 0 10px 0",
        backgroundColor: "#e8e8e8",
        borderRadius: 6,
    },
    AddteachrListTableContainer: {
        padding: "20px 0 10px 0",
        backgroundColor: "#fff",
        borderRadius: 6,
        marginTop: 30,
    },
    TeacherListTableRowContainer: {
        position: "relative"
    },
    TeacherListTableRowItem: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
    },
    ClassListTeacherListTableRowItem1: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 1
    },
    ClassListTeacherListTableRowItem2: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 2
    },
    AddTeacherListTableRowItem: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        border: "1px solid #cccccc",
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
    },
    AddTeacherListTableRowItem1: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        border: "1px solid #cccccc",
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 1,
    },
    AddTeacherListTableRowItem2: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        border: "1px solid #cccccc",
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 2,
    },
    TeacherListTableRowItemDUC1: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 1
    },
    TeacherListTableRowItemDUC2: {
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        margin: "10px 10px",
        fontFamily: "IRANSansNUMNumber",
        flex: 2
    },
    ClollapseArrow: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "absolute",
            cursor: "pointer",
            border: "none",
            top: 6,
            margin: "0 5px",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-148px -352px",
        },
    },
    ClollapseArrowShow: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "absolute",
            cursor: "pointer",
            border: "none",
            top: 17,
            left: 10,
            margin: "0 5px",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-148px -352px",
            transform: "rotate(180deg)"
        },
    },
    CollapseRow: {
        width: "100%",
    },
    CollapseItemContainer: {
        margin: "0px 10px",

    },
    CollapseItemContainer1: {
        margin: "0px 10px",
        flex: 1
    },
    CollapseItemContainer2: {
        margin: "0px 10px",
        flex: 2
    },
    CollapseItem: {
        width: "100%",
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: "0 10px",
        fontFamily: "IRANSansNUMNumber",
    },
    CollapseItem: {
        width: "100%",
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: "0 10px",
        fontFamily: "IRANSansNUMNumber",
    },
    CollapseItemAdress: {
        width: "100%",
        height: 52,
        display: "flex",
        justifyContent: "center",
        fontSize: 13,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: "2px 10px",
        overflowY: "auto",
        fontFamily: "IRANSansNUMNumber",
        "&::-webkit-scrollbar-thumb": {
            display: "none"

        },
        "&::-webkit-scrollbar-track": {
            display: "none"
        }
    },
    CollapseTitleItem: {
        textAlign: "center",
        fontSize: 14,
        color: "#000000",
    },
    CollapseItemPhoto: {
        width: 80,
        height: 80,
        backgroundColor: "#ffffff",
        marginLeft: "auto",
    },
    teacherDetailBox: {
        padding: "25px 20px",

    },
    teacherDetailContainer: {
        backgroundColor: "#fff",
        border: "1px solid #cccccccc",
        borderRadius: 8,
        padding: "25px"
    },
    TeacherDetailImageContainer: {
        width: "100px",
        height: "100px",
        borderRadius: 6,
        border: "1px solid #9b9b9b",
        backgroundColor: "#9b9b9b"
    },
    TeacherDetailTitle: {
        fontSize: 18,
        color: "#000000",
        backgroundColor: "#cccccc",
        padding: "2px 10px",
        borderRadius: 6
    },
    AddDUCTeacherDetailTitle: {
        width: 158,
        fontSize: 18,
        color: "#000000",
        backgroundColor: "#cccccc",
        padding: "2px 10px",
        borderRadius: 6,
        textAlign: "center"
    },
    teacherDetailFieldBox: {
        marginTop: 15
    },
    teacherDetailText: {
        width: 110,
        textAlign: "end",
        fontSize: 16,
        color: "#5d5d5d"
    },
    teacherDetailInput: {
        borderRadius: 6,
        border: "1px solid #9b9b9b",
        flex: 1,
        marginLeft: 7,
        height: 28,
    },
    teacherDetailFieldContainer: {
        marginTop: 15,
    },
    PrevTeacherDetailButton: {
        padding: 0,
        margin: "10px",
        borderColor: "#28d795",
        color: "#28d795 !important",
        height: 30,
    },
    NextTeacherDetailButton: {
        padding: 0,
        margin: "10px",
        borderColor: "#28d795",
        color: "#28d795 !important",
        height: 30,
    },
    NextTeacherDetailButtonAccess: {
        padding: 0,
        margin: "10px",
        borderColor: "#28d795",
        backgroundColor: "#28d795",
        color: "#fff !important",
        height: 30,
        "&:hover": {
            backgroundColor: "#32916e"
        },
    },
    checkBoxType: {
        display: "inline-block",
        width: 42,
        height: 20
    },
    addModaldiv: {
        width: 455,
        padding: 15,
        height: 290,
        backgroundColor: '#fff',
        alignSelf: "center",
        margin: "auto",
        marginTop: (window.innerHeight - 290) / 2,
        borderRadius: 15,
        position: 'relative',
        "&:focus": {
            outline: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            padding: 15,
            overflow: 'scroll'
        }
    },
    DegreeModalTitle: {
        fontSize: 16,
    },
    addInput: {
        backgroundColor: '#fff',
        minHeight: '29px',
        fontSize: '11px',
        paddingLeft: 5,
        paddingRight: 15,
        marginTop: 6,
        marginLeft:10,
        maxWidth: 250,
        borderRadius: 5,
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        cursor: 'pointer',
        width: '%100',
        height: 22,
        border: '1px solid #c1c1c1',
        "&:focus": {
            outline: 'none',
            borderWidth: 1,
            borderColor: 'red'
        },
        "&:disabled": {
            color: '#bebfbf'
        }
    },
    inputGrid: {
        position: 'relative',
        marginTop: 2,
        height: 75
    },
    selectDegreeInModal: {
        paddingRight: 10,
        border: '1px solid #c1c1c1',
        borderRadius: 5,
        position: 'absolute',
        width: '98%',
        top: 66,
        zIndex: 5,
        background: 'white',
        height: 81,
        overflowY: "auto"
    },
    KeyboardArrowDownIcon: {
        fontSize: '18px',
    },
    DegreeModalText: {
        fontSize: 13,
    },
    DegreeModaleSelectItem: {
        padding: 5,
        cursor: 'pointer',
    },


    //==============================ClassList=====================================================
    ClassListContainer: {
        padding: "20px 25px 30px 25px"
    },
    editTeacherINclassList: {
        cursor: "pointer",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "absolute",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-67px 91px",
        },
    },
    deleteTeacherINclassList: {
        cursor: "pointer",
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
            backgroundPosition: "-67px 91px",
        },
    },
    addTeacherINclassList: {
        cursor: "pointer",
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
            backgroundPosition: "-67px 91px",
        },
    },
}));
export default useStylesAp