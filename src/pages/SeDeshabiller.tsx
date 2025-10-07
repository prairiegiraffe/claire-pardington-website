import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import coverImage from '../assets/images/SE DÉSHABILLER/SE DÉSHABILLER Cover.webp';
import definitionImage from '../assets/images/SE DÉSHABILLER/02-First-Section_DEFINITION.webp';
import page12 from '../assets/images/SE DÉSHABILLER/Page-1-and-2.webp';
import page34 from '../assets/images/SE DÉSHABILLER/Page-3-and-4.webp';
import flatFinal01 from '../assets/images/SE DÉSHABILLER/deshabiller-finals/01 Flat Final_Cover.webp';
import flatFinal02 from '../assets/images/SE DÉSHABILLER/deshabiller-finals/02 Flat Final_All swatches.webp';
import flatFinal03 from '../assets/images/SE DÉSHABILLER/deshabiller-finals/03 Flat Final_Shirts.webp';
import flatFinal04 from '../assets/images/SE DÉSHABILLER/deshabiller-finals/04 Flat Final_Jackets .webp';
import flatFinal05 from '../assets/images/SE DÉSHABILLER/deshabiller-finals/05 Flat Final_pants and dresses.webp';

const PageContainer = styled.div`
  width: 100%;
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 60px 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const TextContainer = styled.div`
  max-width: 400px;
  width: 100%;
`;

const Headline = styled.h3`
  font-weight: 200;
  text-align: center;
  margin-bottom: 20px;
`;

const BodyText = styled.p`
  line-height: 1.6;
`;

const GalleryContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
`;

const GalleryTrack = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-out;
  transform: translateX(-${(props: { $currentIndex: number }) => props.$currentIndex * 100}%);
`;

const GallerySlide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const GalleryControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const DotButton = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${(props: { $active: boolean }) => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease;

  &:hover {
    background: #fff;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 24px;
  padding: 20px 15px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;

const LightboxSection = styled.div`
  width: 100%;
  background: #000;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LightboxThumbnail = styled.img`
  max-width: 45%;
  height: auto;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const LightboxOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${(props: { $isOpen: boolean }) => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const pageImages = [page12.src, page34.src];

const galleryImages = [
  flatFinal01.src,
  flatFinal02.src,
  flatFinal03.src,
  flatFinal04.src,
  flatFinal05.src,
];

const SeDeshabiller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const trackRef = useRef<HTMLDivElement>(null);

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <PageContainer>
      <FullWidthImage src={coverImage.src} alt="SE DÉSHABILLER Cover" />

      <ContentSection>
        <ImageContainer>
          <img src={definitionImage.src} alt="SE DÉSHABILLER Definition" />
        </ImageContainer>

        <TextContainer>
          <Headline>SE DÉSHABILLER</Headline>
          <BodyText>
            Se Déshabiller is a conceptual collection that explores the dichotomy of dressing and
            undressing—balancing the softness of anticipation with the structure of confidence. It
            delves into the excitement of putting on an outfit that empowers and exudes sensuality,
            while also embracing the thrill of taking it off, feeling equally confident. Rooted in
            themes of elegance, intimacy, and metropolitan sophistication, this project showcases
            my ability to craft a complete creative vision, from ideation and color theory to fabric
            selection, final illustrations, and visual direction. While not fully realized, the designs
            represent a comprehensive approach to creative direction and collection building.
          </BodyText>
        </TextContainer>
      </ContentSection>

      <LightboxSection>
        {pageImages.map((image, index) => (
          <LightboxThumbnail
            key={index}
            src={image}
            alt={`Page ${index + 1}`}
            onClick={() => openLightbox(image)}
          />
        ))}
      </LightboxSection>

      <LightboxOverlay $isOpen={lightboxOpen} onClick={closeLightbox}>
        <LightboxClose onClick={closeLightbox}>×</LightboxClose>
        <LightboxImage src={lightboxImage} alt="Lightbox" onClick={(e: React.MouseEvent) => e.stopPropagation()} />
      </LightboxOverlay>

      <GalleryContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ArrowButton onClick={prevSlide}>‹</ArrowButton>
        <GalleryTrack ref={trackRef} $currentIndex={currentIndex}>
          {galleryImages.map((image, index) => (
            <GallerySlide key={index}>
              <img src={image} alt={`SE DÉSHABILLER Gallery ${index + 1}`} />
            </GallerySlide>
          ))}
        </GalleryTrack>
        <ArrowButton onClick={nextSlide}>›</ArrowButton>
        <GalleryControls>
          {galleryImages.map((_, index) => (
            <DotButton
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </GalleryControls>
      </GalleryContainer>
    </PageContainer>
  );
};

export default SeDeshabiller;
