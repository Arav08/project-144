import React, { Component } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import {RFValue} from 'react-native-responsive-fontsize';

export default class PopularScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        this.getData()
    }

    timeConvert(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return `${hours} hrs ${minutes} mins`;
      }

    getData = () => {
        const url = "http://127.0.0.1:5000/popular-article"

        axios
        .get(url)
        .then(async response => {
            this.setState({
                data: response.data.data
            })
        })
        .catch(error => {console.log(error.message)})
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({item, index}) => {
        return(
            <Card
            key = {`card-${index}`}
            image = {{uri: item.imdb_link}}
            imageProps = {{resizeMode: "cover"}}
            featuredTitle = {item.title}
            containerStyle = {styles.cardContainer}
            featuredTitleStyle = {styles.title}
            featuredSubTitle = {`${item.release_date.split("-")[0]} | ${this.timeConvert(item.duration)}`}
            featuredSubTitleStyle = {styles.subTitle}></Card>
        )
    }

    render(){
        const {data} = this.state
        return(
            <View style = {styles.container}>
                <FlatList data = {data} renderItem = {this.renderItem} keyExtractor = {this.keyExtractor}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        color: "#fff",
        alignSelf: "flex-start",
        paddingLeft: RFValue(15),
        fontSize: RFValue(25),
        marginTop: RFValue(65)
    },
    subTitle: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        paddingLeft: RFValue(15),
        fontSize: RFValue(15),
    },
    cardContainer: {
        flex: 1,
        borderRadius: RFValue(10),
        justifyContent: "center",
        height: RFValue(110),
        marginBottom: RFValue(20)
    }
})