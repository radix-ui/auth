import * as React from 'react';
import * as Form from '@radix-ui/react-form';
import { PasswordField, PasswordInput } from './password';
import {
  ConfirmPasswordField,
  ConfirmPasswordInput,
  MatchingPasswordMessage,
} from './confirm-password';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordRoot
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordRootElement = React.ElementRef<typeof Form.Root>;
type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
interface ResetPasswordRootProps extends FormRootProps {
  token?: string;
}

const ResetPasswordRoot = React.forwardRef<ResetPasswordRootElement, ResetPasswordRootProps>(
  (props, forwardedRef) => {
    const { children, token: tokenProp, ...rootProps } = props;
    const [token, setToken] = React.useState(tokenProp);

    /**
     * If the token wasn't set server-side (for SSR support)
     * we grab it from the querystring client-side after the fact.
     */
    React.useEffect(() => {
      if (tokenProp === undefined) {
        const token = new URLSearchParams(window.location.search).get('token');
        if (token) {
          setToken(token);
        }
      }
    }, [tokenProp]);

    return (
      <Form.Root {...rootProps} ref={forwardedRef}>
        {token ? <input type="hidden" name="token" value={token} /> : null}
        {children}
      </Form.Root>
    );
  },
);
ResetPasswordRoot.displayName = 'ResetPasswordRoot';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordField
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordFieldElement = React.ElementRef<typeof Form.Field>;
type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
interface ResetPasswordFieldProps extends FormFieldProps {}

const ResetPasswordField = React.forwardRef<ResetPasswordFieldElement, ResetPasswordFieldProps>(
  (props, forwardedRef) => {
    return <Form.Field {...props} ref={forwardedRef} />;
  },
);
ResetPasswordField.displayName = 'ResetPasswordField';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordLabel
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordLabelElement = React.ElementRef<typeof Form.Label>;
type FormLabelProps = React.ComponentPropsWithoutRef<typeof Form.Label>;
interface ResetPasswordLabelProps extends FormLabelProps {}

const ResetPasswordLabel = React.forwardRef<ResetPasswordLabelElement, ResetPasswordLabelProps>(
  (props, forwardedRef) => {
    return <Form.Label {...props} ref={forwardedRef} />;
  },
);
ResetPasswordLabel.displayName = 'ResetPasswordLabel';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordControl
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordControlElement = React.ElementRef<typeof Form.Control>;
type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
interface ResetPasswordControlProps extends FormControlProps {}

const ResetPasswordControl = React.forwardRef<
  ResetPasswordControlElement,
  ResetPasswordControlProps
>((props, forwardedRef) => {
  return <Form.Control {...props} ref={forwardedRef} />;
});
ResetPasswordControl.displayName = 'ResetPasswordControl';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordMessage
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordMessageElement = React.ElementRef<typeof Form.Message>;
type FormMessageProps = React.ComponentPropsWithoutRef<typeof Form.Message>;
interface ResetPasswordMessageProps extends FormMessageProps {}

const ResetPasswordMessage = React.forwardRef<
  ResetPasswordMessageElement,
  ResetPasswordMessageProps
>((props, forwardedRef) => {
  return <Form.Message {...props} ref={forwardedRef} />;
});
ResetPasswordMessage.displayName = 'ResetPasswordMessage';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordValidityState
 * -----------------------------------------------------------------------------------------------*/

type FormValidityStateProps = React.ComponentPropsWithoutRef<typeof Form.ValidityState>;
interface ResetPasswordValidityStateProps extends FormValidityStateProps {}

const ResetPasswordValidityState = (props: ResetPasswordValidityStateProps) => {
  return <Form.ValidityState {...props} />;
};
ResetPasswordValidityState.displayName = 'ResetPasswordValidityState';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordPasswordField
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordPasswordFieldElement = React.ElementRef<typeof PasswordField>;
type PasswordFieldProps = React.ComponentPropsWithoutRef<typeof PasswordField>;
interface ResetPasswordPasswordFieldProps extends PasswordFieldProps {}

const ResetPasswordPasswordField = React.forwardRef<
  ResetPasswordPasswordFieldElement,
  ResetPasswordPasswordFieldProps
>((props, forwardedRef) => {
  return <PasswordField {...props} ref={forwardedRef} />;
});
ResetPasswordPasswordField.displayName = 'ResetPasswordPasswordField';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordPasswordInputElement = React.ElementRef<typeof PasswordInput>;
type PasswordInputProps = React.ComponentPropsWithoutRef<typeof PasswordInput>;
interface ResetPasswordPasswordInputProps extends PasswordInputProps {}

const ResetPasswordPasswordInput = React.forwardRef<
  ResetPasswordPasswordInputElement,
  ResetPasswordPasswordInputProps
>((props, forwardedRef) => {
  return <PasswordInput {...props} ref={forwardedRef} />;
});
ResetPasswordPasswordInput.displayName = 'ResetPasswordPasswordInput';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordConfirmPasswordField
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordConfirmPasswordFieldElement = React.ElementRef<typeof ConfirmPasswordField>;
type ConfirmPasswordFieldProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordField>;
interface ResetPasswordConfirmPasswordFieldProps extends ConfirmPasswordFieldProps {}

const ResetPasswordConfirmPasswordField = React.forwardRef<
  ResetPasswordConfirmPasswordFieldElement,
  ResetPasswordConfirmPasswordFieldProps
>((props, forwardedRef) => {
  return <ConfirmPasswordField {...props} ref={forwardedRef} />;
});
ResetPasswordConfirmPasswordField.displayName = 'ResetPasswordConfirmPasswordField';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordConfirmPasswordInput
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordConfirmPasswordInputElement = React.ElementRef<typeof ConfirmPasswordInput>;
type ConfirmPasswordInputProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordInput>;
interface ResetPasswordConfirmPasswordInputProps extends ConfirmPasswordInputProps {}

const ResetPasswordConfirmPasswordInput = React.forwardRef<
  ResetPasswordConfirmPasswordInputElement,
  ResetPasswordConfirmPasswordInputProps
>((props, forwardedRef) => {
  return <ConfirmPasswordInput {...props} ref={forwardedRef} />;
});
ResetPasswordConfirmPasswordInput.displayName = 'ResetPasswordConfirmPasswordInput';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordMatchingPasswordMessage
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordMatchingPasswordMessageElement = React.ElementRef<typeof MatchingPasswordMessage>;
type MatchingPasswordMessageProps = React.ComponentPropsWithoutRef<typeof MatchingPasswordMessage>;
interface ResetPasswordMatchingPasswordMessageProps extends MatchingPasswordMessageProps {}

const ResetPasswordMatchingPasswordMessage = React.forwardRef<
  ResetPasswordMatchingPasswordMessageElement,
  ResetPasswordMatchingPasswordMessageProps
>((props, forwardedRef) => {
  return <MatchingPasswordMessage {...props} ref={forwardedRef} />;
});
ResetPasswordMatchingPasswordMessage.displayName = 'ResetPasswordMatchingPasswordMessage';

/* -------------------------------------------------------------------------------------------------
 * ResetPasswordSubmit
 * -----------------------------------------------------------------------------------------------*/

type ResetPasswordSubmitElement = React.ElementRef<typeof Form.Submit>;
type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
interface ResetPasswordSubmitProps extends FormSubmitProps {}

const ResetPasswordSubmit = React.forwardRef<ResetPasswordSubmitElement, ResetPasswordSubmitProps>(
  (props, forwardedRef) => {
    return <Form.Submit {...props} ref={forwardedRef} />;
  },
);
ResetPasswordSubmit.displayName = 'ResetPasswordSubmit';

/* -----------------------------------------------------------------------------------------------*/

export {
  ResetPasswordRoot,
  ResetPasswordField,
  ResetPasswordLabel,
  ResetPasswordControl,
  ResetPasswordMessage,
  ResetPasswordValidityState,
  ResetPasswordPasswordField,
  ResetPasswordPasswordInput,
  ResetPasswordConfirmPasswordField,
  ResetPasswordConfirmPasswordInput,
  ResetPasswordMatchingPasswordMessage,
  ResetPasswordSubmit,
  //
  ResetPasswordRoot as Root,
  ResetPasswordField as Field,
  ResetPasswordLabel as Label,
  ResetPasswordControl as Control,
  ResetPasswordMessage as Message,
  ResetPasswordValidityState as ValidityState,
  ResetPasswordPasswordField as PasswordField,
  ResetPasswordPasswordInput as PasswordInput,
  ResetPasswordConfirmPasswordField as ConfirmPasswordField,
  ResetPasswordConfirmPasswordInput as ConfirmPasswordInput,
  ResetPasswordMatchingPasswordMessage as MatchingPasswordMessage,
  ResetPasswordSubmit as Submit,
};

export type {
  ResetPasswordRootProps,
  ResetPasswordFieldProps,
  ResetPasswordLabelProps,
  ResetPasswordControlProps,
  ResetPasswordMessageProps,
  ResetPasswordValidityStateProps,
  ResetPasswordPasswordFieldProps,
  ResetPasswordPasswordInputProps,
  ResetPasswordConfirmPasswordFieldProps,
  ResetPasswordConfirmPasswordInputProps,
  ResetPasswordMatchingPasswordMessageProps,
  ResetPasswordSubmitProps,
};
