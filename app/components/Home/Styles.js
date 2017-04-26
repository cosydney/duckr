import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column"
    },
    "title": {
        "color": "#4a90e2",
        "fontWeight": "100",
        "fontSize": 100,
        "marginBottom": 20
    },
    "slogan": {
        "color": "#4a90e2",
        "fontSize": 35,
        "textAlign": "center",
        "lineHeight": 55,
        "fontWeight": "100"
    }
});