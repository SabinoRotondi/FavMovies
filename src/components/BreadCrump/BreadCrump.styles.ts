import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: #f5bd00;
`;
export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
    span{
        font-size: var(--fontMedium);
        color: var(--darkGray);
        padding-right: 10px;
        @media screen and (max-width: 760px){
            font-size: var(--fontSmall);
        }
    }
`;