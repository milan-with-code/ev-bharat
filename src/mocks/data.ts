
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
