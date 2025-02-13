import Orders from "@/components/displayedView/Orders";
import Tasks from "@/components/displayedView/Tasks";
import { FaLuggageCart, FaGift, FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaSquarePollVertical } from "react-icons/fa6";


export const sidebarLinks = [
    {
        id: 1,
        name: 'Orders',
        icon: <MdDashboard />,
        comp: <Tasks />,
    },
    {
        id: 2,
        name: 'order',
        icon: <FaLuggageCart />,
        comp: <Orders />,
    },
    {
        id: 3,
        name: 'order',
        icon: <FaGift  />,
        comp: <Tasks />,
    },
    {
        id: 4,
        name: 'order',
        icon: <FaSquarePollVertical />,
        comp: <Tasks />,
    },
    {
        id: 5,
        name: 'order',
        icon: <FaCog />,
        comp: <Tasks />,
    },

]