//import * as React from 'react';
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Slider,
} from 'react-native';
import Constants from 'expo-constants';

//import actionsheet
import ActionSheet from 'react-native-actionsheet';

// You can import from local files
import AssetExample from './components/AssetExample';

// call style --farheen
import style from './style';

import { RadioButton } from 'react-native-paper';

 
let intervel = null;

export default class App extends Component {
  // state = {
  //   checked: 'clockwise',
  // };
  showActionSheet = () => {
    //To show the Bottom ActionSheet
    this.ActionSheet.show();
  };
 

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      activeTimer: 0,
      timer: 10,
      setting: false,
      signalCount: 0,
      rotation: 1,
      checked:'clockwise', //for RadioButton
      Time: 0.2,// Slider Time duration
      signalmode:'',
      //1: clock
      //2:anticlok,
      //3:updown
      // signaltype : 1,
    };
    // this.activeButton('A',1);
  }

   // for Hide
  hideActionSheet = () => {
   // alert(this.state.checked);
   //const getSignalMode = this.state.checked;
    //this.setState({ signalmode : this.state.checked });
    //alert('12s' + this.state.checked);
    
    this.activeButton('A', 1);
    //To Hide the Bottom ActionSheet
    this.ActionSheet.hide();
  };

  componentDidMount = () => {
    this.activeButton('A', 1);
  };

  activeButton(event, id) {
    const { timer, signalCount, rotation, checked } = this.state;
    const $this = this;
    const $signalCount = signalCount;
    const $rotation = rotation;
    const $checked =  checked;
    // alert(id + ' & ' + timer + ' & ' + event);
    // console.log(timer);

    
  // if($checked == 'clockwise')
  // {
  //   alert('clock');
  // }
  // else
  // {
  //   alert('anticlock12');
  // }

    this.setState({ active: id, activeTimer: timer });

    let count = timer;
    clearInterval(intervel);
    
    if (this.state.checked == 'clockwise')
    {
     intervel = setInterval(() => {
      
      if (count <= 0) {
        clearInterval(intervel);
      // alert(signalCount);
       
        $this.setState({
          active: null,
          activeTimer: null,
          signalCount: $signalCount === 3 ? 0 : $signalCount + 1,
        });

        const switchCount = 2;

        if (id === 1 && $signalCount <= switchCount) {
          this.activeButton('A',2);
        }
        if (id === 2 && $signalCount <= switchCount) {
          this.activeButton('B',3);
        }
        if (id === 3 && $signalCount <= switchCount) {
          this.activeButton('C',4);
        }
        if (id === 4 && $signalCount <= switchCount) {
          this.activeButton('D',1);
        }
      }

      count -= 1;
      $this.setState({ activeTimer: count >= 0 ? count : timer });
      }, 1000);
    }
    else if (this.state.checked == 'anticlockwise')
    {
 intervel = setInterval(() => {
      
      if (count <= 0) {
        clearInterval(intervel);
      // alert(signalCount);
       
        $this.setState({
          active: null,
          activeTimer: null,
          signalCount: $signalCount === 3 ? 0 : $signalCount + 1,
        });

        const switchCount = 2;

        if (id === 1 && $signalCount <= switchCount) {
          this.activeButton('A',4);
        }
        if (id === 4 && $signalCount <= switchCount) {
          this.activeButton('B',3);
        }
        if (id === 3 && $signalCount <= switchCount) {
          this.activeButton('C',2);
        }
        if (id === 2 && $signalCount <= switchCount) {
          this.activeButton('D',1);
        }
      }

      count -= 1;
      $this.setState({ activeTimer: count >= 0 ? count : timer });
      }, 1000);
    }
    else
    {
 intervel = setInterval(() => {
      
      if (count <= 0) {
        clearInterval(intervel);
        //alert(signalCount);
       
        $this.setState({
          active: null,
          activeTimer: null,
          signalCount: $signalCount === 3 ? 0 : $signalCount + 1,
        });
        const switchCount = 2;

        if (id === 1 && $signalCount <= switchCount) {
          this.activeButton('A',3);
        }
        if (id === 3 && $signalCount <= switchCount) {
          this.activeButton('C',4);
        }
        if (id === 4 && $signalCount <= switchCount) {
          this.activeButton('D',2);
        }
        if (id === 2 && $signalCount <= switchCount) {
          this.activeButton('B',1);
        }               
      }

      count -= 1;
      $this.setState({ activeTimer: count >= 0 ? count : timer });
      }, 1000);
    }
  }

  toogleSetting() {
    this.setState({
      setting: !this.state.setting,
    });
  }

  render() {
    const { checked } = this.state; // for radiobutton
    var optionArray = [
      'Time Duration:',
       <View style={{ flex: 1,marginLeft: 10, marginRight: 10, alignItems:"stretch",justifyContent: "center"}}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
         <Text>TimeDuration: {this.state.value}</Text>
      </View>,
      'Single Rotation',
       <View style={{ flexDirection: 'row' }}>
        <RadioButton.Group
          onValueChange={(v) => {this.setState({checked: v})}}
        >
        <RadioButton
          value="clockwise"
         // style={{ flex: 1 }}
          status={checked === 'clockwise' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'clockwise' }); }}
        />
        <Text>clockwise</Text>
        <RadioButton
          value="anticlockwise"
          status={checked === 'anticlockwise' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'anticlockwise' }); }}
        />
        <Text>anticlockwise</Text>
        <RadioButton
          value="crosscheck"
          status={checked === 'crosscheck' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'crosscheck' }); }}
        />
        <Text>crosscheck</Text>
        </RadioButton.Group>
      </View>,
      <Button
          onPress={this.hideActionSheet}
          title="Confirm"
        />,
      'AMB Time Duration:',
      <View style={{ flex: 1,marginLeft: 10, marginRight: 10,          alignItems:"stretch",justifyContent: "center"}}>
        <Slider
          value_AMB={this.state.value_AMB}
          onValueChange={value_AMB => this.setState({ value_AMB })}
        />
         <Text>AMB Duration: {this.state.value_AMB}</Text>
      </View>,
      
       
    ];
    const { active, timer, setting, activeTimer, rotation } = this.state;
    return (
      <SafeAreaView style={style.cointainer}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ textAlign: 'center', position: 'relative' }}>
              <Text style={style.Text_style}>{'Traffic Signal'}</Text>
            <View style={{ padding: 25, flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  alignContent: 'center',
                  top: 10,
                  right: 10,
                }}
                onPress={() => this.toogleSetting(this)}>
                <Button
                  onPress={this.showActionSheet}
                  title="Click Me"
                />
          <ActionSheet
          ref={o => (this.ActionSheet = o)}
          //Title of the Bottom Sheet
          title={'Which one do you like ?'}
          //Options Array to show in bottom sheet
          options={optionArray}
          //Define cancel button index in the option array
          //this will take the cancel option in bottom and will highlight it
          cancelButtonIndex={4}
          //If you want to highlight any specific option you can use below prop
          destructiveButtonIndex={1}
          onPress={index => {
            //Clicking on the option will give you the index of the option clicked
           // alert(optionArray[index]);
          }}
          />
         
              </TouchableOpacity>
               </View>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <View style={{ alignSelf: 'center' }}>
              <TouchableOpacity
                style={style.AMB_style}
                // onPress={() => this.activeButton(this, 1)}
                onPress={() => this.activeButton('A', 1)}>
                <Text style={style.Text_style}>{'AMB'}</Text>
              </TouchableOpacity>
              <View
                style={
                  active
                    ? active === 1
                      ? style.Signal_style_active
                      : style.Signal_style_block
                    : style.Signal_style
                }>
                <Text style={style.Text_style}>{'A'}</Text>
              </View>
              {active === 1 && (
                <View style={style.Timer_style}>
                  <Text style={style.Text_style}>{activeTimer}</Text>
                </View>
              )}
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={style.AMB_style}
                  // onPress={() => this.activeButton(this, 4)}
                  onPress={() => this.activeButton('D', 4)}>
                  <Text style={style.Text_style}>{'AMB'}</Text>
                </TouchableOpacity>
                <View
                  style={
                    active
                      ? active === 4
                        ? style.Signal_style_active
                        : style.Signal_style_block
                      : style.Signal_style
                  }>
                  <Text style={style.Text_style}>{'D'}</Text>
                </View>
                {active === 4 && (
                  <View style={style.Timer_style}>
                    <Text style={style.Text_style}>{activeTimer}</Text>
                  </View>
                )}
              </View>
              <View style={{ flexDirection: 'row' }}>
                {active === 2 && (
                  <View style={style.Timer_style}>
                    <Text style={style.Text_style}>{activeTimer}</Text>
                  </View>
                )}
                <View
                  style={
                    active
                      ? active === 2
                        ? style.Signal_style_active
                        : style.Signal_style_block
                      : style.Signal_style
                  }>
                  <Text style={style.Text_style}>{'B'}</Text>
                </View>
                <TouchableOpacity
                  style={style.AMB_style}
                  // onPress={() => this.activeButton(this, 2)}
                  onPress={() => this.activeButton('B', 2)}>
                  <Text style={style.Text_style}>{'AMB'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
              {active === 3 && (
                <View style={style.Timer_style}>
                  <Text style={style.Text_style}>{activeTimer}</Text>
                </View>
              )}
              <View
                style={
                  active
                    ? active === 3
                      ? style.Signal_style_active
                      : style.Signal_style_block
                    : style.Signal_style
                }>
                <Text style={style.Text_style}>{'C'}</Text>
              </View>
              <TouchableOpacity
                style={style.AMB_style}
                // onPress={() => this.activeButton(this, 3)}
                onPress={() => this.activeButton('C', 3)}>
                <Text style={style.Text_style}>{'AMB'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {setting && (
          <view
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 99,
              background: '#fff',
              padding: 20,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text>Setting</Text>
              <TouchableOpacity onPress={() => this.toogleSetting(this)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'sapce-between',
                marginBottom: 20,
              }}>
              <Text style={{ flex: 1 }}>Signal Duration</Text>
              <View
                style={{
                  width: 40,
                }}>
                <TextInput
                  style={{
                    height: 20,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
                  value={timer}
                  onChangeText={(value) => this.setState({ timer: value })}
                />
              </View>
            </View>

            <View>
              <Text>Signal Rotation</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <CheckBox
                  value={rotation === 1}
                  onValueChange={() => this.setState({ rotation: 1 })}
                  style={{ marginRight: 10 }}
                />
                <Text>Clockwise</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <CheckBox
                  value={rotation === 2}
                  onValueChange={() => this.setState({ rotation: 2 })}
                  style={{ marginRight: 10 }}
                />
                <Text>Anti - Clockwise</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <CheckBox
                  value={rotation === 3}
                  onValueChange={() => this.setState({ rotation: 3 })}
                  style={{ marginRight: 10 }}
                />
                <Text>Up to Down, Left to Right</Text>
              </View>
            </View>
          </view>
        )}
      </SafeAreaView>
    );
  }
}
