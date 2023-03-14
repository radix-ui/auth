import * as React from 'react';
import * as Form from '@radix-ui/react-form';

/* -------------------------------------------------------------------------------------------------
 * VerifyEmailRoot
 * -----------------------------------------------------------------------------------------------*/

type VerifyEmailRootElement = React.ElementRef<typeof Form.Root>;
type FormRootProps = React.ComponentPropsWithoutRef<typeof Form.Root>;
interface VerifyEmailRootProps extends FormRootProps {
  token?: string;
}

const VerifyEmailRoot = React.forwardRef<VerifyEmailRootElement, VerifyEmailRootProps>(
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
VerifyEmailRoot.displayName = 'VerifyEmailRoot';

/* -------------------------------------------------------------------------------------------------
 * VerifyEmailSubmit
 * -----------------------------------------------------------------------------------------------*/

type VerifyEmailSubmitElement = React.ElementRef<typeof Form.Submit>;
type FormSubmitProps = React.ComponentPropsWithoutRef<typeof Form.Submit>;
interface VerifyEmailSubmitProps extends FormSubmitProps {}

const VerifyEmailSubmit = React.forwardRef<VerifyEmailSubmitElement, VerifyEmailSubmitProps>(
  (props, forwardedRef) => {
    return <Form.Submit {...props} ref={forwardedRef} />;
  },
);
VerifyEmailSubmit.displayName = 'VerifyEmailSubmit';

/* -----------------------------------------------------------------------------------------------*/

export {
  VerifyEmailRoot,
  VerifyEmailSubmit,
  //
  VerifyEmailRoot as Root,
  VerifyEmailSubmit as Submit,
};

export type { VerifyEmailRootProps, VerifyEmailSubmitProps };
