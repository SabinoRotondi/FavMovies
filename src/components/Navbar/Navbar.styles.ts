import styled from "styled-components";

export const NavbarStyle = styled.div`
  .container-nav {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 65%;
    margin-top: 3em;
    margin-bottom: 4em;
    align-items: center;
  }

  .container-nav p {
    color: black;
    font-size: 2.5em;
    cursor: pointer;
  }

  .container-nav link {
    color: black;
    font-size: 2.5em;
    cursor: pointer;
  }

  .container-nav p {
    color: black;
    font-size: 2.5em;
    cursor: pointer;
  }

  .container-nav ul {
    display: flex;
  }

  .container-nav ul li {
    padding-right: 2em;
  }

  .container-nav ul li a {
    font-size: 2em;
  }

  .listItems {
    color: #374151;
  }


  @media screen and (max-width: 890px){
    .container-nav {
        width: 100%;
        padding: 20px;
        justify-content: center;
    }
    .container-nav ul li {
        display: none;
      }
}
`;
