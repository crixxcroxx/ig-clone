import "../styles/footer.scss";

export default function Footer(props) {
  let isCenter = props.center
  let style = {}
  if(isCenter) style = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <footer>
      <ul className="links">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Languages</li>
      </ul>
      <p style={style}>© 2021 INSTAGRAM FROM META</p>
    </footer>
  );
}
