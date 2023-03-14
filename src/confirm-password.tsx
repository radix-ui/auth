import * as React from 'react';
import * as Form from '@radix-ui/react-form';

/* -------------------------------------------------------------------------------------------------
 * ConfirmPasswordField
 * -----------------------------------------------------------------------------------------------*/

type ConfirmPasswordFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface ConfirmPasswordFieldProps extends Omit<FormFieldProps, 'name'> {
  name?: FormFieldProps['name'];
}

const ConfirmPasswordField = React.forwardRef<
  ConfirmPasswordFieldElement,
  ConfirmPasswordFieldProps
>((props, forwardedRef) => {
  return <Form.Field name="confirmPassword" {...props} ref={forwardedRef} />;
});
ConfirmPasswordField.displayName = 'ConfirmPasswordField';

/* -------------------------------------------------------------------------------------------------
 * ConfirmPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type ConfirmPasswordInputElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface ConfirmPasswordInputProps extends FormControlProps {}

const ConfirmPasswordInput = React.forwardRef<
  ConfirmPasswordInputElement,
  ConfirmPasswordInputProps
>((props, forwardedRef) => {
  return (
    <Form.Control
      type="password"
      required
      onPaste={(event) => event.preventDefault()}
      {...props}
      ref={forwardedRef}
    />
  );
});
ConfirmPasswordInput.displayName = 'ConfirmPasswordInput';

/* -------------------------------------------------------------------------------------------------
 * MatchingPasswordMessage
 * -----------------------------------------------------------------------------------------------*/

type MatchingPasswordMessageElement = React.ElementRef<typeof Form.Message>;
type FormMessageProps = React.ComponentPropsWithoutRef<typeof Form.Message>;
interface MatchingPasswordMessageProps extends Omit<FormMessageProps, 'match'> {}

const MatchingPasswordMessage = React.forwardRef<
  MatchingPasswordMessageElement,
  MatchingPasswordMessageProps
>((props, forwardedRef) => {
  return (
    <Form.Message
      {...props}
      ref={forwardedRef}
      match={(value, formData) => value !== formData.get('password')}
    />
  );
});
MatchingPasswordMessage.displayName = 'MatchingPasswordMessage';

/* -----------------------------------------------------------------------------------------------*/

export { ConfirmPasswordField, ConfirmPasswordInput, MatchingPasswordMessage };

export type { ConfirmPasswordFieldProps, ConfirmPasswordInputProps, MatchingPasswordMessageProps };
