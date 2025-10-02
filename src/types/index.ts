import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
export type InfoRowProps = {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    width?: number;
    style?: ViewStyle;
};

export type StatCardProps = {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
};
export type EvType = {
    icon: React.FC<SvgProps>;
    type: string;
};
export interface SelectVehicleType {
    title?: string;
    data: any[];
    selected: string | null;
    onSelect: (type: string) => void;
}
