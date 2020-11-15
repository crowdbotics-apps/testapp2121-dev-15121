import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_5: "", TextInput_7: "" }

  render = () => (
    <View>
      <View>
        <TextInput
          placeholder="Sample text input placeholder"
          value={this.state.TextInput_5}
          onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
        />
        <TextInput
          placeholder="Sample text input placeholder"
          value={this.state.TextInput_7}
          onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
        />
        <Button title="Press me!" onPress={() => alert("Pressed!")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  View_3: {},
  TextInput_5: {},
  TextInput_7: {},
  Button_9: {}
})
