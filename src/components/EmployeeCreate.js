import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
  }

  render() {

    console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          > Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  // pickerTextStyle: {
  //   paddingLeft: 20,
  //   flex: 2
  // }
});

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
