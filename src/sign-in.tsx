import * as React from 'react';
import * as Form from '@radix-ui/react-form';
import { EmailField, EmailInput } from './email';
import { PasswordField, PasswordInput } from './password';

/* -------------------------------------------------------------------------------------------------
 * SignInRoot
 * -----------------------------------------------------------------------------------------------*/

type SignInRootElement = React.ElementRef<typeof Form.Root>;
type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
interface SignInRootProps extends FormRootProps {}

const SignInRoot = React.forwardRef<SignInRootElement, SignInRootProps>((props, forwardedRef) => {
  return <Form.Root {...props} ref={forwardedRef} />;
});
SignInRoot.displayName = 'SignInRoot';

/* -------------------------------------------------------------------------------------------------
 * SignInField
 * -----------------------------------------------------------------------------------------------*/

type SignInFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface SignInFieldProps extends FormFieldProps {}

const SignInField = React.forwardRef<SignInFieldElement, SignInFieldProps>(
  (props, forwardedRef) => {
    return <Form.Field {...props} ref={forwardedRef} />;
  },
);
SignInField.displayName = 'SignInField';

/* -------------------------------------------------------------------------------------------------
 * SignInLabel
 * -----------------------------------------------------------------------------------------------*/

type SignInLabelElement = React.ElementRef<typeof Form.Label>;
type FormLabelProps = React.ComponentPropsWithoutRef<typeof Form.Label>;
interface SignInLabelProps extends FormLabelProps {}

const SignInLabel = React.forwardRef<SignInLabelElement, SignInLabelProps>(
  (props, forwardedRef) => {
    return <Form.Label {...props} ref={forwardedRef} />;
  },
);
SignInLabel.displayName = 'SignInLabel';

/* -------------------------------------------------------------------------------------------------
 * SignInControl
 * -----------------------------------------------------------------------------------------------*/

type SignInControlElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface SignInControlProps extends FormControlProps {}

const SignInControl = React.forwardRef<SignInControlElement, SignInControlProps>(
  (props, forwardedRef) => {
    return <Form.Control {...props} ref={forwardedRef} />;
  },
);
SignInControl.displayName = 'SignInControl';

/* -------------------------------------------------------------------------------------------------
 * SignInMessage
 * -----------------------------------------------------------------------------------------------*/

type SignInMessageElement = React.ElementRef<typeof Form.Message>;
type FormMessageProps = React.ComponentPropsWithoutRef<typeof Form.Message>;
interface SignInMessageProps extends FormMessageProps {}

const SignInMessage = React.forwardRef<SignInMessageElement, SignInMessageProps>(
  (props, forwardedRef) => {
    return <Form.Message {...props} ref={forwardedRef} />;
  },
);
SignInMessage.displayName = 'SignInMessage';

/* -------------------------------------------------------------------------------------------------
 * SignInValidityState
 * -----------------------------------------------------------------------------------------------*/

type FormValidityStateProps = React.ComponentPropsWithoutRef<typeof Form.ValidityState>;
interface SignInValidityStateProps extends FormValidityStateProps {}

const SignInValidityState = (props: SignInValidityStateProps) => {
  return <Form.ValidityState {...props} />;
};
SignInValidityState.displayName = 'SignInValidityState';

/* -------------------------------------------------------------------------------------------------
 * SignInEmailField
 * -----------------------------------------------------------------------------------------------*/

type SignInEmailFieldElement = React.ElementRef<typeof EmailField>;
type EmailFieldProps = React.ComponentPropsWithoutRef<typeof EmailField>;
interface SignInEmailFieldProps extends EmailFieldProps {}

const SignInEmailField = React.forwardRef<SignInEmailFieldElement, SignInEmailFieldProps>(
  (props, forwardedRef) => {
    return <EmailField {...props} ref={forwardedRef} />;
  },
);
SignInEmailField.displayName = 'SignInEmailField';

/* -------------------------------------------------------------------------------------------------
 * SignInEmailInput
 * -----------------------------------------------------------------------------------------------*/

type SignInEmailInputElement = React.ElementRef<typeof EmailInput>;
type EmailInputProps = React.ComponentPropsWithoutRef<typeof EmailInput>;
interface SignInEmailInputProps extends EmailInputProps {}

const SignInEmailInput = React.forwardRef<SignInEmailInputElement, SignInEmailInputProps>(
  (props, forwardedRef) => {
    return <EmailInput {...props} ref={forwardedRef} />;
  },
);
SignInEmailInput.displayName = 'SignInEmailInput';

/* -------------------------------------------------------------------------------------------------
 * SignInPasswordField
 * -----------------------------------------------------------------------------------------------*/

type SignInPasswordFieldElement = React.ElementRef<typeof PasswordField>;
type PasswordFieldProps = React.ComponentPropsWithoutRef<typeof PasswordField>;
interface SignInPasswordFieldProps extends PasswordFieldProps {}

const SignInPasswordField = React.forwardRef<SignInPasswordFieldElement, SignInPasswordFieldProps>(
  (props, forwardedRef) => {
    return <PasswordField {...props} ref={forwardedRef} />;
  },
);
SignInPasswordField.displayName = 'SignInPasswordField';

/* -------------------------------------------------------------------------------------------------
 * SignInPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type SignInPasswordInputElement = React.ElementRef<typeof PasswordInput>;
type PasswordInputProps = React.ComponentPropsWithoutRef<typeof PasswordInput>;
interface SignInPasswordInputProps extends PasswordInputProps {}

const SignInPasswordInput = React.forwardRef<SignInPasswordInputElement, SignInPasswordInputProps>(
  (props, forwardedRef) => {
    return <PasswordInput {...props} ref={forwardedRef} />;
  },
);
SignInPasswordInput.displayName = 'SignInEmailInput';

/* -------------------------------------------------------------------------------------------------
 * SignInSubmit
 * -----------------------------------------------------------------------------------------------*/

type SignInSubmitElement = React.ElementRef<typeof Form.Submit>;
type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
interface SignInSubmitProps extends FormSubmitProps {}

const SignInSubmit = React.forwardRef<SignInSubmitElement, SignInSubmitProps>(
  (props, forwardedRef) => {
    return <Form.Submit {...props} ref={forwardedRef} />;
  },
);
SignInSubmit.displayName = 'SignInSubmit';

/* -----------------------------------------------------------------------------------------------*/

export {
  SignInRoot,
  SignInField,
  SignInLabel,
  SignInControl,
  SignInMessage,
  SignInValidityState,
  SignInEmailField,
  SignInEmailInput,
  SignInPasswordField,
  SignInPasswordInput,
  SignInSubmit,
  //
  SignInRoot as Root,
  SignInField as Field,
  SignInLabel as Label,
  SignInControl as Control,
  SignInMessage as Message,
  SignInValidityState as ValidityState,
  SignInEmailField as EmailField,
  SignInEmailInput as EmailInput,
  SignInPasswordField as PasswordField,
  SignInPasswordInput as PasswordInput,
  SignInSubmit as Submit,
};

export type {
  SignInRootProps,
  SignInFieldProps,
  SignInLabelProps,
  SignInControlProps,
  SignInMessageProps,
  SignInValidityStateProps,
  SignInEmailFieldProps,
  SignInEmailInputProps,
  SignInPasswordFieldProps,
  SignInPasswordInputProps,
  SignInSubmitProps,
};
