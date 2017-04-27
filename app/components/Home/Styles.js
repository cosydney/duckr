import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "composes": "centeredContainer from 'sharedStyles/styles.css'"
    },
    "title": {
        "composes": "largeHeader from 'sharedStyles/styles.css'"
    },
    "slogan": {
        "composes": "subHeader from 'sharedStyles/styles.css'"
    }
});