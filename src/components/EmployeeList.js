import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeesFetch();
  }

  componentWillUnmount() {
    this.props.employeesFetch();
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={ ({item}) => (
          <ListItem
            key = {item.uid}
            employee = {item}
          />
        )}
        keyExtractor={employee => employee.key}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
