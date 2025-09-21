import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
    acPercent: number; // Eco (AC)
    dcPercent: number; // Fast (DC)
};

const AC_COLOR = "#F6A609";
const DC_COLOR = "#379D67";

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
    const startCoord = polarToCartesian(cx, cy, r, end);
    const endCoord = polarToCartesian(cx, cy, r, start);
    const largeArc = end - start <= 180 ? "0" : "1";
    return `M ${startCoord.x} ${startCoord.y} A ${r} ${r} 0 ${largeArc} 0 ${endCoord.x} ${endCoord.y}`;
}

export default function ChargingHistoryChart({ acPercent, dcPercent }: Props) {
    const cx = 154;
    const cy = 50;
    const r = 40; // radius smaller so strokes fit nicely

    const ac = Math.max(0, Math.min(100, acPercent));
    const dc = Math.max(0, Math.min(100, dcPercent));

    const start = -90;
    const dcAngle = (dc / 100) * 360;
    const acAngle = (ac / 100) * 360;

    const dcPath = describeArc(cx, cy, r, start, start + dcAngle);
    const acPath = describeArc(cx, cy, r, start + dcAngle, start + dcAngle + acAngle);

    return (
        <View style={{ width: "100%", }}>


            {/* Donut with connectors */}
            <Svg width={311} height={100} viewBox="0 0 311 100" fill="none">
                {/* Left dot */}
                <Circle cx={40.5} cy={28} r={8} fill={DC_COLOR} />

                {/* Left connector */}
                <Path
                    d="M47 28h25.153c5.522 0 10 4.477 10 10v21c0 5.523 4.477 10 10 10H108"
                    stroke={DC_COLOR}
                    strokeWidth={2}
                />

                {/* Background circle */}
                <Circle cx={cx} cy={cy} r={r} stroke="#E6ECE8" strokeWidth={20} fill="none" />

                {/* DC arc */}
                <Path
                    d={dcPath}
                    stroke={DC_COLOR}
                    strokeWidth={20}
                    strokeLinecap="round"
                    fill="none"
                />

                {/* AC arc */}
                <Path
                    d={acPath}
                    stroke={AC_COLOR}
                    strokeWidth={20}
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Right dot */}
                <Circle cx={269.5} cy={28} r={8} fill={AC_COLOR} />

                {/* Right connector */}
                <Path
                    d="M261.5 28H239c-5.523 0-10 4.477-10 10v22.5c0 5.523-4.477 10-10 10h-20"
                    stroke={AC_COLOR}
                    strokeWidth={2}
                />
            </Svg>

            <View style={[styles.content, { left: 16 }]}>
                <ThemedText type="labelMedium" >Eco (AC)</ThemedText>
                <ThemedText type="label" fontVariant="semiBold">{ac}%</ThemedText>
            </View>

            <View style={[styles.content, { right: 16 }]}>
                <ThemedText type="labelMedium" >Fast (DC)</ThemedText>
                <ThemedText type="label" fontVariant="semiBold">{dc}%</ThemedText>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        top: 45,
        alignItems: "center",
    },
    label: {
        fontSize: 12,
        color: "#333",
    },
    percent: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 2,
    },
});
