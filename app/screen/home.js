import * as React from 'react';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { appStyles, shadow, smallShadow } from "../styles/appStyles";
import * as colors from "../lib/colors";
import * as sizes from "../lib/fontSizes";

import SponsorImage from "../assets/images/sponsored.jpg";
import Promo1 from "../assets/images/promo1.png";
import Promo2 from "../assets/images/promo2.jpg";

const { useState } = React;
const { res, resHeight, resWidth, container } = appStyles;

const features = [
    { name: "Restaurant", icon: "ios-restaurant", type: "Ionicons" },
    { name: "Mart", icon: "shop", type: "Entypo" },
    { name: "Express", icon: "package", type: "MaterialCommunityIcons" },
    { name: "Token", icon: "mobile", type: "Entypo" },
    { name: "Car", icon: "ios-car-sport", type: "Ionicons" },
    { name: "Bike", icon: "motorbike", type: "MaterialCommunityIcons" },
    { name: "Insurance", icon: "ios-umbrella", type: "Ionicons" },
    { name: "More", icon: "dots-three-horizontal", type: "Entypo" }
]

export default function Home() {
    const [value, onChangeText] = useState();
    return (
        <ScrollView>
            {/* HEADER SECTION */}
            <View style={{ ...container, backgroundColor: colors.primaryColor, paddingTop: resHeight(10) }}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity style={styles.qrContainer}>
                        <Ionicons name={"ios-qr-code-outline"} size={20} color={'gray'} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                        <Ionicons name={"ios-search"} size={15} color={'gray'} />
                        <TextInput
                            style={{ height: 40, color: "black" }}
                            onChangeText={text => onChangeText(text)}
                            placeholder={'Offers, food, and places to go'}
                            value={value}
                        />
                    </View>
                </View>
                <View style={{ paddingBottom: resHeight(10), paddingLeft: resWidth(10), position: "relative" }} >
                    <Text style={{ fontSize: sizes.large, fontWeight: 'bold', color: colors.white, lineHeight: resHeight(25) }}>Bulan penuh cinta dan cuan</Text>
                    <Text style={{ fontSize: sizes.medium, color: colors.white }}>Dapetin cashback 90% dari OVO</Text>
                    <TouchableOpacity style={{ ...styles.chevronCircle }}>
                        <View style={styles.centerAbsolute}>
                            <EvilIcons name={"chevron-right"} size={20} color={colors.white} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* WALLET INFORMATION SECTION */}
            <View style={styles.walletContainer}>
                <TouchableOpacity style={{ ...styles.walletSection }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.walletCircle}>
                            <View style={styles.centerAbsolute}>
                                <Text style={{ fontSize: sizes.xSmall, color: colors.purple }}>OVO</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: sizes.xSmall, color: colors.lightGray }}>
                                RP
                            </Text>
                            <Text> 150.002</Text>
                            <EvilIcons style={{ alignSelf: "center" }} name={"chevron-right"} size={20} color={colors.lightGray} />

                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.walletSeparator} />
                <TouchableOpacity style={{ ...styles.walletSection, paddingLeft: resWidth(10) }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.walletCircle}>
                            <View style={styles.centerAbsolute}>
                                <MaterialCommunityIcons name={"crown"} size={sizes.large} color={colors.purple} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "black" }}> 25,000 Points</Text>
                            <EvilIcons style={{ alignSelf: "center" }} name={"chevron-right"} size={20} color={colors.lightGray} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* GRAB CORE FEATURES */}
            <View style={{ ...container, borderBottomWidth: 2, borderColor: colors.lightestGray }}>
                <TouchableOpacity style={styles.topupContainer}>
                    <Ionicons style={{ marginRight: resWidth(8) }} name={"ios-wallet-outline"} size={20} color={colors.black} />
                    <Text style={{ fontWeight: 'bold' }}>Top Up</Text>
                    <Entypo name={"dot-single"} size={10} color={colors.black} />
                    <Text style={{ fontWeight: "100" }}>Wallet</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", flexWrap: 'wrap', alignItems: 'center', justifyContent: "space-around" }}>
                    {features.map((el) => {
                        let featureIcon;
                        let featureSize = el.name === "More" ? 25 : 35;
                        let featureColor = colors.primaryColor
                        if (el.type === "Entypo") {
                            featureIcon = <Entypo name={el.icon} size={featureSize} color={featureColor} />
                        } else if (el.type === "Ionicons") {
                            featureIcon = <Ionicons name={el.icon} size={featureSize} color={featureColor} />
                        } else if (el.type === "MaterialCommunityIcons") {
                            featureIcon = <MaterialCommunityIcons name={el.icon} size={featureSize} color={featureColor} />
                        }
                        return (
                            <View style={{ flexDirection: "column", alignItems: 'center' }} key={el.name}>

                                <TouchableOpacity style={{ ...styles.featureCircle, backgroundColor: el.name === "More" ? colors.lightestGray : colors.lighterGreen }}>
                                    <View style={styles.centerAbsolute}>
                                        {featureIcon}
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: sizes.medium, marginVertical: resHeight(8) }}>{el.name}</Text>
                            </View>
                        )

                    })}

                </View>
            </View>

            <TouchableOpacity style={{ ...container, paddingTop: resHeight(10), paddingBottom: resHeight(10) }}>
                <Image
                    source={SponsorImage}
                    style={{
                        height: resHeight(170),
                        width: "100%",
                        resizeMode: "stretch",
                        borderRadius: 5,
                        marginBottom: resHeight(5)
                    }}
                />
                <Text style={{ fontWeight: 'bold', marginBottom: resHeight(3) }}>Selasa Makin Puas diskon pulsa!!</Text>
                <Text style={{ fontSize: sizes.small, color: colors.lightGray }}>Sponsored by Arga</Text>

            </TouchableOpacity>

            <View style={{ ...container, paddingTop: resHeight(10), paddingBottom: resHeight(10) }}>
                {[1, 2, 3, 4].map((el) => {
                    return (
                        <View style={{ flexDirection: "column", marginBottom: resHeight(10) }} key={el + "card"}>
                            <Text style={styles.promoTitle}>Sambut minggu penuh perayaan {el} </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity style={styles.promoCardContainer}>
                                    <Image
                                        source={Promo1}
                                        style={styles.promoImage}
                                    />
                                    <Text style={{ fontWeight: 'bold', marginBottom: resHeight(3) }}>Rayakan imlek dengan promo bareng keluarga</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name={"ios-calendar-outline"} size={sizes.small} color={colors.lightGray} />
                                        <Text style={{ fontSize: sizes.small, color: colors.lightGray, marginLeft: resWidth(5) }}>Until 14 feb</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.promoCardContainer}>
                                    <Image
                                        source={Promo2}
                                        style={styles.promoImage}
                                    />
                                    <Text style={{ fontWeight: 'bold', marginBottom: resHeight(3) }}>Kapanlagi Beli 1 Gratis 1 !! Cuma-cuma</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name={"ios-calendar-outline"} size={sizes.small} color={colors.lightGray} />
                                        <Text style={{ fontSize: sizes.small, color: colors.lightGray, marginLeft: resWidth(5) }}>Until 21 feb</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}

            </View>
        </ScrollView>
    );
}

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch",
        width: "100%",
        height: resHeight(30),
        borderWidth: appStyles.resWidth(0.2),
        borderColor: "gray",
        borderRadius: 2,
        backgroundColor: "white",
        marginBottom: resHeight(15)
    },
    qrContainer: {
        paddingVertical: res(2),
        paddingHorizontal: res(10),
        marginRight: resWidth(10),
        backgroundColor: colors.gray,
        height: "100%",
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        justifyContent: "center"
    },
    walletContainer: {
        ...container,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: colors.lightestGray,
        paddingVertical: 0,
    },
    walletSection: {
        width: "50%",
        paddingVertical: resHeight(10),

    },
    walletCircle: {
        borderColor: colors.lighterGray,
        borderWidth: 2,
        borderRadius: 99999,
        height: res(30),
        width: res(30),
        marginRight: resWidth(8)
    },
    walletSeparator: {
        height: "100%",
        borderColor: colors.lightestGray,
        borderRightWidth: 2
    },
    centerAbsolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topupContainer: {
        ...shadow,
        marginTop: resHeight(3),
        backgroundColor: "white",
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: "row",
        padding: resWidth(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: resHeight(15)
    },
    featureCircle: {
        backgroundColor: colors.lighterGreen,
        borderRadius: 99999,
        height: res(50),
        width: res(50),
        marginHorizontal: resWidth(10),
    },
    promoTitle: {
        fontSize: sizes.xLarge,
        fontWeight: "bold",
        marginBottom: resHeight(10)
    },
    promoImage: {
        height: resHeight(150),
        width: "100%",
        resizeMode: "stretch",
        borderRadius: 10,
        marginBottom: resHeight(5)
    },
    promoCardContainer: {
        width: "48%", flexDirection: "column"
    },
    chevronCircle: {
        backgroundColor: colors.lightestGray,
        borderRadius: 99999,
        height: res(20),
        width: res(20),
        position: "absolute",
        right: resWidth(100),
        bottom: resHeight(10)
    }
})
