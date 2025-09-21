import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

const ProgressBar = ({ progress = 72 }) => {
  const width = 113;
  const height = 44;
  const cornerRadius = 15;

  const arrowWidth = 10;
  const progressWidth = (width - arrowWidth) * (progress / 100);

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Path
          d={`
            M ${cornerRadius} 0
            H ${width - arrowWidth}
            L ${width} ${height / 2}
            L ${width - arrowWidth} ${height}
            H ${cornerRadius}
            Q 0 ${height} 0 ${height - cornerRadius}
            V ${cornerRadius}
            Q 0 0 ${cornerRadius} 0
            Z
          `}
          fill="#F2F4F8"
        />
        <Path
          d={`
            M ${cornerRadius} 0
            H ${progressWidth}
            L ${Math.min(progressWidth + arrowWidth, width)} ${height / 2}
            L ${progressWidth} ${height}
            H ${cornerRadius}
            Q 0 ${height} 0 ${height - cornerRadius}
            V ${cornerRadius}
            Q 0 0 ${cornerRadius} 0
            Z
          `}
          fill={Colors.primary}
        />
      </Svg>
      <View style={styles.textWrapper}>
        <ThemedText type="defaultSemiBold" fontVariant="semiBold" color="white" >{progress}%</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  textWrapper: {
    position: "absolute",
    width: 113,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ProgressBar;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import { Colors } from "@/constants/Colors";

// type Props = {
//   progress: number; // 0 - 100
//   height?: number;
//   width?: number;
// };

// const ProgressBar: React.FC<Props> = ({ progress, height = 40, width = 200 }) => {
//   const cornerRadius = 10;
//   const arrowWidth = 25;

//   const progressWidth = ((width - arrowWidth) * progress) / 100;

//   return (
//     <View style={{ width, height }}>
//       <Svg width={width} height={height}>
//         {/* Background (gray) */}
//         <Path
//           d={`
//             M ${cornerRadius} 0
//             H ${width - arrowWidth}
//             L ${width} ${height / 2}
//             L ${width - arrowWidth} ${height}
//             H ${cornerRadius}
//             Q 0 ${height} 0 ${height - cornerRadius}
//             V ${cornerRadius}
//             Q 0 0 ${cornerRadius} 0
//             Z
//           `}
//           fill={"#f1f3f6"} // light gray
//           stroke={"#000"}
//           strokeWidth={1}
//         />

//         {/* Progress (green) */}
//         <Path
//           d={`
//             M ${cornerRadius} 0
//             H ${progressWidth}
//             L ${Math.min(progressWidth + arrowWidth, width)} ${height / 2}
//             L ${progressWidth} ${height}
//             H ${cornerRadius}
//             Q 0 ${height} 0 ${height - cornerRadius}
//             V ${cornerRadius}
//             Q 0 0 ${cornerRadius} 0
//             Z
//           `}
//           fill={Colors.primary || "#4CAF50"}
//         />
//       </Svg>

//       {/* Centered text */}
//       <View style={styles.textWrapper}>
//         <Text style={styles.text}>{progress}%</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textWrapper: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#fff",
//   },
// });

// export default ProgressBar;
