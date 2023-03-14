import * as React from 'react';
import * as RequestPassword from './request-password';

export default { title: 'RequestPassword' };

export const Basic = () => (
  <RequestPassword.Root
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <RequestPassword.EmailField>
      <RequestPassword.Label>Email</RequestPassword.Label>
      <RequestPassword.EmailInput />
    </RequestPassword.EmailField>

    <RequestPassword.Submit>Reset password</RequestPassword.Submit>
  </RequestPassword.Root>
);
