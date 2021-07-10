import React, { Component, useRef,useState, useEffect } from 'react'
import { View,  StyleSheet, Text ,FlatList} from 'react-native';
import { NoCodeAppTheme, THEME_colors,APPComponent_COLOR } from '../../styles/theme.styles'
import SearchBar from 'react-native-search-bar';
import SearchListComponent from '../component/SearchListComponent';

/* Search list let admin to search all the submitted record according to Name and location
 */

export default class SearchList extends React.Component {

   
  constructor(props,route) {
    
    super(props);
    this.state = {
      SearchedNews:[
        {
            name:"A",
            age:13,
            profession:"Student",
            location:"2",
            guest:1,
            address:"cjdcncncnnsnsd"
        },
        {
            name:"B",
            age:25,
            profession:"Employed",
            location:"1",
            guest:2,
            address:"cjdcncncnnsnsd"
        },
        {
            name:"B",
            age:56,
            profession:"Employed",
            location:"2",
            guest:0,
            address:"cjdcncncnnsnsd"
        }
      ],
      DisplayItem:[],
    }

    
  }
  onChangeText=(text)=>
  {
        this.setState({
            value:text
        })
  }
  componentDidMount() {
    this.SearchBar.focus();
  }

  displaySearchResult=async()=>
  {
    console.log("Display");
    let search=this.state.SearchedNews.filter(item=> item.name==this.state.value || item.location==this.state.value);
    console.log("s",search);
   
    this.setState({
      DisplayItem:search
    })
  }

   detailsScreenNav=(index)=>{
    console.log("index",index);
    this.props.navigation.navigate('Details',{value:this.state.DisplayItem[index]});
  
  }
  
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.screenNameView}>Search List</Text>
            <SearchBar
                //ref={searchref}
                ref={(ref) => {
                    this.SearchBar = ref;
                  }}
                borderColor={"orange"}
                borderRadius={10}
                borderWidth={5}
                textColor={"black"}
                placeholder={"Search"}
                onChangeText={text => this.onChangeText(text)}
                onSearchButtonPress={()=>this.displaySearchResult()}
                onCancelButtonPress={()=>alert("cancel search")}
               
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={this.state.DisplayItem}
                horizontal={false}
                ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
                keyExtractor={(item, index) => item.id}
                renderItem={
                    ({ item,index }) => {
                        return (
                            <SearchListComponent name={item.name} navigationMethod=
                            { this.detailsScreenNav} index={index} onPress={() => {
                            }} />
                        
                        );
                    }
                }
                />
            
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    screenNameView: {
      textAlign: 'center',
      color: THEME_colors.SECONDARY_COLOR,
      fontSize: THEME_colors.FONT_SIZE_LARGE,
      fontWeight: "bold",
      marginLeft:5
    },
  });

