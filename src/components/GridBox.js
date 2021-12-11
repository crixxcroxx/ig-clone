import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const areasToString = (areas) => {
  let temp = [];

  areas.map((area) => temp.push(area.join(" ")));

  return temp.join("' '");
};
/*
const dv = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);
*/

const Grid = styled.div.attrs((props) => ({
  colCount: props.colCount || 12,

  smAreas: props.smAreas || "",
  mdAreas: props.mdAreas || "",
  lgAreas: props.lgAreas || "",

  jusCont: props.jusCont || "",
  jusItem: props.jusItem || "",
  aliCont: props.aliCont || "",
  aliItem: props.aliItem || "",
  plaItem: props.plaItem || "",
  plaCont: props.plaCont || "",

  gap: props.gap || "",

  hasAreas:
    props.xsAreas ||
    props.smAreas ||
    props.mdAreas ||
    props.lgAreas ||
    props.xlAreas,
}))`
  display: grid;

  grid-template-columns: ${(props) =>
    !props.hasAreas && `repeat(${props.colCount}, 1fr)`};

  ${(props) =>
    props.smAreas &&
    `
    grid-template-areas: ${`'${areasToString(props.smAreas)}'`};
  `}

  ${(props) =>
    props.mdAreas &&
    `@media (min-width: ${breakpoint.size.sm}) {
      grid-template-areas: ${`'${areasToString(props.mdAreas)}'`};
    }`}

  ${(props) =>
    props.lgAreas &&
    `@media (min-width: ${breakpoint.size.md}) {
      grid-template-areas: ${`'${areasToString(props.lgAreas)}'`};
    }`}

  justify-content: ${(props) => props.jusCont};
  justify-items: ${(props) => props.jusItem};
  align-content: ${(props) => props.aliCont};
  align-items: ${(props) => props.aliItem};
  place-content: ${(props) => props.plaCont};
  place-items: ${(props) => props.plaItem};

  gap: ${(props) => props.gap};
`;

export default Grid;
