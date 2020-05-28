import React from 'react';
import { Title } from '../../atoms';
import  { FormSignIn } from '../../molecules'
import { ButtonSignUp,ButtonSignIn } from './SignInContent.style';
import './SignInContent.css';

const SignInContent = ({signInMethod,signUpMethod}) => {
  return (
    <div className='greyDiv'>
      <div className='yellowDiv'></div>
      <div className='signInForm'>
        <Title htmlType='H1'>Olá! Digite o seu e-mail ou usuário</Title>
        <FormSignIn placeholder="E-mail ou usuário" type="text" name='=FormSignIn'></FormSignIn>
        <ButtonSignIn method={signInMethod}>Continuar</ButtonSignIn>
        <ButtonSignUp method={signUpMethod} >Criar Conta</ButtonSignUp>
      </div>
    </div>
  );
};

export default SignInContent;
