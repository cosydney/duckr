import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "button": {
        "background": "#3B5998",
        "color": "#fff",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderRadius": 5,
        "borderWidth": 0,
        "fontSize": 25,
        "cursor": "pointer"
    },
    "button:hover": {
        "background": "#1542A0"
    }
});