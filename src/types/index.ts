import { SvgProps } from "react-native-svg";

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
