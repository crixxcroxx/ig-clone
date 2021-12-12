import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width || `max-content`};
  margin: 0 auto;
  padding: 7px 9px;
  font-size: 0.9rem;
  font-weight: 600;
  border: ${props => props.white ? `1px solid #dbdbdb` : "none"};
  border-radius: 5px;
  color: ${props => (props.white && `#262626`) || `#ffffff`};
  background-color: ${props => (
    (props.primary && `#0095f6`) ||
    (props.grey && `#8e8e8e`) ||
    (props.white && `#ffffff`) ||
    `#0095f6`
  )};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
