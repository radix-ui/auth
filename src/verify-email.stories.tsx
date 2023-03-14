import * as React from 'react';
import * as VerifyEmail from './verify-email';

export default { title: 'VerifyEmail' };

export const Basic = () => (
  <VerifyEmail.Root
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <VerifyEmail.Submit>Verify email</VerifyEmail.Submit>
  </VerifyEmail.Root>
);
