/** Globally used styles in app are declared here */

import { StyleSheet, Platform } from "react-native";
import { deviceHeight, OS, deviceType } from "../lib/globals";
import { headerGreen } from "../lib/colors";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";
import * as colors from "../lib/colors";

export const shadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  android: {
    elevation: 6
  }
});

export const smallShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 2
  },
  android: {
    elevation: 4
  }
});

export const textShadow = {
  textShadowColor: "rgba(0, 0, 0, 0.75)",
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 5
};

export const appStyles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(10),
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch", 
    paddingVertical: verticalScale(5) 
  },  
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  disabledButton: {
    backgroundColor: `${colors.gray}dd`
  },
  checkbox: {
    borderRadius: 0,
    left: 0,
    borderColor: `${colors.gray}5f`,
    width: deviceType == "Phone" ? 18 : 22,
    height: deviceType == "Phone" ? 18 : 22,
    padding: deviceType == "Phone" ? 0 : 2,
    paddingLeft: OS === "ios" ? (deviceType == "Phone" ? 3 : 5) : 1
  },
  footerText: {
    fontFamily: OS == "ios" ? "Roboto-Light" : "Roboto-Light_1",
    fontSize: moderateScale(12), // fontsize small
    textAlign: "center"
  },
  link: {
    color: colors.fontGreen,
    textDecorationLine: "underline",
    textDecorationColor: `${colors.fontGreen}88`,
    textDecorationLine: "underline",
    fontFamily: OS == "ios" ? "Roboto-Light" : "Roboto-Light_1"
  },
  robotoRegular: {
    fontFamily: OS == "ios" ? "Roboto-Light" : "Roboto-Light_1"
  },
  robotoDemi: {
    fontFamily: OS == "ios" ? "Roboto-Medium" : "Roboto-Medium_1"
  },
  robotoBold: {
    fontFamily: OS == "ios" ? "Roboto-Bold" : "Roboto-Bold_1"
  },
  buttonHeight: {
    paddingBottom: OS == "ios" ? (deviceHeight == 812 ? 15 : 0) : 0,
    height:
      deviceType == "Phone"
        ? OS == "ios"
          ? deviceHeight == 812
            ? 65
            : 45
          : 45
        : 65,
    backgroundColor: headerGreen,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: OS == "ios" ? 0 : 0
  },
  marginHorizontal20: {
    marginHorizontal: deviceType == "Phone" ? 20 : 40
  },
  paddingHorizontal20: {
    paddingHorizontal: deviceType == "Phone" ? 20 : 40
  },
  marginVertical20: {
    marginVertical: deviceType == "Phone" ? 20 : 40
  },
  paddingVertical20: {
    paddingVertical: deviceType == "Phone" ? 20 : 40
  },
  cardLogo: {
    height: deviceType == "Phone" ? 90 : 150,
    width: deviceType == "Phone" ? 90 : 175
  },
  res: size => moderateScale(size),
  resHeight: h => verticalScale(h),
  resWidth: w => scale(w),
  marginH: length => ({ marginHorizontal: scale(length) })
});

export const iconSize = deviceType == "Phone" ? 26 : 35;
export const customIconSize = deviceType == "Phone" ? 30 : 35;
