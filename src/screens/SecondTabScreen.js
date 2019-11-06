import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';

import EditProfileModal from '../components/editProfileModal';

const SecondTabScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    name: '',
    age: '',
    gender: '',
    date: ''
  });

  editModalProfile = value => {
    setData({
      name: value.name,
      age: value.age,
      gender: value.gender,
      date: value.date
    });
    // console.log(data);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerContentStyle}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ marginLeft: 'auto', marginRight: '2%' }}
        >
          <AIcon name="edit" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: '2%' }}>
        <View style={styles.infoViewStyle}>
          <Text style={styles.textStyle}>
            Name: <Text style={{ color: '#0066ff' }}>{data.name}</Text>
          </Text>
        </View>
        <View style={styles.infoViewStyle}>
          <Text style={styles.textStyle}>
            Age:{' '}
            <Text style={{ color: '#0066ff' }}>{Math.floor(data.age)} </Text>
          </Text>
        </View>
        <View style={styles.infoViewStyle}>
          <Text style={styles.textStyle}>
            Gender: <Text style={{ color: '#0066ff' }}>{data.gender}</Text>{' '}
          </Text>
        </View>
        <View style={styles.infoViewStyle}>
          <Text style={styles.textStyle}>
            Date:<Text style={{ color: '#0066ff' }}>{data.date}</Text>{' '}
          </Text>
        </View>
      </View>

      {modalVisible ? <EditProfileModal openModal={editModalProfile} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0066ff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  headerContentStyle: {
    fontSize: 20,
    color: 'white',
    marginLeft: 'auto',
    fontFamily: 'OpenSans-Light'
  },
  infoViewStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular'
  }
});

export default SecondTabScreen;
  const SecInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);

  const focus = type => {
    if (type == 'second') {
      SecInput.current.focus();
    } else if (type == 'third') {
      thirdInput.current.focus();
    } else if (type == 'fourth') {
      fourthInput.current.focus();
    } else if (type == 'fifth') {
      fifthInput.current.focus();
    }
  };

  <View
          style={{
            flexDirection: 'row',

            width: wp(50),
            justifyContent: 'space-around'
          }}
        >
          <TextInput
            keyboardType="decimal-pad"
            autoFocus
            onSubmitEditing={() => focus('second')}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={1}
            style={{ borderBottomWidth: 1, textAlign: 'center' }}
          />
          <TextInput
            keyboardType="decimal-pad"
            ref={SecInput}
            onSubmitEditing={() => focus('third')}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={1}
            style={{ borderBottomWidth: 1, textAlign: 'center' }}
          />
          <TextInput
            keyboardType="decimal-pad"
            onSubmitEditing={() => focus('fourth')}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={thirdInput}
            maxLength={1}
            style={{ borderBottomWidth: 1, textAlign: 'center' }}
          />
          <TextInput
            keyboardType="decimal-pad"
            onSubmitEditing={() => focus('fifth')}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={1}
            ref={fourthInput}
            style={{ borderBottomWidth: 1, textAlign: 'center' }}
          />
          <TextInput
            keyboardType="decimal-pad"
            ref={fifthInput}
            maxLength={1}
            style={{ borderBottomWidth: 1, textAlign: 'center' }}
          />
        </View>



