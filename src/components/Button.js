import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const Button = styled.button`
  width: max-content;
  margin: 0 auto;
  padding: 7px 9px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${props => props.primary ? `#0095f6` : `#8e8e8e`};

  &:hover {
    cursor: pointer;
  }
`;

export default Button

