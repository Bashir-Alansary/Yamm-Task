import Orders from "@/components/displayedView/Orders";
import { FaLuggageCart, FaGift, FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaSquarePollVertical } from "react-icons/fa6";
import Dashboard from "@/components/displayedView/Dashboard";
import Coupons from "@/components/displayedView/Coupons";
import Report from "@/components/displayedView/Report";
import Setting from "@/components/displayedView/Setting";


export const sidebarLinks = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <MdDashboard />,
        comp: <Dashboard />,
    },
    {
        id: 2,
        name: 'Orders',
        icon: <FaLuggageCart />,
        comp: <Orders />,
    },
    {
        id: 3,
        name: 'Coupons',
        icon: <FaGift  />,
        comp: <Coupons />,
    },
    {
        id: 4,
        name: 'Report',
        icon: <FaSquarePollVertical />,
        comp: <Report />,
    },
    {
        id: 5,
        name: 'Setting',
        icon: <FaCog />,
        comp: <Setting />,
    },

]

export const ordersTableThs = [
    {
        id: 1,
        name: "Order"
    },
    {
        id: 2,
        name: "Store"
    },
    {
        id: 3,
        name: "Reason"
    },
    {
        id: 4,
        name: "Amount"
    },
    {
        id: 5,
        name: "Items"
    },
    {
        id: 6,
        name: "Actions"
    },
]

export const decisionItems = [
    {
        id: 1,
        name: "reject",
        value: "reject",
    },
    {
        id: 2,
        name: "accept",
        value: "accept",
    },
    {
        id: 3,
        name: "escalate",
        value: "escalate",
    },
]