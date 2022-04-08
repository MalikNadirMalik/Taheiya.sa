import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <View style={styles.Container}>
      <StatusBar barStyle="white" backgroundColor={'#5BA39F'} />
      <ImageBackground
        source={require('../assets/images/splash.png')}
        style={styles.Bgimage}>
        <Image
          source={require('../assets/images/taheiyalogo.png')}
          style={styles.mainimage}
        />
      </ImageBackground>
      <View style={styles.Flatgrid}>
        <View style={styles.leftbox}>
          <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, margin: 10}}>
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 20, color: 'black'}}>
                  2
                </Text>
              </View>
              <View style={styles.iconView}>
                <MaterialIcons
                  name="assignment-return"
                  size={30}
                  color="#fff"
                  style={styles.icon}
                />
              </View>
            </View>
          </TouchableOpacity> 
        </View>

        <View style={styles.rightbox}>
           <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, margin: 10}}>
                  Total Delivered
                </Text>
                <Text style={{margin: 10, fontSize: 20, color: '#f41127'}}>
                  24
                </Text>
              </View>
              <View  
              style={{
                    backgroundColor: '#f41127',
                    width: '30%',
                    alignSelf: 'center',
                    height: '36%',
                     borderRadius: 100,
                  }}>
              <MaterialCommunityIcons
                  name="truck-check"
                  size={30}
                  color="#fff"
                  style={styles.icon}
                 
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Flatgrid}>
        <View style={styles.leftbox}>
          <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, margin: 10}}>
                  Total Pending Action
                </Text>
                <Text style={{margin: 10, fontSize: 20, color: '#f41127'}}>
                  4
                </Text>
              </View>
              <View
               style={{
                backgroundColor: '#f41127',
                width: '30%',
                alignSelf: 'center',
                height: '36%',
                 borderRadius: 100,
              }}>
                <MaterialCommunityIcons
                  name="truck-check"
                  size={30}
                  color="#fff"
                  style={styles.icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rightbox}>
          <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, marginLeft: 10, marginTop: 10}}>Panding for Action </Text>
                <Text style={{color: 'black', fontSize: 14, marginLeft: 10 }}>Towning Request</Text>
                <Text style={{margin: 10, fontSize: 20, color: '#f41127'}}>
                  2
                </Text>
              </View>
              <View
               style={{
                backgroundColor: '#17a00e',
                width: '30%',
                alignSelf: 'center',
                height: '36%',
                 borderRadius: 100,
              }}>
                <Ionicons name="stats-chart" size={30} color="#fff"
                style={styles.icon}
               />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Flatgrid}>
        <View style={styles.leftbox}>
          <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, marginLeft: 10, marginTop: 10}}>Panding for Action</Text>
                <Text style={{color: 'black', fontSize: 14, marginLeft: 10}}>Repair Request</Text>
                <Text style={{margin: 10, fontSize: 20, color: '#0d6efd'}}>
                  2
                </Text>
              </View>
              <View
              style={{
                backgroundColor: '#0d6efd',
                width: '30%',
                alignSelf: 'center',
                height: '36%',
                 borderRadius: 100,
              }}>
                <Feather name="tool" size={30} color="#fff"
                style={styles.icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rightbox}>
          <TouchableOpacity>
            <View style={{width: '100%', height: '12%'}}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.box}>
              <View style={{width: '60%', height: '100%'}}>
                <Text style={{color: 'black', fontSize: 16, marginLeft: 10, marginTop: 10}}>Panding for Action</Text>
                <Text style={{color: 'black', fontSize: 14, marginLeft: 10}}>Assign by Garage</Text>
                <Text style={{margin: 10, fontSize: 20, color: '#f41127'}}>
                  0
                </Text>
              </View>
              <View
              style={{
                backgroundColor: '#f41127',
                width: '30%',
                alignSelf: 'center',
                height: '36%',
                 borderRadius: 100,
              }}>
                <Feather name="tool" size={30} color="#fff" 
                style={styles.icon}
               />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0
  },
  mainimage: {
    height: '90%',
    width: '30%',
    marginLeft: '4%',
  },
  Bgimage: {
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  Flatgrid: {
    flexDirection: 'row',
    width: '90%',
    height: 150,
    marginLeft: 10,
    marginTop: 14,
    marginRight: 10,
    alignSelf: 'center',
    justifyContent:'space-around',
  },
  leftbox: {
    width: '46%',
    height: '100%',
    
  },
  rightbox: {
    width: '46%',
    height: '100%',
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    height: '88%',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white'
  },
  iconView: {
    width: '30%',
    backgroundColor: '#0dcaf0',
    alignSelf: 'center',
    height: '36%',
     borderRadius: 100,
  },
  icon: {
    // width: 55,
    // height: 52,
    alignSelf: 'center',
    borderColor: '#fff',
   // borderWidth: 1,
    borderRadius: 50,
   // marginTop: '4%'
    marginTop: 8,
   
  },
});
export default Home;
