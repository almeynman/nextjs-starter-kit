import Color from 'color';

export default {
  /*
   * Brand Colors
   * ======================================================================== */
  color: {
    primary: '#61dafb',
    primaryLight: Color('#61dafb').lighten(0.1).hex(),
  },

  /*
   * Typography
   * ======================================================================== */
  fontFamilyBase: `'Segoe UI', 'HelveticaNeue-Light', sans-serif`, // eslint-disable-line quotes

  /*
   * Layout
   * ======================================================================== */
  maxContentWidth: '1000px',

  /*
   * Media queries breakpoints
   * ======================================================================== */
  breakpoint: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
};
