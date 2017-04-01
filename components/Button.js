import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';

const Button = (props) => {
  const finalProps = {
    ...props,
    ...css(props.styles.button),
  };
  if ('href' in props) {
    return (
      <a {...finalProps}>
        {props.children}
      </a>
    );
  }
  return (
    <button {...finalProps }>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object.isRequired,
};

export default withStyles(() => ({
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
}))(Button);
