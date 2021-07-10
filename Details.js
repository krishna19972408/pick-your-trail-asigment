import React, { Component, useRef,useState, useEffect } from 'react'
import { View,  StyleSheet, Text ,FlatList} from 'react-native';
import { NoCodeAppTheme, THEME_colors,APPComponent_COLOR } from '../../styles/theme.styles'

/* Display each user full entered details
 */
export default class Details extends React.Component {
   
  constructor(props,route) {
    
    super(props);
    this.state = {
      SearchedNews:[
        {
            name:"A",
            location:"2"
        },
        {
            name:"B",
            location:"3"
        },
        {
            name:"B",
            location:"2"
        }
      ],
      DisplayItem:[],
      showDetails:false
    }

  }
  onChangeText=(text)=>
  {
        this.setState({
            value:text
        })
  }
  componentDidUpdate(){
    this.props.navigation.addListener('focus', () => {
      if(this.props.route.params){
        console.log("prop ",this.props.route.params);
        this.setState({
          showDetails:true
        });
      }else{
        this.setState({
          showDetails:true
        });
        alert("No Datails to be shown ");
      }
   }
    )
  }

   
  render() {  
    return (
      <View style ={styles.container}>
      <Text style={[styles.title,{marginTop:10}]}>User Details </Text>
        {this.state.showDetails ?
          <View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Name:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.name}
        </Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Age:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.age}
        </Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Profession:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.profession}
        </Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Locality:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.location}
        </Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Guest:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.guest}
        </Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.data}>Address:</Text>
        <Text style={styles.title}>
                {this.props.route.params.value.address}
        </Text>
        </View>
        </View>
         :
         <View>
         <Text style={styles.title}>
               No Details to show
             </Text>
         </View>
         }
      </View>
      
        );
  }
}
const styles = StyleSheet.create({
  container: {
      flexDirection: "column",
      padding: 10
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop:20
  },
  title: {
    textAlign: 'center',
    color: THEME_colors.SECONDARY_COLOR,
    fontSize: THEME_colors.FONT_SIZE_LARGE,
    fontWeight: "bold",
    marginLeft:5
  },
  data: {
    textAlign: 'center',
    fontSize: THEME_colors.FONT_SIZE_LARGE,
    fontWeight: "bold"
  },
  });

