import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #eee;
        --mediumGray: #353535;
        --darkGray: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.1rem;
        --fontSmall: 0.9rem;
        }

    *{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        
    }
    
    body{
            h1{
            font-size: 2rem;
            color: var(--white);  
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
 `;
