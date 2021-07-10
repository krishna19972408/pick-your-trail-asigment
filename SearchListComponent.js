import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import { APPComponent_COLOR, THEME_colors } from '../../styles/theme.styles';


export default class SearchListComponent extends Component {
  
  constructor(props){
      super(props)
  }

  callNavMethod(){    
   this.props.navigationMethod(this.props.index)
    
  }
  render() {
    return (
      <TouchableOpacity 
          style={styles.touchable}
          onPress={()=>this.callNavMethod()}>
            <View style={styles.view}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
      </TouchableOpacity>
);  
    
  }
  
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    color: THEME_colors.SECONDARY_COLOR,
    fontSize: THEME_colors.FONT_WEIGHT_HEAVY,
    paddingHorizontal: 10
  },
  touchable: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8
  },
  view: {
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: APPComponent_COLOR.CATEGORY_COLOR,
    alignItems: 'flex-start',
  },
});

