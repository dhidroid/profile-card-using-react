import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardWrapper = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 450px;
  margin: auto;
`;

const Card = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Front = styled(CardSide)`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 20px;
    color: #333;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 8px 0 0;
  }
`;

const Back = styled(CardSide)`
  background: #222;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);

  h3 {
    margin: 0;
    font-size: 18px;
    color: #fff;
  }

  p {
    font-size: 12px;
    text-align: center;
    margin: 8px 0;
    color: #bbb;
  }

  img {
    width: 80px;
    margin-top: 16px;
  }
`;

const FlipCard = () => {
  return (
    <CardWrapper>
      <Card>
        {/* Front Side */}
        <Front>
          {/* <img src="/path-to-your-profile.jpg" alt="Dhinesh Kumar" /> */}
          <h2>Dhinesh Kumar</h2>
          <p>"Innovative Solutions for Every Digital Challenge."</p>
        </Front>

        {/* Back Side */}
        <Back>
          <h3>Freelance React Native Developer</h3>
          <p>
            8/17, Narthampatti, Nallampalli,
            <br />
            Dharmapuri, Tamil Nadu (636804)
            <br />
            dhinesh4668@outlook.com
            <br />
            +91 9150507538
          </p>
          {/* <img src="/path-to-your-qr-code.png" alt="QR Code" /> */}
        </Back>
      </Card>
    </CardWrapper>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <FlipCard />
    </div>
  );
};

export default App;
