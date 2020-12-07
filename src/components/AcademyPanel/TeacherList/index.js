import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import { AcademyPanelContext } from '../../../contexts/AcademyPanelContext'
import TableBody from './TableBody'
import Degrees from './Degrees'
import Documentation from './Documentation'
import TeacherDetail from './TeacherDetail'
import AddDegrees from './AddDegrees'
import AddDocumentation from './AddDocumentation'


export default function TeacherList() {
    const classes = AcademePanelStyle()
    let { pageTypeTeacherList, setPageTypeTeacherList } = useContext(AcademyPanelContext)


    return (
        <>
            {
                pageTypeTeacherList === 1 ?
                    <Grid container className={classes.TeacherListContainer} >
                        <Grid container justify="space-between" alignItems="center" item>
                            <Grid item className={classes.HeaderTextTeacherList}>لیست مدرسین</Grid>
                            <Grid item className={classes.IconContainerTeacherList}>
                                <span className={classes.editTeacherINTeacherList}></span>
                                <span className={classes.deleteTeacherINTeacherList}></span>
                                <span onClick={() => { setPageTypeTeacherList(2) }} className={classes.addTeacherINTeacherList}></span>
                            </Grid>
                        </Grid>
                        <Grid container item className={classes.teachrListTableContainer} >
                            <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                                {/* <span className={classes.checkBoxType}></span> */}
                                <Grid item xs className={classes.teacherLiseTableHeaderField}>نام</Grid>
                                <Grid item xs className={classes.teacherLiseTableHeaderField}>نام خانوادگی</Grid>
                                <Grid item xs className={classes.teacherLiseTableHeaderField}>تاریخ تولد</Grid>
                                <Grid item xs className={classes.teacherLiseTableHeaderField}>شماره شناسنامه</Grid>
                                <Grid item xs className={classes.teacherLiseTableHeaderField}>کد ملی</Grid>
                            </Grid>
                            <Grid container item>
                                <TableBody teacher={{
                                    index: 0,
                                    name: "رضا",
                                    lastName: "موسوی",
                                    birthday: "1372/08/23",
                                    shCode: "0012345678987",
                                    nationalCode: "00123456789876",
                                    phone: "02166336633",
                                    mobile: "09123456789",
                                    address: "خیابان نواب بین کلهر وآزادی نبش کوچه یوسفیان پلاک 653 طبقه5 واحد 6"
                                }} />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} style={{ paddingLeft: 10 }}>
                            <Degrees />
                        </Grid>
                        <Grid container item xs={6} style={{ paddingRight: 10 }}>
                            <Documentation />
                        </Grid>
                    </Grid>
                    : pageTypeTeacherList === 2 ?
                        <TeacherDetail />
                        : pageTypeTeacherList === 3 ?
                            <AddDegrees />
                            :
                            <AddDocumentation />
            }
        </>
    )
}
