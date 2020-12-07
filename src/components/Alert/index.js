import React, { useContext } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { AlertContext } from '../../contexts/AlertContext'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Index() {
    let { message, open, type, handleCloseAlert } = useContext(AlertContext)
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert  severity={type}>
                {message}
            </Alert>
        </Snackbar>
    )
}
