const size = {
  xs: "320px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px"
}

const device = {
  xs: `min-width: ${size.xs}`,
  sm: `min-width: ${size.sm}`,
  md: `min-width: ${size.md}`,
  lg: `min-width: ${size.lg}`,
  xl: `min-width: ${size.xl}`,
}

const breakpoint = {size, device}

export default breakpoint