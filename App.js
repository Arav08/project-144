import React from "react";
import PopularScreen from '.screens/Popular';
import RecommendedScreen from ".screens/Recommended";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {RFValue} from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer/>;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen: RecommendedScreen,
    navigationOptions: {
      tabBarLabel: "recommended",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: "#000"},
        indicatorStyle: {backgroundColor: "#000"}
      }
    }
  },
  PopularArticles: {
    screen: PopularScreen,
    navigationOptions: {
      tabBarLabel: "popular",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: "#000"},
        indicatorStyle: {backgroundColor: "#000"}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  AppTopNav: {
    screen: AppTopNavigation,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerTitle: "recommended articles",
      headerStyle: {backgroundColor: "#d500f9"},
      headerTitleStyle: {color: "#fff", fontWeight: "bold", fontSize: RFValue(18)}
    }
  }
}, {
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppStackNavigator)