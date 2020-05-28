import React, { Component } from 'react';
import { SignIn as SignInTemplate } from '../../templates';
import {SignInContent } from '../../components/organisms'


class SignIn extends Component {

  render() {

    return (
      <SignInTemplate>
        <SignInContent signInMethod={this.props.signInMethod} signUpMethod={this.props.signUpMethod}></SignInContent>
      </SignInTemplate>
    );

  }
};

export default SignIn;
