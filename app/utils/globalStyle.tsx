import { StyleSheet } from "react-native";

// Color Palette
export const colors = {
    // Greens
    honeydew: "#F1FFF3",
    lightGreen: "#DFF7E2",
    caribbeanGreen: "#00D09E",
    
    // Dark Greens/Blacks
    cyprus: "#0E3E3E",
    fenceGreen: "#052224",
    void: "#031314",
    
    // Blues
    lightBlue: "#6DB6FE",
    vividBlue: "#3299FF",
    oceanBlue: "#0068FF",
};

// Typography - Poppins (Titles & Subtitles)
export const typography = StyleSheet.create({
    // Titles
    titleBold: {
        fontFamily: "Poppins-Bold",
        fontSize: 32,
        fontWeight: "bold",
    },
    titleSemibold: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 32,
        fontWeight: "600",
    },
    titleMedium: {
        fontFamily: "Poppins-Medium",
        fontSize: 32,
        fontWeight: "500",
    },
    titleRegular: {
        fontFamily: "Poppins-Regular",
        fontSize: 32,
        fontWeight: "400",
    },
    titleLight: {
        fontFamily: "Poppins-Light",
        fontSize: 32,
        fontWeight: "300",
    },
    titleThin: {
        fontFamily: "Poppins-Thin",
        fontSize: 32,
        fontWeight: "100",
    },
    
    // Subtitles
    subtitleBold: {
        fontFamily: "Poppins-Bold",
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitleSemibold: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        fontWeight: "600",
    },
    subtitleMedium: {
        fontFamily: "Poppins-Medium",
        fontSize: 24,
        fontWeight: "500",
    },
    subtitleRegular: {
        fontFamily: "Poppins-Regular",
        fontSize: 24,
        fontWeight: "400",
    },
    subtitleLight: {
        fontFamily: "Poppins-Light",
        fontSize: 24,
        fontWeight: "300",
    },
    subtitleThin: {
        fontFamily: "Poppins-Thin",
        fontSize: 24,
        fontWeight: "100",
    },
    
    // Heading styles
    heading1: {
        fontFamily: "Poppins-Bold",
        fontSize: 28,
        fontWeight: "bold",
    },
    heading2: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        fontWeight: "600",
    },
    heading3: {
        fontFamily: "Poppins-Medium",
        fontSize: 20,
        fontWeight: "500",
    },
    heading4: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        fontWeight: "500",
    },
    
    // Body text
    bodyLarge: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        fontWeight: "400",
    },
    bodyMedium: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        fontWeight: "400",
    },
    bodySmall: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        fontWeight: "400",
    },
    
    // Caption
    caption: {
        fontFamily: "Poppins-Light",
        fontSize: 12,
        fontWeight: "300",
    },
});

export default StyleSheet.create({
    customFont: {
        fontFamily: "Inter-Regular",
    }
});