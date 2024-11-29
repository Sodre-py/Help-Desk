import { Outlet } from 'react-router-dom'
import { Header } from "../../components/header/Header";
import { Table } from "../app/dashboard/Table";
import { Sidebar } from '../../components/sidebar/Sidebar';

import './index.css'
export function AppLayout(){
    return (
        <>
         <div className="app-container" >
            <Sidebar/>
        <div className="main-container" >
            <Header/>
            <Outlet/>
            </div>

            </div>
        </>
    )
}