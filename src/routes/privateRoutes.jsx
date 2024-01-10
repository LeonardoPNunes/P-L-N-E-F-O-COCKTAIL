import React from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateRoutes({children}){
const validated = localStorage.getItem('validated')


return validated ? children : <Navigate to="/login"/>
}