import styled from "styled-components";

const ImgGallery = styled.div.attrs((props) => ({

}))`
  display: grid;
  grid-template-columns: repeat(3, minmax(105.33px, 292.94px));
  justify-content: center;
  gap: clamp(0.5rem, 2vw, 1rem);

  @media (max-width: 600px) {
    gap: clamp(0.2rem, 1vw, 0.5rem);
  }
}
`;

export default ImgGallery;
