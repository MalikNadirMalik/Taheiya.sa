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
                <Text style={{color: 'black', fontSize: 20, margin: 5}}>
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View style={styles.iconView}>
                <MaterialIcons
                  name="assignment-return"
                  size={40}
                  color="#fff"
                  style={styles.icon}
                  style={{
                    backgroundColor: '#0dcaf0',
                    alignSelf: 'center',
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 30,
                    marginLeft: 15,
                  }}
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
                <Text style={{color: 'black', fontSize: 20, margin: 5}}>
                  Total Delivered
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: '#f41127'}}>
                  24
                </Text>
              </View>
              <View>
              <MaterialCommunityIcons
                  name="truck-check"
                  size={40}
                  color="#fff"
                  style={styles.icon}
                  style={{
                    backgroundColor: '#f41127',
                    alignSelf: 'center',
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 30,
                    marginLeft: 15,
                  }}
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
                <Text style={{color: 'black', fontSize: 20, margin: 5}}>
                  Total Pending Action
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: '#f41127'}}>
                  4
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="truck-check"
                  size={40}
                  color="#fff"
                  style={styles.icon}
                  style={{
                    backgroundColor: '#f41127',
                    alignSelf: 'center',
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 30,
                    marginLeft: 15,
                  }}
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
                <Text style={{color: 'black', fontSize: 17, margin: 5}}>
                  Panding for Action 
                  Towning Request
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: '#f41127'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons name="stats-chart" size={40} color="#fff"
                style={styles.icon}
                style={{
                  backgroundColor: '#17a00e',
                  alignSelf: 'center',
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 50,
                  marginTop: 30,
                  marginLeft: 15,
                }} />
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
                <Text style={{color: 'black', fontSize: 17, margin: 5}}>
                 Panding for Action 
                 Repair Request
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: '#0d6efd'}}>
                  2
                </Text>
              </View>
              <View>
                <Feather name="tool" size={40} color="#fff"
                style={styles.icon}
                style={{
                  backgroundColor: '#0d6efd',
                  alignSelf: 'center',
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 50,
                  marginTop: 30,
                  marginLeft: 15,
                }}  />
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
                <Text style={{color: 'black', fontSize: 17, margin: 5}}>
                  pending for Action
                  Assign by Garage 
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: '#f41127'}}>
                  0
                </Text>
              </View>
              <View>
                <Feather name="tool" size={40} color="#fff" 
                style={styles.icon}
                style={{
                  backgroundColor: '#f41127',
                  alignSelf: 'center',
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 50,
                  marginTop: 30,
                  marginLeft: 15,
                }}/>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  mainimage: {
    height: '100%',
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
    width: '100%',
    height: 150,
    margin: 10,
    padding:1,
  },
  leftbox: {
    width: '47%',
    height: '100%',
    // backgroundColor: '#ff732a',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
  },
  rightbox: {
    width: '47%',
    height: '100%',
    marginLeft: 10,
    // backgroundColor: '#ff732a',
    borderColor: 'black',
    borderWidth: 1,
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    height: '85%',
  },
  iconView: {
    
    width: '37%',
  },
  icon: {
    width: 55,
    height: 52,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 30,
   
  },
});
export default Home;
