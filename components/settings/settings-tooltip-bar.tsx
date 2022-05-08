import styled, { keyframes } from "styled-components";

interface SettingsTooltipBarProps {
  text: string;
  showArrows?: boolean;
  onBack?: () => void;
  onConfirm?: () => void;
}

const revealExpandFromRight = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  50% {
    opacity: .25;
    transform: scaleX(.5);
  }

  75% {
    opacity: .5;
    transform: scaleX(.75);
  }


  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const Container = styled.div`
  display: flex;
  background: var(--background-alt);
  width: 95%;
  margin: 0 auto 1rem auto;
  padding-left: 13px;
  position: relative;
  animation: ${revealExpandFromRight} .5s ease-in-out;
  animation-fill-mode: forwards;
  transform-origin: center;
  box-shadow: 7px 9px 4px rgba(0,0,0,.25);


  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--alt-text-color);
`;

const LeftBlock = styled.div`
  display: flex;
  width: 2px;
  height: 100%;
  background-color: var(--alt-text-color);
`;

const Text = styled.p`
  color: var(--alt-text-color);
  font-size: 1.5rem;
  margin: 1rem 1rem 1rem 2rem;
  flex: 1;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  text-align: center;
`;

const ButtonIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;

const ButtonIconText = styled.span`
  background: var(--alt-text-color);
  color: var(--background-alt);
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 1px 4px;
  font-size: 0.8rem;
`;

const ButtonText = styled.span`
  color: var(--alt-text-color);
  font-size: 1.4rem;
  margin: 0 0.5rem;
`;

export function SettingsTooltipBar({
  text,
  showArrows = true,
  onBack,
  onConfirm,
}: SettingsTooltipBarProps) {
  const backControl = Boolean(onBack) && (
    <ButtonIconContainer>
      <ButtonIconText onClick={onBack}> Esc </ButtonIconText>
      <ButtonText>Back</ButtonText>
    </ButtonIconContainer>
  );
  const confirmControl = Boolean(onConfirm) && (
    <ButtonIconContainer>
      <ButtonIconText onClick={onBack}> Enter </ButtonIconText>
      <ButtonText>Confirm</ButtonText>
    </ButtonIconContainer>
  );
  const arrowControl = Boolean(showArrows) && (
    <ButtonIconContainer>
      <ButtonIconText onClick={onBack}> W </ButtonIconText>
      <ButtonIconText onClick={onBack}> A </ButtonIconText>
      <ButtonIconText onClick={onBack}> S </ButtonIconText>
      <ButtonIconText onClick={onBack}> D </ButtonIconText>
      <ButtonText>Select</ButtonText>
    </ButtonIconContainer>
  );

  return (
    <Container>
      <LeftBlock />
      <Text aria-label={`Option description: ${text}`}>{text}</Text>

      <ControlsContainer>
        {arrowControl}
        {confirmControl}
        {backControl}
      </ControlsContainer>
    </Container>
  );
}
