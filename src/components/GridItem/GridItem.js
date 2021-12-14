import styled from "styled-components";
import breakpoint from "../../utils/breakpoints";

const GridItem = styled.div.attrs(props => ({
  area: props.area || "",

  spanCol: props.spanCol || "",
  spanRow: props.spanRow || "",
  gridCol: props.gridCol || "",
  gridRow: props.gridRow || "",

  justSelf: props.justSelf || "",
  alignSelf: props.alignSelf || "",
  placeSelf: props.placeSelf || "",

  hide: props.hide || "",
}))`
  grid-area: ${props => props.area};

  ${props => !props.area && `
    grid-column: ${(props.spanCol && `span ${props.spanCol}`) || props.gridCol};
    grid-row: ${(props.spanRow && `span ${props.spanRow}`) || props.gridRow};
  `}

  ${props => props.hide &&
    `@media (max-width: ${breakpoint.size[props.hide]}) {
      display: none;
    }`
  }

  justify-self: ${props => props.justSelf};
  align-self: ${props => props.alignSelf};
  place-self: ${props => props.placeSelf};

`;

export default GridItem
