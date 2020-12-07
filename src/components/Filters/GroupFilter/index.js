import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../../../styles'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLefttIcon from '@material-ui/icons/ChevronLeft';
import TreeItem from '@material-ui/lab/TreeItem';
import { useParams, Link } from "react-router-dom";
import { fetchPost } from '../../../config/Utils'
import Apis from '../../../constants/Api'

export default function GroupFilter() {
    let { id } = useParams()
    const classes = useStyles()
    const [treeData, setTreeData] = useState([])
    useEffect(() => {
        let body = {
            "record_ID": id,
            "record_Name": "",
            "record_Type": 1
        }
        fetchPost(Apis.Get_GetAllInClassRoomList, body).then(({ responseJSON, status }) => {
            setTreeData(responseJSON.data)
        })
    }, [id])

    return (
        <Grid item className={classes.groupFilter}>
            <Grid item className={classes.groupFilterHeader} ><Typography className={classes.groupFilterHeaderText}>دسته بندی</Typography></Grid>
            <TreeView
                className={classes.root}
                defaultExpanded={["1"]}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronLefttIcon />}
            >
                {
                    treeData && treeData.length > 0 ? treeData.map((item, index) => {
                        if (item.educationSubject_EducationSubject_Ref == null) {
                            return (
                                <TreeItem

                                    classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                    nodeId={`${item.educationSubject_ID}`}
                                    label={<Typography className={classes.treelableText} component={Link} to={`/Courses/${item.educationSubject_ID}`}>
                                        {item.educationSubject_Name}
                                    </Typography>}>
                                    {
                                        treeData.map((second, index) => {
                                            if (second.educationSubject_EducationSubject_Ref === item.educationSubject_ID) {
                                                return (
                                                    <TreeItem classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                                        key={index}
                                                        nodeId={`${second.educationSubject_ID}`}
                                                        label={<Typography className={classes.treelableText} component={Link} to={`/Courses/${second.educationSubject_ID}`}>
                                                            {second.educationSubject_Name}
                                                        </Typography>}>
                                                        {
                                                            treeData.map((third, index) => {
                                                                if (third.educationSubject_EducationSubject_Ref === second.educationSubject_ID) {
                                                                    return (
                                                                        <TreeItem classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                                                            key={index}
                                                                            nodeId={`${third.educationSubject_ID}`}
                                                                            label={<Typography className={classes.treelableText} component={Link} to={`/Courses/${third.educationSubject_ID}`}>
                                                                                {third.educationSubject_Name}
                                                                            </Typography>}>
                                                                        </TreeItem>
                                                                    )
                                                                }
                                                            }
                                                            )}
                                                    </TreeItem>
                                                )
                                            }
                                        }
                                        )}
                                </TreeItem>
                            )
                        }
                    }
                    ) : null}
            </TreeView>
        </Grid>
    )
}
