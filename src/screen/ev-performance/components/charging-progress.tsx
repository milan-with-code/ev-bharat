import React from "react";
import Svg, { Circle, Path, Defs, LinearGradient, Stop, ClipPath, Rect, G } from "react-native-svg";

type ChargingCircleProps = {
    percentage: number;
};

export default function ChargingCircle({ percentage }: ChargingCircleProps) {
    const size = 40;
    const strokeWidth = 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (circumference * percentage) / 100;

    return (
        <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
            <Circle cx={20} cy={20} r={19} fill="#F2F4F8" />

            <Circle
                cx={20}
                cy={20}
                r={19}
                stroke="#E6E6E6"
                strokeWidth={strokeWidth}
                fill="none"
            />

            <Circle
                cx={20}
                cy={20}
                r={19}
                stroke="url(#paint0_linear)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
            />

            <G clipPath="url(#clip0)">
                <Path
                    d="M20.6681 13.334L20.6801 13.3347L20.6908 13.3353L20.7461 13.3387L20.7535 13.34H20.7608L20.7861 13.346L20.8208 13.3513L20.8315 13.3553L20.8388 13.356L20.8581 13.3633L20.8928 13.3727L20.9055 13.3787L20.9155 13.3813L20.9341 13.3907L20.9608 13.402L20.9748 13.41L20.9895 13.4167L21.0048 13.4267L21.0255 13.438L21.0481 13.454L21.0601 13.4613L21.0688 13.4693L21.0848 13.4807L21.1101 13.5033L21.1248 13.5147L21.1301 13.5213L21.1395 13.5293L21.1635 13.5567L21.1808 13.5747L21.1848 13.5807C21.2648 13.6787 21.3155 13.7953 21.3301 13.9227L21.3308 13.9307L21.3321 13.958L21.3348 14.0007V18.0007H24.6681C24.785 18.0006 24.8998 18.0313 25.001 18.0896C25.1023 18.1479 25.1864 18.2318 25.245 18.3329C25.3036 18.434 25.3347 18.5487 25.335 18.6655C25.3353 18.7824 25.3049 18.8973 25.2468 18.9987L25.2068 19.0593L19.8735 26.3927C19.4948 26.9147 18.6681 26.646 18.6681 26.0007V22.0007H15.3348C15.218 22.0007 15.1032 21.97 15.0019 21.9117C14.9007 21.8534 14.8165 21.7695 14.7579 21.6684C14.6993 21.5673 14.6683 21.4526 14.668 21.3358C14.6677 21.2189 14.6981 21.104 14.7561 21.0027L14.7961 20.942L20.1295 13.6087L20.1361 13.6L20.1481 13.584L20.1701 13.5587L20.1821 13.544L20.1881 13.5387L20.1968 13.5293L20.2235 13.5053L20.2421 13.488L20.2475 13.484C20.3256 13.42 20.4172 13.3747 20.5155 13.3513L20.5228 13.3507L20.5408 13.3473L20.5901 13.3387L20.5975 13.338L20.6248 13.3367L20.6681 13.334Z"
                    fill="#379D67"
                />
            </G>

            <Defs>
                <LinearGradient id="paint0_linear" x1="20" y1="40" x2="20" y2="0" gradientUnits="userSpaceOnUse">
                    <Stop offset="0" stopColor="#379D67" />
                    <Stop offset="0.75" stopColor="#62BA8B" />
                    <Stop offset="1" stopColor="#EEA558" />
                </LinearGradient>

                <ClipPath id="clip0">
                    <Rect width={16} height={16} fill="white" transform="translate(12 12)" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
