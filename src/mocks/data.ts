
import Bike from "@assets/svg/bike.svg"
import Car from "@assets/svg/ev-car.svg"
import Truck from "@assets/svg/Truck.svg"
import Rickshaw from "@assets/svg/rickshaw.svg"
import BMW from "@assets/svg/bmw.svg"
import Kia from "@assets/svg/kia.svg"
import Hyundai from "@assets/svg/hyundai.svg"
import Tata from "@assets/svg/tata.svg"
import Volvo from "@assets/svg/volvo.svg"
import Ford from "@assets/svg/ford.svg"
import { EvType } from "@/types"


export const steps = ["Vehicle Type", "Select Brand", "Select Model"];

export const brandData: EvType[] = [
    {
        icon: BMW,
        type: "BMW",
    },
    {
        icon: Kia,
        type: "Kia",
    },
    {
        icon: Hyundai,
        type: "Hyundai",
    },
    {
        icon: Tata,
        type: "Tata Moters",
    },
    {
        icon: Volvo,
        type: "Volvo",
    },
    {
        icon: Ford,
        type: "Ford",
    }
]

export const evTypeData: EvType[] = [
    {
        icon: Bike,
        type: "Two Wheelers"
    },
    {
        icon: Car,
        type: "Four Wheelers"
    },
    {
        icon: Rickshaw,
        type: "Three Wheelers"
    },
    {
        icon: Truck,
        type: "Eight Wheelers"
    },
]

export interface ModalDataType {
    name: string;
    connectors: string;
    kwh: number;
    range: string;
    dcFast: string;
    image: string;
}

export const modalTypeData = ["Compact SUV", "Luxury SUV", "Luxury Sedan"];

export const modalData: ModalDataType[] = [
    {
        name: "BMW i3",
        connectors: "CCS2",
        kwh: 75,
        range: "480 km",
        dcFast: "30 min",
        image: "",
    },
    {
        name: "BMW i3",
        connectors: "CHAdeMO",
        kwh: 75,
        range: "480 km",
        dcFast: "30 min",
        image: "",
    },
];

export interface Transaction {
    id: string;
    title: string;
    date: string;
    amount: string;
    time: string;
    type: "Topup" | "Charging";
    picture?: string | null;
}

export const transactionHistory: Transaction[] = [
    {
        id: "1",
        title: "Top Up Wallet",
        date: "July 14, 2005",
        amount: "$10.0",
        time: "10:30 PM",
        type: "Topup",
        picture: null,
    },
    {
        id: "2",
        title: "EV Charging – Green Mall Station",
        date: "July 14, 2005",
        amount: "$12.8",
        time: "10:30 PM",
        type: "Charging",
        picture: null,
    },
    {
        id: "3",
        title: "EV Charging – Jio EV Hub",
        date: "July 14, 2005",
        amount: "$11.1",
        time: "10:30 PM",
        type: "Charging",
        picture: null,
    },
];


export const filterStation = ["All", "EV Charging", "Parking", "Nearest"]
export interface NearByStationType {
    stationName: string,
    stationAddress: string,
    slot: string,
    stationType: "EV Charging" | "Parking" | "EV Charging + Parking",
    stationRate: string,
    stationImage: string
}

export const nearByStation: NearByStationType[] = [
    {
        stationName: "Tata Power Station",
        stationAddress: "5th Block, Koramangala, 1KM Away",
        slot: "4 Available",
        stationType: "EV Charging",
        stationRate: "18$",
        stationImage: "https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        stationName: "Orion Mall Parking",
        stationAddress: "Rajajinagar New Bengaluru , 1.0 KM Away",
        slot: "8 Available",
        stationType: "Parking",
        stationRate: "18$",
        stationImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
