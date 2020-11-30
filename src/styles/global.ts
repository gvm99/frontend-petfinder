import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-gray-100: #f6f8f8;
    --color-gray-200: #edf1f2;
    --color-gray-300: #e2e7e9;
    --color-gray-400: #bcc7cd;
    --color-gray-500: #95a7b1;
    --color-gray-600: #667d8a;
    --color-gray-700: #485861;
    --color-gray-800: #2b353b;
    --color-gray-900: #222222;

    --color-primary: #0072b1;
    --color-primary-dark: #005889;
    --color-primary-darker: #00314d;
    --color-primary-light: #cce3f0;

    --color-black: var(--color-gray-900);
    --color-darkgray: var(--color-gray-700);
    --color-gray: var(--color-gray-500);
    --color-lightgray: var(--color-gray-200);
    --color-white: #ffffff;

    --color-red: #d80001;
    --color-light-red: #ffe8e8;
    --color-green: #006917;
    --color-light-green: #e0ffdf;
    --color-yellow: #505205;
    --color-light-yellow: #feffcb;

    --color-overlay-light: rgba(226, 231, 233, 0.7);

    --card-radius: 10px;
    --card-padding: 24px;
    --card-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    --card-padding-sm: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body #root {
    height: 100vh;
  }

  body {
    background: var(--color-lightgray);
  }

  body, input, button, textarea, select, table, th, td {
    font: 400 16px 'Nunito', sans-serif;
    color: var(--color-black)
  }
`;
