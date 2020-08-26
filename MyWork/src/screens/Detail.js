import React, { Component } from 'react';
import { Text, View ,TouchableOpacity, Platform, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { Content } from 'native-base';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLinrary from 'expo-media-library';
import * as ImageManipulator  from 'expo-image-manipulator';

var _isMounted = false;
var selectState = "";
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var imgurl = "";

var url = "https://a24540322414.ngrok.io/";
var updataPhotoNum = "";
var imgurl_HD = "123";
export default class Detail extends Component {
  constructor(){
    super();
  }
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    updataPhoto:[],
    selectData:[],
  }

//照片
  fetchData_post_insert = async() => {
    const response = await fetch(url+'insert', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        photo: this.state.updataPhoto, 
        photoNum: updataPhotoNum,                                                                                                              
      })
    })
  }
  getPermissionAsync = async () => {
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }
  handleCameraType=()=>{
    const { cameraType } = this.state
    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }
  takePicture = async () => {

    if (this.camera) {
      const options = {quality:0.5,
                      base64:true,
                      skipProcessing:true ,
                              };
      //let photo  = await this.camera.takePictureAsync(options);
      let photo  = await this.camera.takePictureAsync(options);
      let resizedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: photo.width * 0.06, 
                     height: photo.height * 0.06 } }],
        { compress: 0, format: "png", base64: true }
      );

      console.warn('字數:',resizedPhoto.base64.length);
      console.warn('高:',resizedPhoto.height);
      console.warn('寬:',resizedPhoto.width);
      //console.warn(photo.uri);

      let x=0;
      let y =100000;
      let piccount = 100000;
      //var list=[];

      for (var i=0;i<=(resizedPhoto.base64.length/piccount);i++){
        var slicr_text = (resizedPhoto.base64).slice(x,y);
        x+= piccount;
        y+= piccount;
        this.setState({ updataPhoto: slicr_text });
        updataPhotoNum = i;
        this.fetchData_post_insert();
      }


      
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status ==='granted'){
        const assert = await MediaLinrary.createAssetAsync(photo.uri);
        imgurl_HD = photo.uri; 
      }
    }
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  }
//照片
//顯示
reload = async() => {
  const response = await fetch(url+'select');
  const dataGet = await response.json();
  this.setState({ selectData: dataGet });
  
}
timeoutIDC () {
  const timeoutID = setInterval(()=>{  
    if(this._isMounted) {
      this.reload();  
    }  
    if (selectState[0]['state'] === 1){
      clearTimeout(timeoutID);
    }
  }, 1000)  
}

fetchData_get = async() => {
  this.timeoutIDC();
}
fetchData_post = async() => {
  const response = await fetch(url+'insert', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      photo: this.state.inputvalue,                                                                                                                      
    })
  })
}
fetchData_post_update = async(count) => {
  const response = await fetch(url+'update', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      state: count,                                                                                                                      
    })
  })
}
fetchData_get_update = async() => {
  const response = await fetch(url+'select_camstate');
  const dataGet = await response.json();
  if(this._isMounted) {
    selectState = dataGet;
  }
}
startUpdata = async() => {
  await this.fetchData_post_update(0);
  await this.fetchData_get_update();
  await this.fetchData_get();
}
endUpdata = async() => {
  await this.fetchData_post_update(1);
  await this.fetchData_get_update();
}
//顯示
componentDidMount() {
  this.getPermissionAsync()
  this._isMounted = true;
  this.startUpdata();
}
componentWillUnmount() { 
  this.endUpdata();
  this._isMounted = false;
}
  render(){
    const { navigation } = this.props;
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } 
    else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } 
    else {
      return (
          <View style={styles.picDisplay}>

              <View style={styles.container}>     
                <FlatList 
                style={styles.flatList}
                  data = {this.state.selectData}
                  keyExtractor={(item,index) => index.toString()}
                  renderItem={({item}) =>
                    <View style={styles.screenView}>
                       <Image
                        style={styles.pic}
                        source={{
                          uri: imgurl_HD
                        }}
                      />
                      <Image
                        style={styles.anchor}
                        source={{
                          uri:'data:image/png;base64,'+ item.pic
                        }}
                      />

                    </View>
                  } 
                />
              

          </View>



            <Camera style={styles.camera} type={this.state.cameraType} ref={ref => {this.camera = ref}}>

              
              <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent'                 
                  }}
                  onPress={()=>this.pickImage()}>
                  <Ionicons
                      name="ios-photos"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                  <Text style={{color:'white'}}>相簿</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
              </View>
            </Camera>     
          </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotateZ:'0deg'}],
  
  },
  pic: {
    flex: 2,
    width: screenWidth*1,
    height: screenHeight*0.44,
    resizeMode: 'stretch',
    position: 'absolute',
    backgroundColor:'transparent',

    top: 3,
  },
  anchor: {
    flex: 1,
    
    width: screenWidth*1,
    height: screenHeight*0.44,
    resizeMode: 'stretch',
    backgroundColor:'transparent',
    top: 0,
  },
  flatList:{
    width: screenWidth*1,
    height: screenHeight*1,
  },
  camera:{
    flex: 3,
    resizeMode: 'stretch',
    width: screenWidth*1,
    height: screenHeight*0.38,
  },
  picDisplay:{
    flex: 4,
    resizeMode: 'stretch',
    height: screenHeight*0.38,
  }
})