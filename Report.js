import React, { Component, useRef,useState, useEffect } from 'react'
import { View,  StyleSheet, Text ,FlatList} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'react-native';
import { NoCodeAppTheme, THEME_colors,APPComponent_COLOR } from '../../styles/theme.styles'

/* Display all teh data under single screen entered by all registered user
 */

export default class Report extends React.Component {
   
  constructor(props,route) {
    
    super(props);
    this.state = {
      reportData:[
        {
            id:1,
            name:"A",
            location:"2",
            age:13,
            noOFguest:2,
            professionId:0,
            guest:0,

        },
       {
            id:2,
            name:"B",
            location:"3",
            age:20,
            noOFguest:1,
            professionId:1,
            guest:1,
            
        },
        {
            id:8,
            name:"B",
            location:"2",
            age:22,
            noOFguest:0,
            professionId:0,
            guest:0,
            
        },
        {
            id:3,
            name:"C",
            location:"6",
            age:30,
            noOFguest:2,
            professionId:1,
            guest:2,
            
        },
        {
            id:4,
            name:"D",
            location:"8",
            age:18,
            noOFguest:2,
            professionId:0,
            guest:0,
            
        },
        {
            id:5,
            name:"E",
            location:"2",
            age:56,
            noOFguest:2,
            professionId:1,
            guest:0,
            
        },
        {
            id:6,
            name:"F",
            location:"2",
            age:20,
            noOFguest:2,
            professionId:0,
            guest:0,
            
        },
        {
            id:7,
            name:"A",
            location:"2",
            age:13,
            noOFguest:0,
            professionId:0,
            guest:0,
            
        },
      ],
      age13_18:0,
      age19_25:0,
      age25_:0,
      profession:0,
      student:0,

    }

    
  }
  onChangeText=(text)=>
  {
        this.setState({
            value:text
        })
  }
  componentDidMount() {
    this.calculateReportData();
    
  }

  calculateReportData=()=>{
      let age13=0,age19=0,age25=0,profession=0,student=0;

      this.state.reportData.forEach(element => {
          if(element.age <= 18 && element.age >= 13) {
              age13++;
          }else if (element.age <= 25 && element.age >=19){
              age19++;
          }else {
              age25++;
          }

          if(element.professionId==1){
              profession++;
          }else {
              student++;
          }
      });

      //console.log( age13, age19,age25, profession, student);

      this.setState({
          age13_18:age13,
          age19_25:age19,
          age25_:age25,
          profession:profession,
          student:student,
      });
  }
  

  
  render() {  
    return (
        <View style={styles.container}>
        <View style={styles.titleContainer1}>
          <Text style={styles.title}>Report </Text>
        </View>
        <View style={styles.titleContainer1}>
            <Text style={styles.title}>
                Numper of People Acc. to age
            </Text>
            </View>
            <View style={styles.titleContainer}>
            <Text>
              <Text style={styles.dataView}>13-18 : </Text>
              <Text style={styles.dataText}>{this.state.age13_18  }  </Text>
              <Text style={styles.dataView,{marginStart:5}}>18-25 : </Text>
              <Text style={styles.dataText}>{  this.state.age19_25  }  </Text>
              <Text style={styles.dataView}>25+ : </Text>
              <Text style={styles.dataText}>{  this.state.age25_  }  </Text>
            </Text>
          </View>
          <View style={styles.titleContainer1}>
            <Text style={styles.title}>
                Numper of People Acc. to Locality
            </Text>
            </View>
            <View style={styles.titleContainer}>
            <Text>
              <Text style={styles.dataView}>A : </Text>
              <Text style={styles.dataText}>5  </Text>
              <Text style={styles.dataView,{ marginStart:10 }}>B : </Text>
              <Text style={styles.dataText}>  1  </Text>
              <Text style={styles.dataView}>C : </Text>
              <Text style={styles.dataText}>  2  </Text>
            </Text>
          </View>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>
            Average Group Size : 1
            </Text>
            </View>
            <View style={styles.titleContainer}>
            <Text style={styles.dataView}>Profession : </Text>
              <Text style={styles.dataText}>{  this.state.profession  }</Text>
              <Text style={styles.dataView,{ marginStart:10 }}>Student : </Text>
              <Text style={styles.dataText}>{this.state.student  }  </Text>
            </View>
            
        </View>
        
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    marginTop:10,
    
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
  titleContainer1: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    marginTop:20
  },
  title: {
    textAlign: 'center',
    color: THEME_colors.SECONDARY_COLOR,
    fontSize: THEME_colors.FONT_SIZE_LARGE,
    fontWeight: "bold"
  },
  dataText: {
    textAlign: 'center',
    color: THEME_colors.SECONDARY_COLOR,
    fontSize: THEME_colors.FONT_SIZE_SMALL,
    fontWeight: "bold",
    fontSize:16
  },
  dataView:{
    color: APPComponent_COLOR.Default_COLOR,
    fontSize:15 
  }
  });

