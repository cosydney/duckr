import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "100%",
        "fontFamily": "sans-serif",
        "color": "#5F5F5F"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "100%",
        "fontFamily": "sans-serif",
        "color": "#5F5F5F"
    },
    "centeredContainer": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column"
    },
    "largeHeader": {
        "color": "#4a90e2",
        "fontWeight": "100",
        "fontSize": 100,
        "marginBottom": 20
    },
    "subHeader": {
        "color": "#4a90e2",
        "fontSize": 35,
        "textAlign": "center",
        "lineHeight": 55,
        "fontWeight": "100"
    },
    "errorMsg": {
        "color": "#FF7777",
        "fontSize": 22,
        "textAlign": "center"
    }
});