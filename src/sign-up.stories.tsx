import * as React from 'react';
import * as SignUp from './sign-up';

export default { title: 'SignUp' };

export const Basic = () => (
  <SignUp.Root
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <SignUp.EmailField>
      <SignUp.Label>Email</SignUp.Label>
      <SignUp.EmailInput />
    </SignUp.EmailField>

    <SignUp.PasswordField>
      <SignUp.Label>Password</SignUp.Label>
      <SignUp.PasswordInput />
    </SignUp.PasswordField>

    <SignUp.ConfirmPasswordField>
      <SignUp.Label>Confirm password</SignUp.Label>
      <SignUp.ConfirmPasswordInput />
    </SignUp.ConfirmPasswordField>

    <SignUp.Submit>Sign up</SignUp.Submit>
  </SignUp.Root>
);
