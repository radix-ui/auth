import * as React from 'react';
import * as Form from '@radix-ui/react-form';
import { EmailField, EmailInput } from './email';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordRoot
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordRootElement = React.ElementRef<typeof Form.Root>;
type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
interface RequestPasswordRootProps extends FormRootProps {}

const RequestPasswordRoot = React.forwardRef<RequestPasswordRootElement, RequestPasswordRootProps>(
  (props, forwardedRef) => {
    return <Form.Root {...props} ref={forwardedRef} />;
  },
);
RequestPasswordRoot.displayName = 'RequestPasswordRoot';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordField
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface RequestPasswordFieldProps extends FormFieldProps {}

const RequestPasswordField = React.forwardRef<
  RequestPasswordFieldElement,
  RequestPasswordFieldProps
>((props, forwardedRef) => {
  return <Form.Field {...props} ref={forwardedRef} />;
});
RequestPasswordField.displayName = 'RequestPasswordField';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordLabel
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordLabelElement = React.ElementRef<typeof Form.Label>;
type FormLabelProps = React.ComponentPropsWithoutRef<typeof Form.Label>;
interface RequestPasswordLabelProps extends FormLabelProps {}

const RequestPasswordLabel = React.forwardRef<
  RequestPasswordLabelElement,
  RequestPasswordLabelProps
>((props, forwardedRef) => {
  return <Form.Label {...props} ref={forwardedRef} />;
});
RequestPasswordLabel.displayName = 'RequestPasswordLabel';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordControl
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordControlElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface RequestPasswordControlProps extends FormControlProps {}

const RequestPasswordControl = React.forwardRef<
  RequestPasswordControlElement,
  RequestPasswordControlProps
>((props, forwardedRef) => {
  return <Form.Control {...props} ref={forwardedRef} />;
});
RequestPasswordControl.displayName = 'RequestPasswordControl';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordMessage
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordMessageElement = React.ElementRef<typeof Form.Message>;
type FormMessageProps = React.ComponentPropsWithoutRef<typeof Form.Message>;
interface RequestPasswordMessageProps extends FormMessageProps {}

const RequestPasswordMessage = React.forwardRef<
  RequestPasswordMessageElement,
  RequestPasswordMessageProps
>((props, forwardedRef) => {
  return <Form.Message {...props} ref={forwardedRef} />;
});
RequestPasswordMessage.displayName = 'RequestPasswordMessage';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordValidityState
 * -----------------------------------------------------------------------------------------------*/

type FormValidityStateProps = React.ComponentPropsWithoutRef<typeof Form.ValidityState>;
interface RequestPasswordValidityStateProps extends FormValidityStateProps {}

const RequestPasswordValidityState = (props: RequestPasswordValidityStateProps) => {
  return <Form.ValidityState {...props} />;
};
RequestPasswordValidityState.displayName = 'RequestPasswordValidityState';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordEmailField
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordEmailFieldElement = React.ElementRef<typeof EmailField>;
type EmailFieldProps = React.ComponentPropsWithoutRef<typeof EmailField>;
interface RequestPasswordEmailFieldProps extends EmailFieldProps {}

const RequestPasswordEmailField = React.forwardRef<
  RequestPasswordEmailFieldElement,
  RequestPasswordEmailFieldProps
>((props, forwardedRef) => {
  return <EmailField {...props} ref={forwardedRef} />;
});
RequestPasswordEmailField.displayName = 'RequestPasswordEmailField';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordEmailInput
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordEmailInputElement = React.ElementRef<typeof EmailInput>;
type EmailInputProps = React.ComponentPropsWithoutRef<typeof EmailInput>;
interface RequestPasswordEmailInputProps extends EmailInputProps {}

const RequestPasswordEmailInput = React.forwardRef<
  RequestPasswordEmailInputElement,
  RequestPasswordEmailInputProps
>((props, forwardedRef) => {
  return <EmailInput {...props} ref={forwardedRef} />;
});
RequestPasswordEmailInput.displayName = 'RequestPasswordEmailInput';

/* -------------------------------------------------------------------------------------------------
 * RequestPasswordSubmit
 * -----------------------------------------------------------------------------------------------*/

type RequestPasswordSubmitElement = React.ElementRef<typeof Form.Submit>;
type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
interface RequestPasswordSubmitProps extends FormSubmitProps {}

const RequestPasswordSubmit = React.forwardRef<
  RequestPasswordSubmitElement,
  RequestPasswordSubmitProps
>((props, forwardedRef) => {
  return <Form.Submit {...props} ref={forwardedRef} />;
});
RequestPasswordSubmit.displayName = 'RequestPasswordSubmit';

/* -----------------------------------------------------------------------------------------------*/

export {
  RequestPasswordRoot,
  RequestPasswordField,
  RequestPasswordLabel,
  RequestPasswordControl,
  RequestPasswordMessage,
  RequestPasswordValidityState,
  RequestPasswordEmailField,
  RequestPasswordEmailInput,
  RequestPasswordSubmit,
  //
  RequestPasswordRoot as Root,
  RequestPasswordField as Field,
  RequestPasswordLabel as Label,
  RequestPasswordControl as Control,
  RequestPasswordMessage as Message,
  RequestPasswordValidityState as ValidityState,
  RequestPasswordEmailField as EmailField,
  RequestPasswordEmailInput as EmailInput,
  RequestPasswordSubmit as Submit,
};

export type {
  RequestPasswordRootProps,
  RequestPasswordFieldProps,
  RequestPasswordLabelProps,
  RequestPasswordControlProps,
  RequestPasswordMessageProps,
  RequestPasswordValidityStateProps,
  RequestPasswordEmailFieldProps,
  RequestPasswordEmailInputProps,
  RequestPasswordSubmitProps,
};
