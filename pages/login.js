import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';
import Layout from '../components/Layout';

const Login = ({ styles }) => (
  <Layout>
    <div {...css(styles.root)}>
      <div {...css(styles.container)}>
        <h1>Log In</h1>
        <p {...css(styles.lead)}>Log in with your username or company email address</p>
        <div {...css(styles.formGroup)}>
          <a {...css(styles.facebook)} href="/login/facebook">
            <svg
              {...css(styles.icon)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z"
              />
            </svg>
            <span>Log in with Facebook</span>
          </a>
        </div>
        <div {...css(styles.formGroup)}>
          <a {...css(styles.google)} href="/login/google">
            <svg
              {...css(styles.icon)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' +
                   '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' +
                   '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' +
                   '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' +
                   '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' +
                   '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' +
                   '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' +
                   '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'}
              />
            </svg>
            <span>Log in with Google</span>
          </a>
        </div>
        <div {...css(styles.formGroup)}>
          <a {...css(styles.twitter)} href="/login/twitter">
            <svg
              {...css(styles.icon)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' +
                   '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' +
                   '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' +
                   '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' +
                   '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' +
                   '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' +
                   '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' +
                   '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'}
              />
            </svg>
            <span>Log in with Twitter</span>
          </a>
        </div>
        <strong {...css(styles.lineThrough)}>OR</strong>
        <form method="post">
          <div {...css(styles.formGroup)}>
            <label {...css(styles.label)} htmlFor="usernameOrEmail">
              Username or email address:
            </label>
            <input
              {...css(styles.input)}
              id="usernameOrEmail"
              type="text"
              name="usernameOrEmail"
              autoFocus
            />
          </div>
          <div {...css(styles.formGroup)}>
            <label {...css(styles.label)} htmlFor="password">
              Password:
            </label>
            <input
              {...css(styles.input)}
              id="password"
              type="password"
              name="password"
            />
          </div>
          <div {...css(styles.formGroup)}>
            <button {...css(styles.button)} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

Login.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(() => ({
  root: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  container: {
    margin: '0 auto',
    padding: '0 0 40px',
    maxWidth: '380px',
  },
  lead: {
    fontSize: '1.25em',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'inline-block',
    marginBottom: '5px',
    maxWidth: '100%',
    fontWeight: '700',
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    padding: '10px 16px',
    width: '100%',
    height: '46px',
    outline: 0,
    border: '1px solid #ccc',
    borderRadius: 0,
    background: '#fff',
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    color: '#616161',
    fontSize: '18px',
    lineHeight: '1.3333333',
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    ':focus': {
      borderColor: '#0074c2',
      boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6)',
    },
  },
  button: {
    display: 'block',
    boxSizing: 'border-box',
    margin: 0,
    padding: '10px 16px',
    width: '100%',
    outline: 0,
    border: '1px solid #373277',
    borderRadius: 0,
    background: '#373277',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '1.3333333',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(54, 50, 119, 0.8)',
    },
    ':focus': {
      borderColor: '#0074c2',
      boxShadow: '0 0 8px rgba(0, 116, 194, 0.6)',
    },
  },
  facebook: {
    borderColor: '#3b5998',
    background: '#3b5998',
    display: 'block',
    boxSizing: 'border-box',
    margin: 0,
    padding: '10px 16px',
    width: '100%',
    outline: 0,
    border: '1px solid #373277',
    borderRadius: 0,
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '1.3333333',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(54, 50, 119, 0.8)',
    },
    ':focus': {
      borderColor: '#0074c2',
      boxShadow: '0 0 8px rgba(0, 116, 194, 0.6)',
    },
    ':hover': {
      background: '#2d4373',
    },
  },
  google: {
    display: 'block',
    boxSizing: 'border-box',
    margin: 0,
    padding: '10px 16px',
    width: '100%',
    outline: 0,
    border: '1px solid #373277',
    borderRadius: 0,
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '1.3333333',
    cursor: 'pointer',
    borderColor: '#dd4b39',
    background: '#dd4b39',
    ':focus': {
      borderColor: '#0074c2',
      boxShadow: '0 0 8px rgba(0, 116, 194, 0.6)',
    },
    ':hover': {
      background: '#c23321',
    },
  },
  twitter: {
    borderColor: '#55acee',
    background: '#55acee',
    display: 'block',
    boxSizing: 'border-box',
    margin: 0,
    padding: '10px 16px',
    width: '100%',
    outline: 0,
    border: '1px solid #373277',
    borderRadius: 0,
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '1.3333333',
    cursor: 'pointer',
    ':focus': {
      borderColor: '#0074c2',
      boxShadow: '0 0 8px rgba(0, 116, 194, 0.6)',
    },
    ':hover': {
      background: '#2795e9',
    },
  },
  icon: {
    display: 'inline-block',
    margin: '-2px 12px -2px 0',
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
    fill: 'currentColor',
  },
  lineThrough: {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    marginBottom: '15px',
    width: '100%',
    color: '#757575',
    textAlign: 'center',
    fontSize: '80%',
    ':before': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: -1,
      marginTop: '-5px',
      marginLeft: '-20px',
      width: '40px',
      height: '10px',
      backgroundColor: '#fff',
      content: '',
    },
    ':after': {
      position: 'absolute',
      top: '49%',
      zIndex: '-2',
      display: 'block',
      width: '100%',
      borderBottom: '1px solid #ddd',
      content: '',
    },
  },
}))(Login);
