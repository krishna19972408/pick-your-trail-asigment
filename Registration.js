import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Dimensions,
  FlatList,
  BackHandler,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  CheckBox,
  Platform,
} from 'react-native';
import {
  NoCodeAppTheme,
  THEME_colors,
  APPComponent_COLOR,
} from '../../styles/theme.styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons1 from 'react-native-vector-icons/Ionicons';
import IoniconsEntypo from 'react-native-vector-icons/Entypo';
import IoniconsMaterial from 'react-native-vector-icons/MaterialIcons';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import AwesomeAlert from 'react-native-awesome-alerts';

const {height, width} = Dimensions.get('window');

const guestCountRadio = [
  {label: '0  ', value: 0},
  {label: '1', value: 1},
  {label: '2', value: 2},
];
const professionRadio = [
  {label: 'Employed', value: 0},
  {label: 'Student ', value: 1},
];

/* Registration screen let user to registered fro the event
*/
const Registration = ({navigation}) => {
  const {control, handleSubmit, errors, reset} = useForm();
  const [guestCountValue, setguestCountValue] = useState(0);
  const [professionValue, setprofessionValue] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateString,setDateString]=useState("Enter DOB");
  const [age,setage]=useState("Age");
  const [showAlert,setshowAlert]=useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = (selectedDate) => {
    //console.log("enter ",selectedDate);
    console.log("date ",selectedDate.nativeEvent.timestamp);
    let date1=new Date(selectedDate.nativeEvent.timestamp);
  //   let tempDate=new Date();
  //   let nowDate= Date.now();
  //   console.log("now ",nowDate, "date1",date1);
  //  // let age=nowDate - (selectedDate.nativeEvent.timestamp);
  //   //let age2=getAge(nowDate,date1);
  //   let  diff = nowDate - selectedDate.nativeEvent.timestamp;
  //   let age2= Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  //   console.log("age ",age2);
  //   //console.warn('A date has been picked: ');
  //   const currentDate = selectedDate || date;
    //setDate(currentDate);
    let dateString=date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear();
    setDateString(dateString);
    //console.log("st",dateString  );
    hideDatePicker();
  };

  const  getAge=(d1, d2)=>{
    d2 = d2 || new Date();
    let  diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

  const onSubmit = useCallback(async (data) => {

    //console.log('submit called', data);
    showMessage({
      message: 'Processing...',
      //description: "This is our second message",
      type: 'info',
      autoHide: true,
      duration: 50000,
      backgroundColor: THEME_colors.SECONDARY_COLOR, // background color
      color: APPComponent_COLOR.CATEGORY_COLOR, // text color
    });

    console.log("data",data);
    let obj={
      name:data.name,
      age:data.age,
      dob:dateString,
      Profession:professionValue==0?'Employee':'Student',
      Locality:data.location,
      NoOfGuest:guestCountValue,
      Address:data.add
    };

    
    console.log("obj ",obj);
    clearData();
    showMessage({
      message: 'Submit Successfully...',
      //description: "This is our second message",
      type: 'info',
      autoHide: true,
      duration: 500,
      backgroundColor: THEME_colors.SECONDARY_COLOR, // background color
      color: APPComponent_COLOR.CATEGORY_COLOR, // text color
    });
  });

  
  const clearData = async () => {
    reset({name: '', age: '', location: ''});
    setguestCountValue(0);
    setprofessionValue(0);   
    setDateString('Enter DOB');
  };

  

  
  return (
    <View>
      <FlashMessage position="top" />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              alignItems: 'center',
              marginLeft: wp(0),
            }}>
            <View style={styles.v4}>
              <Text style={styles.screenNameView}>MeetUp RSVP Regitration</Text>
            </View>
          </View>
          <View style={styles.viewDataContainer}>
            <View>
              <Ionicons
                name={'format-title'}
                size={THEME_colors.ICON_PLACEHOLDER_SIZE}
                color={APPComponent_COLOR.Default_COLOR}
              />
            </View>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  placeholder="Name"
                  placeholderTextColor={NoCodeAppTheme.colors.text}
                  keyboardType="default"
                  style={[
                    styles.textDataContainer,
                    {
                      borderBottomWidth: errors.name ? 1 : 0,
                      borderBottomColor: 'red',
                    },
                  ]}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />
          </View>
          <View style={styles.viewDataContainer}>
            <View>
              <Ionicons
                name={'clipboard-text'}
                size={THEME_colors.ICON_PLACEHOLDER_SIZE}
                color={APPComponent_COLOR.Default_COLOR}
              />
            </View>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  placeholder="Age"
                  placeholderTextColor={NoCodeAppTheme.colors.text}
                  keyboardType="numeric"
                  style={[
                    styles.textDataContainer,
                    {
                      borderBottomWidth: errors.age ? 1 : 0,
                      borderBottomColor: 'red',
                    },
                  ]}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="age"
              rules={{required: true}}
              defaultValue=""
            />
          </View>
          <View style={styles.viewDataContainer}>
          <View>
              <IoniconsMaterial
                name={'date-range'}
                size={THEME_colors.ICON_PLACEHOLDER_SIZE}
                color={APPComponent_COLOR.Default_COLOR}
              />
            </View>
            <TouchableOpacity
                onPress={showDatePicker}
                style={{
                height: 55,
                width: 325,
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <Text
                  style={[styles.textDataContainer,{marginTop:40,
                  marginLeft:30,
                  color:
                    dateString != 'Enter DOB'
                      ? APPComponent_COLOR.Default_COLOR
                      : NoCodeAppTheme.colors.text,
                    //  borderBottomWidth: dateString=='Enter DOB'?1:0,
                    //  borderBottomColor:"red" 
                  }]}>
                  {dateString}
                </Text>
                {isDatePickerVisible && <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="calendar"
                  onChange={handleConfirm}
                />}
              </TouchableOpacity>
          </View>
          <View>
            <View
              style={styles.radioViewContainer}>
              <Text>Profession</Text>
              <RadioForm formHorizontal={true} animation={true}>
                {/*Radio buttons get created by looping through your array of options */}
                {professionRadio.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  Setting RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={professionValue === i}
                      onPress={setprofessionValue}
                      borderWidth={3}
                      buttonInnerColor={THEME_colors.SECONDARY_COLOR}
                      buttonOuterColor={THEME_colors.SECONDARY_COLOR}
                      buttonSize={20}
                      buttonOuterSize={30}
                      buttonStyle={{size: '10'}}
                      buttonWrapStyle={{marginLeft: 12}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={setprofessionValue}
                      labelStyle={{
                        fontSize: 17,
                        color: APPComponent_COLOR.Default_COLOR,
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </View>
          <View style={styles.viewDataContainer}>
            <View>
              <Ionicons1
                // resizeMode="contain"
                name={'location'}
                size={THEME_colors.ICON_PLACEHOLDER_SIZE}
                color={APPComponent_COLOR.Default_COLOR}
              />
            </View>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  placeholder="Locality"
                  placeholderTextColor={NoCodeAppTheme.colors.text}
                  keyboardType="default"
                  style={[
                    styles.textDataContainer,
                    {
                      borderBottomWidth: errors.location ? 1 : 0,
                      borderBottomColor: 'red',
                    },
                  ]}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  multiline={true}
                />
              )}
              name="location"
              rules={{required: true}}
              defaultValue=""
            />
          </View>
          <View>
            <View
              style={styles.radioViewContainer}>
              <Text>Guest </Text>
              <RadioForm formHorizontal={true} animation={true}>
                {guestCountRadio.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={guestCountValue === i}
                      onPress={setguestCountValue}
                      borderWidth={3}
                      buttonInnerColor={THEME_colors.SECONDARY_COLOR}
                      buttonOuterColor={THEME_colors.SECONDARY_COLOR}
                      buttonSize={20}
                      buttonOuterSize={30}
                      buttonStyle={{size: '10'}}
                      buttonWrapStyle={{marginLeft: 12}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={setguestCountValue}
                      labelStyle={{
                        fontSize: 17,
                        color: APPComponent_COLOR.Default_COLOR,
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </View>
          <View style={styles.viewDataContainer}>
            <View>
              <IoniconsEntypo
                name={'address'}
                size={THEME_colors.ICON_PLACEHOLDER_SIZE}
                color={APPComponent_COLOR.Default_COLOR}
              />
            </View>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  //ref={textInputdecs}
                  placeholder="Address"
                  placeholderTextColor={NoCodeAppTheme.colors.text}
                  keyboardType="default"
                  style={[
                    styles.textDataContainer,
                    {
                      borderBottomWidth: errors.add ? 1 : 0,
                      borderBottomColor: 'red',
                    },
                  ]}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  multiline={true}
                />
              )}
              name="add"
              rules={{required: true}}
              defaultValue=""
            />
          </View>
          <View style={styles.buttonViewContainer}>
            <TouchableOpacity
              onPress={clearData}
              style={styles.buttonTouchable}>
              <Text style={{fontSize: 17}}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonViewContainer}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.buttonTouchable}>
              <Text style={{fontSize: 17}}>
                Publish
              </Text>
            </TouchableOpacity>
          </View>
          {/* <AwesomeAlert
          contentContainerStyle={{backgroundColor:THEME_colors.PRIMARY_COLOR}}
          titleStyle={{color:APPComponent_COLOR.Default_COLOR}}
          messageStyle={{color:APPComponent_COLOR.Default_COLOR}}
          show={showAlert}
          showProgress={false}
          title="Registration is not completed!"
          message={"Are you sure you want to go back without successful submission ?"}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          confirmText=" Yes "
          cancelText="  No  "
          confirmButtonColor={THEME_colors.SECONDARY_COLOR}
          confirmButtonTextStyle={{color:THEME_colors.PRIMARY_COLOR}}
          cancelButtonTextStyle={{color:THEME_colors.PRIMARY_COLOR}}
          onCancelPressed={() => {
            setshowAlert(false);
          }}
          onConfirmPressed={() => {
            onSubmit();
          }}
        /> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewDataContainer: {
    height: hp(7.8),
    width: wp(90),
    backgroundColor: APPComponent_COLOR.CATEGORY_COLOR,
    borderRadius: wp(85) / 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    marginLeft: wp(1),
  },
 
  textDataContainer: {
    height: 60,
    width: 320,
    fontSize: 14,
    color: APPComponent_COLOR.Default_COLOR,
    marginLeft: 4,
    marginTop: Platform.OS === 'ios' ? 25 : 0,
  },
  
  buttonViewContainer: {
    height: 55,
    width: 325,
    backgroundColor: THEME_colors.SECONDARY_COLOR,
    borderRadius: 150,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 4,
  },
  screenNameView:{
    textAlign: 'center',
    color: THEME_colors.SECONDARY_COLOR,
    fontSize: THEME_colors.FONT_SIZE_LARGE,
    fontWeight: "bold",
    marginLeft:5
  },
  radioViewContainer:{
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    marginLeft: wp(3),
    marginTop: wp(3),
  },
  buttonTouchable:{
    height: 55,
    width: 325,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  }

});
export default Registration;
