import AnimatedLottieView from "lottie-react";
import squirtle from "../../assets/squirtle.json";
import { LoadingContainer, LoadingText } from "./style";

export const Loading = () => {
  return (
    <LoadingContainer>
      <AnimatedLottieView
        autoPlay
        animationData={squirtle}
        loop
        style={{ width: '45%', height: '45%' }}
      ></AnimatedLottieView>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};
