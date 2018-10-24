import React from "react"

import { SideBar } from "../../common";
import { UikContainerHorizontal, UikContainerVertical } from "../../UikLayout";

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

function ProcessLayout({ children, sidebar }) {
    return (
        <UikContainerHorizontal>
            <SideBar
                listMenu={menuLinks}
                title="MENU"
            />
            <UikContainerVertical className='p-5'>
                {children}

            </UikContainerVertical>
        </UikContainerHorizontal>

    )
}

export default ProcessLayout