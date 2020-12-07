import React, { useContext, useRef } from 'react'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import useStyles from '../../styles'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import useOutSideClick from '../Hook/useOutSideClick'

export default function SearchBox() {
    const classes = useStyles();

    let {  ShowCloseIcon, SetSearchText, setShowSearchBox, ShowSearchBox, search, setSearch,
        searchData } = useContext(MasteLayoutContext)

    const SelectSearchBox = useRef(null)
    useOutSideClick(SelectSearchBox, () => {
        setShowSearchBox(false)
    })

    return (
        <Grid ref={SelectSearchBox} item container xs={10} className={classes.searchBox}>
            <Grid item className={classes.searchicon} style={{ backgroundColor: ShowSearchBox ? "#fff" : "#f0f0f0" }} >
            </Grid>
            <Grid item container className={classes.inputGrid}>
                <input type="text" placeholder="جستجو در برنادل ..." value={search} onChange={(e) => {
                    SetSearchText(e)
                }} className={classes.searchInput} style={{ backgroundColor: ShowSearchBox ? "#fff" : "#f0f0f0" }} />
            </Grid>
            <Grid item className={classes.CloseIconContainer} onClick={() => setSearch("")}
                style={{ display: ShowCloseIcon ? "block" : "none" }} >
                <CloseIcon classes={{ root: classes.CloseIcon }} />
            </Grid>
            <Grid item container className={classes.searchResult} style={{ display: ShowSearchBox ? "inline-block" : "none" }}>
                <Grid className={classes.lineINsearchResult}></Grid>
                {
                    searchData ? searchData.map((item, index) => {
                        return (
                            item.record_Type === 0 ?
                                <Grid container key={index}
                                    component={Link} to={`/Courses/${item.record_ID}/${item.record_Name}/${item.record_Type}`}
                                    className={classes.searchResultContainer}
                                    onClick={() => setSearch("")}>
                                    <span className={classes.searchResultText1}> نمایش همه دوره ها برای <span className={classes.searchRecordName}>{item.record_Name}</span></span>
                                </Grid> :
                                item.record_Type === 1 ?
                                    <Grid container key={index}
                                        component={Link} to={`/Courses/${item.record_ID}/${item.record_Name}/${item.record_Type}`}
                                        className={classes.searchResultContainer}
                                        onClick={() => setSearch("")}>
                                        <span className={classes.searchResultText2}>نمایش همه دوره های گروه  <span className={classes.searchRecordName}>{item.record_Name}</span></span>
                                    </Grid> :
                                    item.record_Type === 2 ?
                                        <Grid container key={index}
                                            component={Link} to={`/Courses/${item.record_ID}/${item.record_Name}/${item.record_Type}`}
                                            className={classes.searchResultContainer}
                                            onClick={() => setSearch("")}>
                                            <span className={classes.searchResultText3}>نمایش همه دوره های استاد <span className={classes.searchRecordName}>{item.record_Name}</span></span>
                                        </Grid> :
                                        item.record_Type === 3 ?
                                            <Grid container key={index}
                                                component={Link} to={`/Courses/${item.record_ID}/${item.record_Name}/${item.record_Type}`}
                                                className={classes.searchResultContainer}
                                                onClick={() => setSearch("")}>
                                                <span className={classes.searchResultText4}>نمایش همه دوره های آموزشگاه <span className={classes.searchRecordName}>{item.record_Name}</span></span>
                                            </Grid> :
                                            item.record_Type === 4 ?
                                                <Grid container style={{ backgroundColor: "#cccccc", height: 1 }}>
                                                </Grid> :
                                                item.record_Type === 5 ?
                                                    <Grid container key={index}
                                                        component={Link} to="/cource"
                                                        className={classes.searchResultContainer}
                                                        onClick={() => setSearch("")}>
                                                        <span className={classes.searchResultText5}>نمایش خبر  <span className={classes.searchRecordName2}>{item.record_Name}</span></span>
                                                    </Grid> :
                                                    item.record_Type === 6 ?
                                                        <Grid container key={index}
                                                            component={Link} to="/cource"
                                                            className={classes.searchResultContainer}
                                                            onClick={() => setSearch("")}>
                                                            <span className={classes.searchResultText6}>نمایش مقاله <span className={classes.searchRecordName2}>{item.record_Name}</span></span>
                                                        </Grid> :
                                                        null
                        )
                    })
                        : null}
            </Grid>
        </Grid>
    )
}
