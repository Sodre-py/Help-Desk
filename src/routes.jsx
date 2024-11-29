import {createBrowserRouter,  } from "react-router-dom";
import { AppLayout } from "./pages/layout/app";
import { Dashboard } from "./pages/app/dashboard/Dashboard";
import { Ticket } from "./pages/app/ticket/Ticket";
import { Pausados } from "./pages/app/ticket/pausados"
import { Finalizados } from "./pages/app/ticket/finalizados";
//import { Sidebar } from "./components/sidebar/Sidebar";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: < AppLayout />, 
        children: [{ path: '/', element: <Dashboard /> }]
    },

    {
        path: '/',
        element: <AppLayout/>,
        children: [
            { path: '/ticket', element: <Ticket/> },
            { path: '/ticket/pausados', element: <Pausados/> },
            { path: '/ticket/finalizados', element: <Finalizados/> },

        ]
    },
    
  ]);
