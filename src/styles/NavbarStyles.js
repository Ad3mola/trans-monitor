import styled from "styled-components";

const NavbarStyle = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  padding: 0.6em 0;
  .search-component {
    margin: 0;
  }
  .nav-item a {
    color: black;
  }
  .hello-text {
    font-size: 10px;
  }
  .username {
    font-size: 14px;
  }
  .img-container {
    overflow: hidden;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .navbar-nav {
    li {
      margin: 0 0.5em;
    }
  }
  .navbar-search {
    background: transparent;
    border: 0;
    position: relative;
    border-radius: 0;
    &:focus {
      border-bottom: 1px solid black;
    }
    &::placeholder {
      color: #787878;
      font-size: 0.8rem;
    }
  }
  .search-icon {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default NavbarStyle;
