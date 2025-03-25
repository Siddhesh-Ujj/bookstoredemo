import { createGlobalStyle } from 'styled-components';

const primaryColor = '#5E56E7';
const grey1 = '#F8F7FF';
const grey2 = '#F0F0F6';
const grey3 = '#A0A0A0';
const grey4 = '#333333';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Black.ttf') format('truetype'); /* Adjust path if needed */
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${grey1};
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 48px;  
    font-weight: 800; // ExtraBold
    color: ${grey4};
  }

  h2 {
    font-size: 30px;  
    font-weight: 600; // SemiBold
    color: ${grey4};
  }

  p {
    font-size: 16px;  
    color: ${grey4};
    font-family: 'Montserrat', sans-serif;
  }
`;

export { primaryColor, grey1, grey2, grey3, grey4 };