import React, { useContext } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import useStyles from '../../styles'
import { CoursesContext } from '../../contexts/CoursesContext'

export default function MyPagination() {
    const classes = useStyles()
    let { coursesData, itemPerPage, setPage } = useContext(CoursesContext)

    return (
        <>
            { coursesData && coursesData.length > 0 ?
                <div className={classes.root}>
                    <Pagination count={Math.ceil(coursesData.length / itemPerPage)} variant="outlined"
                        color="primary" shape="rounded" size='small' onChange={(e, value) => {
                            setPage(value)
                        }} />
                </div>
                : null
            }
        </>
    )
}
