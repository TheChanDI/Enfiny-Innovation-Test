import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Slider
} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import RadioForm from 'react-native-simple-radio-button';

const editProfileModal = props => {
  const [editProfile, setEditProfile] = useState({
    name: '',
    age: '',
    gender: '',
    date: ''
  });
  const radio_props = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];
  return (
    <Modal
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.7}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      isVisible={true}
    >
      <View
        style={{
          backgroundColor: 'white',
          height: 500,
          width: '100%',
          borderRadius: 4
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 30, color: '#0066ff' }}>
          Edit your profile
        </Text>
        <View
          style={{
            marginHorizontal: '2%',
            justifyContent: 'space-around',
            height: 400
          }}
        >
          <View>
            <Text>Name:</Text>
            <TextInput
              onChangeText={text =>
                setEditProfile({ ...editProfile, name: text })
              }
              placeholder="Enter your name"
              style={{
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                paddingVertical: 0
              }}
            />
          </View>

          <View>
            <Text>Select age: {Math.floor(editProfile.age)}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text>18</Text>
              <Slider
                maximumValue={100}
                minimumValue={18}
                style={{ width: 250 }}
                onValueChange={val =>
                  setEditProfile({
                    ...editProfile,
                    age: val
                  })
                }
              />
              <Text>100</Text>
            </View>
          </View>
          <View>
            <Text>Select date of birth:</Text>
            <DatePicker
              style={{ width: 200 }}
              date={editProfile.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1970-01-01"
              maxDate="2019-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => setEditProfile({ ...editProfile, date })}
            />
          </View>
          <View>
            <Text>Select Gender</Text>
            <View style={{ alignSelf: 'center' }}>
              <RadioForm
                formHorizontal={true}
                animation={true}
                radio_props={radio_props}
                initial={-1}
                onPress={value =>
                  setEditProfile({ ...editProfile, gender: value })
                }
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            props.openModal({
              name: editProfile.name,
              age: editProfile.age,
              gender: editProfile.gender,
              date: editProfile.date
            })
          }
          style={{
            backgroundColor: '#0066ff',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 4,
            alignSelf: 'center'
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default editProfileModal;
