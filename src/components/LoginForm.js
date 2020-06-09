import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle} >
            {this.props.error}
          </Text>
        </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size={'small'} />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='email@gmail.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              autoCorrect={false}
              autoCapitalize={'none'}
            />
          </CardSection>

          <CardSection>
            <Input
              label='Password'
              placeholder='Password'
              secureTextEntry
              onChangeText = {this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}
const styles = StyleSheet.create({
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
