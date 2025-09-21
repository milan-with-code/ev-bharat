import React from "react";
import { Dimensions } from "react-native";
import Svg, {
    Path,
    Defs,
    LinearGradient,
    Stop,
    Line,
    Rect,
    Text as SvgText,
} from "react-native-svg";

type WeeklyChartCardProps = {
    data: number[];
    maxValue?: number;
    totalCharged: number;
    highlightIndex?: number;
};

export default function WeeklyChartCard({
    data,
    maxValue = 80,
    totalCharged,
    highlightIndex = 1,
}: WeeklyChartCardProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const chartWidth = screenWidth - 64;
    const chartHeight = 200;

    const margin = { top: 10, right: 10, bottom: 20, left: 20 };

    const width = chartWidth - margin.left - margin.right;
    const height = chartHeight - margin.top - margin.bottom;

    const xStep = width / (data.length - 1);
    const yScale = (val: number) =>
        height - (val / maxValue) * height;

    const createSmoothPath = () => {
        let d = "";
        for (let i = 0; i < data.length; i++) {
            const x = margin.left + i * xStep;
            const y = margin.top + yScale(data[i]);

            if (i === 0) {
                d += `M ${x},${y}`;
            } else {
                const prevX = margin.left + (i - 1) * xStep;
                const prevY = margin.top + yScale(data[i - 1]);
                const midX = (prevX + x) / 2;
                d += ` Q ${midX},${prevY} ${x},${y}`;
            }
        }
        return d;
    };

    const pathData = createSmoothPath();

    return (
        <Svg width={chartWidth} height={chartHeight}>
            <Defs>
                <LinearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#379D67" stopOpacity="0.3" />
                    <Stop offset="1" stopColor="#379D67" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            {[0, 20, 40, 60, 80].map((val, i) => {
                const y = margin.top + yScale(val);
                return (
                    <React.Fragment key={i}>
                        <Line
                            x1={margin.left}
                            x2={margin.left + width}
                            y1={y}
                            y2={y}
                            stroke="#E5E5E5"
                            strokeDasharray="4"
                            strokeWidth="1"
                        />
                        <SvgText
                            x={margin.left - 2}
                            y={y + 4}
                            textAnchor="end"
                            fill="#212427"
                            fontSize={12}
                            letterSpacing="0.5"
                            fontFamily="Outfit_400Regular"
                        >
                            {val}
                        </SvgText>
                    </React.Fragment>
                );
            })}

            <Path
                d={`${pathData} L ${margin.left + width},${margin.top + height} L ${margin.left},${margin.top + height} Z`}
                fill="url(#fillGradient)"
            />
            <Path d={pathData} stroke="#379D67" strokeWidth={2} fill="none" />

            {highlightIndex !== undefined && (
                <>
                    <Line
                        x1={margin.left + highlightIndex * xStep}
                        x2={margin.left + highlightIndex * xStep}
                        y1={margin.top}
                        y2={margin.top + height}
                        stroke="#62BA8B"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                    />
                    <Rect
                        x={margin.left + highlightIndex * xStep - 20}
                        y={margin.top + yScale(data[highlightIndex]) - 30}
                        rx={6}
                        ry={6}
                        width={50}
                        height={22}
                        fill="#E6F6EE"
                    />
                    <SvgText
                        x={margin.left + highlightIndex * xStep + 5}
                        y={margin.top + yScale(data[highlightIndex]) - 15}
                        textAnchor="middle"
                        fontSize={12}
                        fill="#379D67"
                        fontWeight="bold"
                    >
                        {`${data[highlightIndex]} kwh`}
                    </SvgText>
                </>
            )}

            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                <SvgText
                    key={i}
                    x={margin.left + i * xStep}
                    y={margin.top + height + 20}
                    textAnchor="middle"
                    fontSize={12}
                    letterSpacing="0.5"
                    fill="#212427"
                    fontFamily="Outfit_400Regular"

                >
                    {day}
                </SvgText>
            ))}
        </Svg>
    );
}

