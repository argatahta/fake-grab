import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screen/home"
import * as colors from "../lib/colors";


function ActivityScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Activity</Text>
        </View>
    );
}

function PaymentScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Payment!</Text>
        </View>
    );
}

function MessagesScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Messages!</Text>
        </View>
    );
}

function AccountScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Account!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-navigate-circle'
                                : 'ios-navigate-circle-outline';
                        } else if (route.name === 'Activity') {
                            iconName = focused ? 'ios-document-text' : 'ios-document-text-outline';
                        }
                        else if (route.name === 'Payment') {
                            iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                        }
                        else if (route.name === 'Messages') {
                            iconName = focused ? 'ios-chatbox-ellipses' : 'ios-chatbox-ellipses-outline';
                        }
                        else if (route.name === 'Account') {
                            iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={25} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: colors.primaryColor,
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Activity" component={ActivityScreen} />
                <Tab.Screen name="Payment" component={PaymentScreen} />
                <Tab.Screen name="Messages" component={MessagesScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}