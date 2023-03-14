import * as React from 'react';
import * as ResetPassword from './reset-password';

export default { title: 'ResetPassword' };

export const Basic = () => (
  <ResetPassword.Root
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <ResetPassword.PasswordField>
      <ResetPassword.Label>Password</ResetPassword.Label>
      <ResetPassword.PasswordInput />
    </ResetPassword.PasswordField>

    <ResetPassword.ConfirmPasswordField>
      <ResetPassword.Label>Confirm password</ResetPassword.Label>
      <ResetPassword.ConfirmPasswordInput />
    </ResetPassword.ConfirmPasswordField>

    <ResetPassword.Submit>Reset password</ResetPassword.Submit>
  </ResetPassword.Root>
);
