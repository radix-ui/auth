// import * as React from 'react';
// import * as Form from '@radix-ui/react-form';
// import { EmailField, EmailInput } from './email';
// import {
//   PasswordStrengthOptionsProvider,
//   usePasswordStrengthOptions,
//   PasswordField,
//   PasswordInput,
//   PasswordStrengthMessage,
// } from './password';
// import {
//   ConfirmPasswordField,
//   ConfirmPasswordInput,
//   MatchingPasswordMessage,
// } from './confirm-password';
// import { getServerErrorsFromAPIError, DEFAULT_SERVER_ERRORS } from './utils/api-errors';
// import type { ServerError, ServerErrors } from '@radix-ui/react-form';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpRoot
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpRootElement = React.ElementRef<typeof Form.Root>;
// type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
// interface SignUpRootProps
//   extends Omit<FormRootProps, 'serverErrors' | 'onServerErrorsReset' | 'onSubmit' | 'onError'> {
//   minPasswordLength?: number;
//   minPasswordScore?: number;
//   checkPwnedPassword?: boolean;
//   onSuccess?: (formData: FormData) => void;
//   onError?: (serverErrors: ServerErrors) => void;
// }

// const SignUpRoot = React.forwardRef<SignUpRootElement, SignUpRootProps>((props, forwardedRef) => {
//   const {
//     action = '/api/auth/sign-up',
//     minPasswordLength,
//     minPasswordScore,
//     checkPwnedPassword,
//     onSuccess,
//     onError,
//     ...rootProps
//   } = props;
//   const [loading, setLoading] = React.useState(false);
//   const [serverErrors, setServerErrors] = React.useState<ServerErrors>({});

//   const passwordStrengthOptions = {
//     minLength: minPasswordLength,
//     minScore: minPasswordScore,
//     checkPwned: checkPwnedPassword,
//   };

//   function setServerErrorsAndNotify(errors: ServerErrors) {
//     setServerErrors(errors);
//     onError?.(errors);
//   }

//   return (
//     <LoadingStateContext.Provider value={loading}>
//       <PasswordStrengthOptionsProvider {...passwordStrengthOptions}>
//         <Form.Root
//           {...rootProps}
//           ref={forwardedRef}
//           serverErrors={serverErrors}
//           onServerErrorsReset={React.useCallback(() => setServerErrors({}), [])}
//           onSubmit={async (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const requestBody = Object.fromEntries(formData);

//             setLoading(true);

//             try {
//               setServerErrors({});

//               const response = await fetch(action, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ ...requestBody, ...passwordStrengthOptions }),
//               });

//               if (response.status >= 200 && response.status < 300) {
//                 onSuccess?.(formData);
//               } else if (response.status >= 400) {
//                 const error = await response.json();
//                 const serverErrors = getServerErrorsFromAPIError(error, mapErrorCodeToFieldName);
//                 setServerErrorsAndNotify(serverErrors);
//               }
//             } catch (error) {
//               setServerErrorsAndNotify(DEFAULT_SERVER_ERRORS);
//             } finally {
//               setLoading(false);
//             }
//           }}
//         />
//       </PasswordStrengthOptionsProvider>
//     </LoadingStateContext.Provider>
//   );
// });
// SignUpRoot.displayName = 'SignUpRoot';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpField
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpFieldElement = React.ElementRef<typeof Form.Field>;
// type FormFieldProps = React.ComponentPropsWithoutRef<typeof Form.Field>;
// interface SignUpFieldProps extends FormFieldProps {}

// const SignUpField = React.forwardRef<SignUpFieldElement, SignUpFieldProps>(
//   (props, forwardedRef) => {
//     return <Form.Field {...props} ref={forwardedRef} />;
//   },
// );
// SignUpField.displayName = 'SignUpField';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpLabel
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpLabelElement = React.ElementRef<typeof Form.Label>;
// type FormLabelProps = React.ComponentPropsWithoutRef<typeof Form.Label>;
// interface SignUpLabelProps extends FormLabelProps {}

// const SignUpLabel = React.forwardRef<SignUpLabelElement, SignUpLabelProps>(
//   (props, forwardedRef) => {
//     return <Form.Label {...props} ref={forwardedRef} />;
//   },
// );
// SignUpLabel.displayName = 'SignUpLabel';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpControl
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpControlElement = React.ElementRef<typeof Form.Control>;
// type FormControlProps = React.ComponentPropsWithoutRef<typeof Form.Control>;
// interface SignUpControlProps extends FormControlProps {}

// const SignUpControl = React.forwardRef<SignUpControlElement, SignUpControlProps>(
//   (props, forwardedRef) => {
//     return <Form.Control {...props} ref={forwardedRef} />;
//   },
// );
// SignUpControl.displayName = 'SignUpControl';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpClientMessage
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpClientMessageElement = React.ElementRef<typeof Form.ClientMessage>;
// type FormClientMessageProps = React.ComponentPropsWithoutRef<typeof Form.ClientMessage>;
// // we have to switch to a `type` rather than `interface` because of the union in `FormClientMessageProp`
// type SignUpClientMessageProps = FormClientMessageProps;

// const SignUpClientMessage = React.forwardRef<SignUpClientMessageElement, SignUpClientMessageProps>(
//   (props, forwardedRef) => {
//     return <Form.ClientMessage {...props} ref={forwardedRef} />;
//   },
// );
// SignUpClientMessage.displayName = 'SignUpClientMessage';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpServerMessage
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpServerMessageElement = React.ElementRef<typeof Form.ServerMessage>;
// type FormServerMessageProps = React.ComponentPropsWithoutRef<typeof Form.ServerMessage>;
// interface SignUpServerMessageProps extends FormServerMessageProps {}

// const SignUpServerMessage = React.forwardRef<SignUpServerMessageElement, SignUpServerMessageProps>(
//   (props, forwardedRef) => {
//     return <Form.ServerMessage {...props} ref={forwardedRef} />;
//   },
// );
// SignUpServerMessage.displayName = 'SignUpServerMessage';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpValidityState
//  * -----------------------------------------------------------------------------------------------*/

// type FormValidityStateProps = React.ComponentPropsWithoutRef<typeof Form.ValidityState>;
// interface SignUpValidityStateProps extends FormValidityStateProps {}

// const SignUpValidityState = (props: SignUpValidityStateProps) => {
//   return <Form.ValidityState {...props} />;
// };
// SignUpValidityState.displayName = 'SignUpValidityState';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpEmailField
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpEmailFieldElement = React.ElementRef<typeof EmailField>;
// type EmailFieldProps = React.ComponentPropsWithoutRef<typeof EmailField>;
// interface SignUpEmailFieldProps extends EmailFieldProps {}

// const SignUpEmailField = React.forwardRef<SignUpEmailFieldElement, SignUpEmailFieldProps>(
//   (props, forwardedRef) => {
//     return <EmailField {...props} ref={forwardedRef} />;
//   },
// );
// SignUpEmailField.displayName = 'SignUpEmailField';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpEmailInput
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpEmailInputElement = React.ElementRef<typeof EmailInput>;
// type EmailInputProps = React.ComponentPropsWithoutRef<typeof EmailInput>;
// interface SignUpEmailInputProps extends EmailInputProps {}

// const SignUpEmailInput = React.forwardRef<SignUpEmailInputElement, SignUpEmailInputProps>(
//   (props, forwardedRef) => {
//     return <EmailInput {...props} ref={forwardedRef} />;
//   },
// );
// SignUpEmailInput.displayName = 'SignUpEmailInput';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpPasswordField
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpPasswordFieldElement = React.ElementRef<typeof PasswordField>;
// type PasswordFieldProps = React.ComponentPropsWithoutRef<typeof PasswordField>;
// interface SignUpPasswordFieldProps extends PasswordFieldProps {}

// const SignUpPasswordField = React.forwardRef<SignUpPasswordFieldElement, SignUpPasswordFieldProps>(
//   (props, forwardedRef) => {
//     return <PasswordField {...props} ref={forwardedRef} />;
//   },
// );
// SignUpPasswordField.displayName = 'SignUpPasswordField';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpPasswordInput
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpPasswordInputElement = React.ElementRef<typeof PasswordInput>;
// type PasswordInputProps = React.ComponentPropsWithoutRef<typeof PasswordInput>;
// interface SignUpPasswordInputProps extends PasswordInputProps {}

// const SignUpPasswordInput = React.forwardRef<SignUpPasswordInputElement, SignUpPasswordInputProps>(
//   (props, forwardedRef) => {
//     const { minLength } = usePasswordStrengthOptions();
//     return <PasswordInput minLength={minLength} {...props} ref={forwardedRef} />;
//   },
// );
// SignUpPasswordInput.displayName = 'SignUpPasswordInput';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpPasswordStrengthMessage
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpPasswordStrengthMessageElement = React.ElementRef<typeof PasswordStrengthMessage>;
// type PasswordStrengthMessageProps = React.ComponentPropsWithoutRef<typeof PasswordStrengthMessage>;
// interface SignUpPasswordStrengthMessageProps extends PasswordStrengthMessageProps {}

// const SignUpPasswordStrengthMessage = React.forwardRef<
//   SignUpPasswordStrengthMessageElement,
//   SignUpPasswordStrengthMessageProps
// >((props, forwardedRef) => {
//   return <PasswordStrengthMessage {...props} ref={forwardedRef} />;
// });
// SignUpPasswordStrengthMessage.displayName = 'SignUpPasswordStrengthMessage';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpConfirmPasswordField
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpConfirmPasswordFieldElement = React.ElementRef<typeof ConfirmPasswordField>;
// type ConfirmPasswordFieldProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordField>;
// interface SignUpConfirmPasswordFieldProps extends ConfirmPasswordFieldProps {}

// const SignUpConfirmPasswordField = React.forwardRef<
//   SignUpConfirmPasswordFieldElement,
//   SignUpConfirmPasswordFieldProps
// >((props, forwardedRef) => {
//   return <ConfirmPasswordField {...props} ref={forwardedRef} />;
// });
// SignUpConfirmPasswordField.displayName = 'SignUpConfirmPasswordField';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpConfirmPasswordInput
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpConfirmPasswordInputElement = React.ElementRef<typeof ConfirmPasswordInput>;
// type ConfirmPasswordInputProps = React.ComponentPropsWithoutRef<typeof ConfirmPasswordInput>;
// interface SignUpConfirmPasswordInputProps extends ConfirmPasswordInputProps {}

// const SignUpConfirmPasswordInput = React.forwardRef<
//   SignUpConfirmPasswordInputElement,
//   SignUpConfirmPasswordInputProps
// >((props, forwardedRef) => {
//   return <ConfirmPasswordInput {...props} ref={forwardedRef} />;
// });
// SignUpConfirmPasswordInput.displayName = 'SignUpConfirmPasswordInput';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpMatchingPasswordMessage
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpMatchingPasswordMessageElement = React.ElementRef<typeof MatchingPasswordMessage>;
// type MatchingPasswordMessageProps = React.ComponentPropsWithoutRef<typeof MatchingPasswordMessage>;
// interface SignUpMatchingPasswordMessageProps extends MatchingPasswordMessageProps {}

// const SignUpMatchingPasswordMessage = React.forwardRef<
//   SignUpMatchingPasswordMessageElement,
//   SignUpMatchingPasswordMessageProps
// >((props, forwardedRef) => {
//   return <MatchingPasswordMessage {...props} ref={forwardedRef} />;
// });
// SignUpMatchingPasswordMessage.displayName = 'SignUpMatchingPasswordMessage';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpSubmit
//  * -----------------------------------------------------------------------------------------------*/

// type SignUpSubmitElement = React.ElementRef<typeof Form.Submit>;
// type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
// interface SignUpSubmitProps extends FormSubmitProps {}

// const SignUpSubmit = React.forwardRef<SignUpSubmitElement, SignUpSubmitProps>(
//   (props, forwardedRef) => {
//     return <Form.Submit {...props} ref={forwardedRef} />;
//   },
// );
// SignUpSubmit.displayName = 'SignUpSubmit';

// /* -------------------------------------------------------------------------------------------------
//  * SignUpLoadingState
//  * -----------------------------------------------------------------------------------------------*/

// const LoadingStateContext = React.createContext(false);

// interface SignUpLoadingStateProps {
//   children: (loading: boolean) => React.ReactNode;
// }

// const SignUpLoadingState = ({ children }: SignUpLoadingStateProps) => {
//   const loading = React.useContext(LoadingStateContext);
//   return <>{children(loading)}</>;
// };
// SignUpLoadingState.displayName = 'SignUpLoadingState';

// /* -----------------------------------------------------------------------------------------------*/

// type AnyString = string & {};
// type ErrorCode =
//   | 'email_not_available'
//   | 'password_too_short'
//   | 'password_pwned'
//   | 'password_too_weak'
//   | AnyString;

// function mapErrorCodeToFieldName(errorCode: ErrorCode) {
//   switch (errorCode) {
//     case 'email_not_available':
//       return 'email';
//     case 'password_too_short':
//     case 'password_pwned':
//     case 'password_too_weak':
//       return 'password';
//     default:
//       return 'global';
//   }
// }

// /* -----------------------------------------------------------------------------------------------*/

// export {
//   SignUpRoot,
//   SignUpField,
//   SignUpLabel,
//   SignUpControl,
//   SignUpClientMessage,
//   SignUpServerMessage,
//   SignUpValidityState,
//   SignUpEmailField,
//   SignUpEmailInput,
//   SignUpPasswordField,
//   SignUpPasswordStrengthMessage,
//   SignUpPasswordInput,
//   SignUpConfirmPasswordField,
//   SignUpConfirmPasswordInput,
//   SignUpMatchingPasswordMessage,
//   SignUpSubmit,
//   SignUpLoadingState,
//   //
//   SignUpRoot as Root,
//   SignUpField as Field,
//   SignUpLabel as Label,
//   SignUpControl as Control,
//   SignUpClientMessage as ClientMessage,
//   SignUpServerMessage as ServerMessage,
//   SignUpValidityState as ValidityState,
//   SignUpEmailField as EmailField,
//   SignUpEmailInput as EmailInput,
//   SignUpPasswordField as PasswordField,
//   SignUpPasswordInput as PasswordInput,
//   SignUpPasswordStrengthMessage as PasswordStrengthMessage,
//   SignUpConfirmPasswordField as ConfirmPasswordField,
//   SignUpConfirmPasswordInput as ConfirmPasswordInput,
//   SignUpMatchingPasswordMessage as MatchingPasswordMessage,
//   SignUpSubmit as Submit,
//   SignUpLoadingState as LoadingState,
// };

// export type {
//   SignUpRootProps,
//   SignUpFieldProps,
//   SignUpLabelProps,
//   SignUpControlProps,
//   SignUpClientMessageProps,
//   SignUpServerMessageProps,
//   SignUpValidityStateProps,
//   SignUpEmailFieldProps,
//   SignUpEmailInputProps,
//   SignUpPasswordFieldProps,
//   SignUpPasswordInputProps,
//   SignUpPasswordStrengthMessageProps,
//   SignUpConfirmPasswordFieldProps,
//   SignUpConfirmPasswordInputProps,
//   SignUpMatchingPasswordMessageProps,
//   SignUpSubmitProps,
//   SignUpLoadingStateProps,
//   //
//   ServerError,
// };

export * from '@radix-ui/react-form';
