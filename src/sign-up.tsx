import * as React from 'react';
import * as Form from '@radix-ui/react-form';
import { EmailField, EmailInput } from './email';
import { PasswordField, PasswordInput } from './password';
import {
  ConfirmPasswordField,
  ConfirmPasswordInput,
  MatchingPasswordMessage,
} from './confirm-password';

/* -------------------------------------------------------------------------------------------------
 * SignUpRoot
 * -----------------------------------------------------------------------------------------------*/

type SignUpRootElement = React.ElementRef<typeof Form.Root>;
type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
interface SignUpRootProps extends FormRootProps {}

const SignUpRoot = React.forwardRef<SignUpRootElement, SignUpRootProps>((props, forwardedRef) => {
  return <Form.Root {...props} ref={forwardedRef} />;
});
SignUpRoot.displayName = 'SignUpRoot';

/* -------------------------------------------------------------------------------------------------
 * SignUpField
 * -----------------------------------------------------------------------------------------------*/

type SignUpFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface SignUpFieldProps extends FormFieldProps {}

const SignUpField = React.forwardRef<SignUpFieldElement, SignUpFieldProps>(
  (props, forwardedRef) => {
    return <Form.Field {...props} ref={forwardedRef} />;
  },
);
SignUpField.displayName = 'SignUpField';

/* -------------------------------------------------------------------------------------------------
 * SignUpLabel
 * -----------------------------------------------------------------------------------------------*/

type SignUpLabelElement = React.ElementRef<typeof Form.Label>;
type FormLabelProps = React.ComponentPropsWithoutRef<typeof Form.Label>;
interface SignUpLabelProps extends FormLabelProps {}

const SignUpLabel = React.forwardRef<SignUpLabelElement, SignUpLabelProps>(
  (props, forwardedRef) => {
    return <Form.Label {...props} ref={forwardedRef} />;
  },
);
SignUpLabel.displayName = 'SignUpLabel';

/* -------------------------------------------------------------------------------------------------
 * SignUpControl
 * -----------------------------------------------------------------------------------------------*/

type SignUpControlElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface SignUpControlProps extends FormControlProps {}

const SignUpControl = React.forwardRef<SignUpControlElement, SignUpControlProps>(
  (props, forwardedRef) => {
    return <Form.Control {...props} ref={forwardedRef} />;
  },
);
SignUpControl.displayName = 'SignUpControl';

/* -------------------------------------------------------------------------------------------------
 * SignUpMessage
 * -----------------------------------------------------------------------------------------------*/

type SignUpMessageElement = React.ElementRef<typeof Form.Message>;
type FormMessageProps = React.ComponentPropsWithoutRef<typeof Form.Message>;
interface SignUpMessageProps extends FormMessageProps {}

const SignUpMessage = React.forwardRef<SignUpMessageElement, SignUpMessageProps>(
  (props, forwardedRef) => {
    return <Form.Message {...props} ref={forwardedRef} />;
  },
);
SignUpMessage.displayName = 'SignUpMessage';

/* -------------------------------------------------------------------------------------------------
 * SignUpValidityState
 * -----------------------------------------------------------------------------------------------*/

type FormValidityStateProps = React.ComponentPropsWithoutRef<typeof Form.ValidityState>;
interface SignUpValidityStateProps extends FormValidityStateProps {}

const SignUpValidityState = (props: SignUpValidityStateProps) => {
  return <Form.ValidityState {...props} />;
};
SignUpValidityState.displayName = 'SignUpValidityState';

/* -------------------------------------------------------------------------------------------------
 * SignUpEmailField
 * -----------------------------------------------------------------------------------------------*/

type SignUpEmailFieldElement = React.ElementRef<typeof EmailField>;
type EmailFieldProps = React.ComponentPropsWithoutRef<typeof EmailField>;
interface SignUpEmailFieldProps extends EmailFieldProps {}

const SignUpEmailField = React.forwardRef<SignUpEmailFieldElement, SignUpEmailFieldProps>(
  (props, forwardedRef) => {
    return <EmailField {...props} ref={forwardedRef} />;
  },
);
SignUpEmailField.displayName = 'SignUpEmailField';

/* -------------------------------------------------------------------------------------------------
 * SignUpEmailInput
 * -----------------------------------------------------------------------------------------------*/

type SignUpEmailInputElement = React.ElementRef<typeof EmailInput>;
type EmailInputProps = React.ComponentPropsWithoutRef<typeof EmailInput>;
interface SignUpEmailInputProps extends EmailInputProps {}

const SignUpEmailInput = React.forwardRef<SignUpEmailInputElement, SignUpEmailInputProps>(
  (props, forwardedRef) => {
    return <EmailInput {...props} ref={forwardedRef} />;
  },
);
SignUpEmailInput.displayName = 'SignUpEmailInput';

/* -------------------------------------------------------------------------------------------------
 * SignUpPasswordField
 * -----------------------------------------------------------------------------------------------*/

type SignUpPasswordFieldElement = React.ElementRef<typeof PasswordField>;
type PasswordFieldProps = React.ComponentPropsWithoutRef<typeof PasswordField>;
interface SignUpPasswordFieldProps extends PasswordFieldProps {}

const SignUpPasswordField = React.forwardRef<SignUpPasswordFieldElement, SignUpPasswordFieldProps>(
  (props, forwardedRef) => {
    return <PasswordField {...props} ref={forwardedRef} />;
  },
);
SignUpPasswordField.displayName = 'SignUpPasswordField';

/* -------------------------------------------------------------------------------------------------
 * SignUpPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type SignUpPasswordInputElement = React.ElementRef<typeof PasswordInput>;
type PasswordInputProps = React.ComponentPropsWithoutRef<typeof PasswordInput>;
interface SignUpPasswordInputProps extends PasswordInputProps {}

const SignUpPasswordInput = React.forwardRef<SignUpPasswordInputElement, SignUpPasswordInputProps>(
  (props, forwardedRef) => {
    return <PasswordInput {...props} ref={forwardedRef} />;
  },
);
SignUpPasswordInput.displayName = 'SignUpPasswordInput';

/* -------------------------------------------------------------------------------------------------
 * SignUpConfirmPasswordField
 * -----------------------------------------------------------------------------------------------*/

type SignUpConfirmPasswordFieldElement = React.ElementRef<typeof ConfirmPasswordField>;
type ConfirmPasswordFieldProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordField>;
interface SignUpConfirmPasswordFieldProps extends ConfirmPasswordFieldProps {}

const SignUpConfirmPasswordField = React.forwardRef<
  SignUpConfirmPasswordFieldElement,
  SignUpConfirmPasswordFieldProps
>((props, forwardedRef) => {
  return <ConfirmPasswordField {...props} ref={forwardedRef} />;
});
SignUpConfirmPasswordField.displayName = 'SignUpConfirmPasswordField';

/* -------------------------------------------------------------------------------------------------
 * SignUpConfirmPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type SignUpConfirmPasswordInputElement = React.ElementRef<typeof ConfirmPasswordInput>;
type ConfirmPasswordInputProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordInput>;
interface SignUpConfirmPasswordInputProps extends ConfirmPasswordInputProps {}

const SignUpConfirmPasswordInput = React.forwardRef<
  SignUpConfirmPasswordInputElement,
  SignUpConfirmPasswordInputProps
>((props, forwardedRef) => {
  return <ConfirmPasswordInput {...props} ref={forwardedRef} />;
});
SignUpConfirmPasswordInput.displayName = 'SignUpConfirmPasswordInput';

/* -------------------------------------------------------------------------------------------------
 * SignUpMatchingPasswordMessage
 * -----------------------------------------------------------------------------------------------*/

type SignUpMatchingPasswordMessageElement = React.ElementRef<typeof MatchingPasswordMessage>;
type MatchingPasswordMessageProps = React.ComponentPropsWithoutRef<typeof MatchingPasswordMessage>;
interface SignUpMatchingPasswordMessageProps extends MatchingPasswordMessageProps {}

const SignUpMatchingPasswordMessage = React.forwardRef<
  SignUpMatchingPasswordMessageElement,
  SignUpMatchingPasswordMessageProps
>((props, forwardedRef) => {
  return <MatchingPasswordMessage {...props} ref={forwardedRef} />;
});
SignUpMatchingPasswordMessage.displayName = 'SignUpMatchingPasswordMessage';

/* -------------------------------------------------------------------------------------------------
 * SignUpSubmit
 * -----------------------------------------------------------------------------------------------*/

type SignUpSubmitElement = React.ElementRef<typeof Form.Submit>;
type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
interface SignUpSubmitProps extends FormSubmitProps {}

const SignUpSubmit = React.forwardRef<SignUpSubmitElement, SignUpSubmitProps>(
  (props, forwardedRef) => {
    return <Form.Submit {...props} ref={forwardedRef} />;
  },
);
SignUpSubmit.displayName = 'SignUpSubmit';

/* -----------------------------------------------------------------------------------------------*/

export {
  SignUpRoot,
  SignUpField,
  SignUpLabel,
  SignUpControl,
  SignUpMessage,
  SignUpValidityState,
  SignUpEmailField,
  SignUpEmailInput,
  SignUpPasswordField,
  SignUpPasswordInput,
  SignUpConfirmPasswordField,
  SignUpConfirmPasswordInput,
  SignUpMatchingPasswordMessage,
  SignUpSubmit,
  //
  SignUpRoot as Root,
  SignUpField as Field,
  SignUpLabel as Label,
  SignUpControl as Control,
  SignUpMessage as ClientMessage,
  SignUpValidityState as ValidityState,
  SignUpEmailField as EmailField,
  SignUpEmailInput as EmailInput,
  SignUpPasswordField as PasswordField,
  SignUpPasswordInput as PasswordInput,
  SignUpConfirmPasswordField as ConfirmPasswordField,
  SignUpConfirmPasswordInput as ConfirmPasswordInput,
  SignUpMatchingPasswordMessage as MatchingPasswordMessage,
  SignUpSubmit as Submit,
};

export type {
  SignUpRootProps,
  SignUpFieldProps,
  SignUpLabelProps,
  SignUpControlProps,
  SignUpMessageProps,
  SignUpValidityStateProps,
  SignUpEmailFieldProps,
  SignUpEmailInputProps,
  SignUpPasswordFieldProps,
  SignUpPasswordInputProps,
  SignUpConfirmPasswordFieldProps,
  SignUpConfirmPasswordInputProps,
  SignUpMatchingPasswordMessageProps,
  SignUpSubmitProps,
};
