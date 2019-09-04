import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  StyleSheet
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AIcon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const ThirdTabScreen = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [value, setValue] = useState(0);
  const [arrayView, setArrayView] = useState([]);

  const imageSlide = [
    {
      id: 1,
      img: require('../assets/12.jpeg')
    },
    {
      id: 2,
      img: require('../assets/bg.jpg')
    },
    {
      id: 3,
      img: require('../assets/bg1.jpg')
    },
    {
      id: 4,
      img: require('../assets/car1.jpg')
    }
  ];

  submit = () => {
    let data = [];
    for (let i = 0; i < value; i++) {
      data.push({ value: i });
    }
    setArrayView(data);
    console.log(data);
  };

  openImage = () => {
    const options = {
      title: 'Select Images',

      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, response => {
      setSelectedImage({ uri: response.uri });
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.containerStyle}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',

              fontFamily: 'OpenSans-Light'
            }}
          >
            Third Screen
          </Text>
        </View>
        <TouchableOpacity onPress={openImage} style={styles.imgBtnStyle}>
          <Text style={{ color: 'white' }}>Upload image</Text>
        </TouchableOpacity>
        <Image
          style={{ alignSelf: 'center' }}
          source={selectedImage}
          style={{ height: 100, width: 100 }}
        />

        <View style={{ marginVertical: '2%' }}>
          <FlatList
            horizontal={true}
            data={imageSlide}
            renderItem={({ item }) => (
              <Image
                key={item.id}
                source={item.img}
                style={{ height: 300, width: 300 }}
              />
            )}
          />
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, alignSelf: 'center' }}>{value}</Text>
            <View style={{ height: 70, justifyContent: 'space-around' }}>
              <AIcon
                name="arrowup"
                size={20}
                onPress={() => setValue(value + 1)}
              />
              <AIcon
                name="arrowdown"
                size={20}
                onPress={() => setValue(value - 1)}
              />
            </View>
            <TouchableOpacity onPress={submit} style={styles.okbtnStyle}>
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={arrayView}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.randomColorContainer,
                    {
                      backgroundColor: `rgb(${[1, 2, 3].map(
                        x => (Math.random() * 256) | 0
                      )})`
                    }
                  ]}
                ></View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#0066ff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  imgBtnStyle: {
    backgroundColor: '#0099ff',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: '2%'
  },
  okbtnStyle: {
    backgroundColor: '#0099ff',
    padding: 5,
    alignSelf: 'center',
    marginLeft: '4%'
  },
  randomColorContainer: {
    width: '100%',
    height: 50,
    marginVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ThirdTabScreen;
