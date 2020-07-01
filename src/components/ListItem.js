import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

// const ListItem = (props) => {
//   const { name } = this.props.employee;
//   return (
//     <CardSection>
//       <Text style={styles.titleStyle}> { name } </Text>
//     </CardSection>
//   );
// };
class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {name} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={{flex: 1}}>
          <CardSection >
            <Text style={styles.titleStyle}> {name} </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
