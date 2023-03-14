import * as React from 'react';
import * as SignIn from './sign-in';

export default { title: 'SignIn' };

export const Basic = () => (
  <SignIn.Root
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <SignIn.EmailField>
      <SignIn.Label>Email</SignIn.Label>
      <SignIn.EmailInput />
    </SignIn.EmailField>

    <SignIn.PasswordField>
      <SignIn.Label>Password</SignIn.Label>
      <SignIn.PasswordInput />
    </SignIn.PasswordField>

    <SignIn.Submit>Sign in</SignIn.Submit>
  </SignIn.Root>
);
