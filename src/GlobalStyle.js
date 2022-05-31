import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`zz
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Gilroy',sans-serif;
  }
  body{
      font-family: 'Gilroy',sans-serif;
  }
  :root{
    --primary-color: #3aa5f7;
  }
  
.innercontainer
{
  width: 100%;
  justify-content: center;
  display: flex;
}

.cardparent
{
  width: 60%;
}

.ToggleButton
{
  width: 100%;
  border: 1px dashed #9F9F9F;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;
}

.buttonbody
{
  display: flex;
  gap: 0.5rem;
  color: #1EA5FC;
  font-weight: bold;
}

:root
{
  /* Global Colors */
  --primary-color: #1EA5FC;

  /* Button Styles */
  --button-shadow: 13px 7px 80px rgba(21, 171, 245, 0.38);
  --button-border-radius: 8px;
  --button-color: rgba(30, 165, 252, 1);
  --button-text-color: rgba(50,50,50,1);
  --secondary-button-text-color: #323232;

  /* Text Sizes */
  --text-s: 0.8rem;
  --text-1: 1rem;
  --text-2: 1.25rem;
  --text-3: 1.563rem;
  --text-4: 1.953rem;
  --text-5: 2.441rem;
  --text-6: 3.052rem;

  /* Text Color */
  --h1-color: rgba(45,45,45,1);
  --p-color: rgba(108,108,108,1);
  
  /* White Card Styles */
  --white-card-shadow: 9px 9px 32px 4px rgba(219, 219, 219, 0.31);
  --card-gradient: linear-gradient(282.82deg, rgba(255, 255, 255, 0.56) 19.86%, rgba(248, 248, 255, 0.71) 44.92%, rgba(255, 255, 255, 0.59) 79.42%);
  --card-gradient-stroke: linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%);


  @font-face{
    font-family: 'Gilroy';
    src:local('Gilroy'), url('./assets/fonts/Gilroy-Regular.otf'),
    url('./assets/fonts/Gilroy-Bold.otf'),
    url('./assets/fonts/Gilroy-Extrabold.otf');
  };  
}`;

export default GlobalStyle;
