import React, { createContext, useState } from 'react'
const AlertContext = createContext({
    handleOpenAlert: (type,message) => { },
    type:"",
    message:"",
    open:false,
    handleCloseAlert:()=>{}
})

export { AlertContext }

export default function AlertContextProvider({ children }) {
    const [type,setType]=useState("success")
    const [message,setMessage]=useState("")
    const [open,setOpen]=useState(false)
    const handleOpenAlert=(newtype,newmessage)=>{
        setType(newtype)
        setMessage(newmessage)
        setOpen(true)
    }
    const handleCloseAlert=()=>{
        setOpen(false)
    }
    return (
        <AlertContext.Provider value={{
            handleCloseAlert,handleOpenAlert,type,message,open
        }} >
            {children}
        </AlertContext.Provider>
    )
}
