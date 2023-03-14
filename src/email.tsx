import * as React from 'react';
import * as Form from '@radix-ui/react-form';

/* -------------------------------------------------------------------------------------------------
 * EmailField
 * -----------------------------------------------------------------------------------------------*/

type EmailFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface EmailFieldProps extends Omit<FormFieldProps, 'name'> {
  name?: FormFieldProps['name'];
}

const EmailField = React.forwardRef<EmailFieldElement, EmailFieldProps>((props, forwardedRef) => {
  return <Form.Field name="email" {...props} ref={forwardedRef} />;
});
EmailField.displayName = 'EmailField';

/* -------------------------------------------------------------------------------------------------
 * EmailInput
 * -----------------------------------------------------------------------------------------------*/

type EmailInputElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface EmailInputProps extends FormControlProps {}

const EmailInput = React.forwardRef<EmailInputElement, EmailInputProps>((props, forwardedRef) => {
  return <Form.Control type="email" required {...props} ref={forwardedRef} />;
});
EmailInput.displayName = 'EmailInput';

/* -----------------------------------------------------------------------------------------------*/

export { EmailField, EmailInput };

export type { EmailFieldProps, EmailInputProps };
