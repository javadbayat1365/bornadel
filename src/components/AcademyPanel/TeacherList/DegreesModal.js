import React, { useState, useRef } from 'react'
import { Modal, Grid, Fade, Typography } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import useOutSideClick from '../../Hook/useOutSideClick'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


export default function DegreesModal() {
    const classes = AcademePanelStyle()
    const [showDegree, setShowDegree] = useState(false)
    const [selectedDegree, setSelectedDegree] = useState(0)

    const selectRefDegree = useRef(null)
    useOutSideClick(selectRefDegree, () => {
        setShowDegree(false)
    })
    return (
        <Modal open="true">
            <Grid className={classes.addModaldiv} >
                <Grid container item alignItems="flex-start"  >
                    <Grid item className={classes.TeacherDetailTitle}>مدارک تحصیلی</Grid>
                </Grid>
                <Grid container item alignItems="center">
                    <Grid ref={selectRefDegree} item container justify="center"
                        alignItems="center" className={classes.inputGrid} wrap="nowrap" >
                        <span className={classes.DegreeModalTitle} >مدرک</span>
                        <Grid item container direction='row' alignItems="center"
                            onClick={() => setShowDegree(!showDegree)}
                            className={classes.addInput}>
                            <KeyboardArrowDownIcon color="primary" className={classes.KeyboardArrowDownIcon} />
                            <Typography className={classes.DegreeModalText}>
                                {selectedDegree === 0 ? "انتخاب کنید" : selectedDegree === 1 ? "دیپلم" : selectedDegree === 2 ? "کارشناسی" : selectedDegree === 3 ? "کارشناسی ارشد" : "دکترا"}
                            </Typography>
                        </Grid>
                        <Fade in={showDegree}>
                            <div className={classes.selectDegreeInModal}>
                                <Typography onClick={() => {
                                    setShowDegree(!showDegree)
                                    setSelectedDegree(1)
                                }}
                                    className={classes.DegreeModaleSelectItem}>دیپلم</Typography>
                                <Typography onClick={() => {
                                    setShowDegree(!showDegree)
                                    setSelectedDegree(2)
                                }}
                                    className={classes.DegreeModaleSelectItem}>کارشناسی</Typography>
                                <Typography onClick={() => {
                                    setShowDegree(!showDegree)
                                    setSelectedDegree(3)
                                }}
                                    className={classes.DegreeModaleSelectItem}>کارشناسی ارشد</Typography>
                                <Typography onClick={() => {
                                    setShowDegree(!showDegree)
                                    setSelectedDegree(4)
                                }}
                                    className={classes.DegreeModaleSelectItem}>دکترا</Typography>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}
