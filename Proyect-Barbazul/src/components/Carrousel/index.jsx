import { useState, useEffect } from "react";
import img1 from "../../assets/two-image1.jpg";
import img2 from "../../assets/two-image2.jpg";
import img3 from "../../assets/two-image3.jpg";
import { CarrouselImg, ContainerCarrousel, ContainerButton } from "./style.js";
const Carrousel = () => {
  const images = [img1, img2, img3];
  const [selectIndex, setSelectIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectIndex, images, true);
    }, 5000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectIndex < images.length - 1
        : selectIndex > 0;
      const nextIndex = next
        ? condition
          ? selectIndex + 1
          : 0
        : condition
        ? selectIndex - 1
        : images.length - 1;
      setSelectIndex(nextIndex);
    }, 500);
  };

  const previus = () => {
    selectNewImage(selectIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectIndex, images, true);
  };

  return (
    <ContainerCarrousel>
      <CarrouselImg
        src={images[selectIndex]}
        className={loaded ? "loaded" : ""}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      <ContainerButton>
        <button onClick={previus}>{"<<<"}</button>
        <button onClick={next}>{">>>"}</button>
      </ContainerButton>
    </ContainerCarrousel>
  );
};

export default Carrousel;
