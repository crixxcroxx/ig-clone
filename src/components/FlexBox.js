import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const dv = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const FlexBox = styled(dv).attrs(props => ({
  direction: props.row || props.rowRev || props.col || props.colRev,
  wrap: props.wrap || "",
  flow: props.flow || "",

  jusCont: props.jusCont || "",
  aliCont: props.aliCont || "center",
  aliItem: props.aliItem || "center",

  gap: props.gap || "",

  hide: props.hide || "",

  evenCols: props.evenCols || "",

  gridish: props.gridish || "",
  cols: props.cols || "33%",

  content_sidebar: props.content_sidebar || "",
  content: props.content || "70%",
  sidebar: props.sidebar || "30%",
  sideHide: props.sideHide || "",
}))`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  flex-flow: ${props => props.flow};

  justify-content: ${props => props.jusCont};
  align-content: ${props => props.aliCont};
  align-items: ${props => props.aliItem};

  gap: ${props => props.gap};

  ${props => props.hide && `
    @media (max-width: ${breakpoint.size[props.hide]}) {
      display: none;
    }
  `}

  ${props => props.evenCols && `
    > * { flex-basis: 100%; }
  `}

  ${props => props.gridish && `
    flex-wrap: wrap;
    > * { flex: 1 1 ${props.cols}; }
  `}

  ${props => props.content_sidebar && `
    flex-wrap: wrap;
    .content { flex: 1 1 ${props.content}%; }
    .sidebar { flex: 1 1 ${props.sidebar}%; }
  `}

  ${props => props.sideHide && `
    @media (max-width: ${breakpoint.size[props.sideHide] || props.sideHide}) {
      .content { flex-basis: 100%; }
      .sidebar { display: none; }
    }
  `}

`;

export default FlexBox
