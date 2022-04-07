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
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
                  Total Assigned
                </Text>
                <Text style={{margin: 10, fontSize: 24, color: 'black'}}>
                  2
                </Text>
              </View>
              <View>
                <Ionicons
                  style={{margin: 10, alignSelf: 'center'}}
                  name="md-person-sharp"
                  color="#FF9800"
                  size={30}
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
    // backgroundColor: '#fff',
    margin: 3,
  },
  leftbox: {
    width: '47%',
    height: '100%',
    // backgroundColor: '#ff732a',
    flexDirection: 'column',
    borderColor:'black',
    borderWidth:1,
  },
  rightbox: {
    width: '47%',
    height: '100%',
    marginLeft: 10,
    // backgroundColor: '#ff732a',
    borderColor:'black',
    borderWidth:1,
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    height: '85%',
  },
});
export default Home;
