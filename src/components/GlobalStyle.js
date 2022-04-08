import styled from "styled-components";

export const Button = styled.button`
  background-color: rgba(30, 165, 252, 1);
  padding: 15px 20px;
  width: 164px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 13px 7px 80px rgba(21, 171, 245, 0.38);
  cursor: pointer;
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid rgba(30, 165, 252, 1);
  background: white;
  font-size: 20;
  font-style: normal;
  color: #323232;
  img {
    fill: "black";
  }
`;

