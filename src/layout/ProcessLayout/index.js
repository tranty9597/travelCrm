import React from "react"

import { SideBar } from "../../common";
import { UikContainerHorizontal, UikContainerVertical } from "../../UikLayout";

import cls from "./styles.module.scss"
const menuLinks = [
    {
        text: "Appointments"
    },
    {
        text: "Customers"
    },
    {
        text: "Technicians"
    },
    {
        text: "System Settings"
    },
]

function ProcessLayout({ children }) {
    return (
        <UikContainerHorizontal>
            <SideBar
                listMenu={menuLinks}
                title="MENU"
            />

            <UikContainerVertical className={cls.childrenWraper} >
            
                {children}

            </UikContainerVertical>
        </UikContainerHorizontal>

    )
}

export default ProcessLayout