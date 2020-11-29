import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
 
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body {
        margin: 0;
        overflow: hidden;
        color: ${colors.gray};
        font-family: 'Inter', sans-serif;
        font-size: ${fontSizes.sm};

        & h1, h2, h3, h4 {
            color: ${colors.black};
        }
    }
`;

export default GlobalStyle;
