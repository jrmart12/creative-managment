import React from 'react';
import styled from 'styled-components';
import MainVideo from '../assets/pexels-ron-lach-7780047.mp4';

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.text};

  h1 {
    font-family: 'Kaushan Script';
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    font-family: 'Sirin Stencil';
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-speed='4'>
            CMN
          </h1>
          <h2>Inspire. Create. Belive</h2>
        </div>
      </Title>
      <video src={MainVideo} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
