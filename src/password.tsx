import * as React from 'react';
import * as Form from '@radix-ui/react-form';

/* -------------------------------------------------------------------------------------------------
 * PasswordField
 * -----------------------------------------------------------------------------------------------*/

type PasswordFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface PasswordFieldProps extends Omit<FormFieldProps, 'name'> {
  name?: FormFieldProps['name'];
}

const PasswordField = React.forwardRef<PasswordFieldElement, PasswordFieldProps>(
  (props, forwardedRef) => {
    return <Form.Field name="password" {...props} ref={forwardedRef} />;
  },
);
PasswordField.displayName = 'PasswordField';

/* -------------------------------------------------------------------------------------------------
 * PasswordInput
 * -----------------------------------------------------------------------------------------------*/

type PasswordInputElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface PasswordInputProps extends FormControlProps {}

const PasswordInput = React.forwardRef<PasswordInputElement, PasswordInputProps>(
  (props, forwardedRef) => {
    return <Form.Control type="password" required {...props} ref={forwardedRef} />;
  },
);
PasswordInput.displayName = 'PasswordInput';

/* -----------------------------------------------------------------------------------------------*/

export { PasswordField, PasswordInput };

export type { PasswordFieldProps, PasswordInputProps };
