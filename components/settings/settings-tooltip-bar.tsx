import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface SettingsTooltipBarProps {
  textKey: string;
  showArrows?: boolean;
  showBack?: boolean;
  showConfirm?: boolean;
  onBack?: () => void;
}

const Container = styled.div`
  display: flex;
  background: var(--background-alt);
  width: 100%;
  margin: 0 auto 1rem auto;
  position: relative;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25);
`;

const LeftBlock = styled.div`
  display: flex;
  width: 10px;
  height: 100%;
  background-color: var(--alt-text-color);
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 13px;
    background-color: var(--alt-text-color);
  }
`;

const Text = styled.p`
  color: var(--alt-text-color);
  font-size: 1.5rem;
  margin: 1rem 1rem 1rem 2rem;
  flex: 1;
  min-height: 2rem;
`;

const ControlsContainer = styled(motion.div)`
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

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
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
  textKey,
  showArrows = true,
  showBack = false,
  showConfirm = true,
  onBack,
}: SettingsTooltipBarProps) {
  const { t } = useTranslation("settings");
  const text = t(textKey) ?? "";

  const backControl = Boolean(showBack) && (
    <ButtonIconContainer onClick={onBack}>
      <ButtonIconText> Esc </ButtonIconText>
      <ButtonText>{t("tooltip.close")}</ButtonText>
    </ButtonIconContainer>
  );
  const confirmControl = Boolean(showConfirm) && (
    <ButtonIconContainer>
      <ButtonIconText> Enter </ButtonIconText>
      <ButtonText>{t("tooltip.confirm")}</ButtonText>
    </ButtonIconContainer>
  );
  const arrowControl = Boolean(showArrows) && (
    <ButtonIconContainer>
      <ButtonIconText> Shift + Tab </ButtonIconText>/
      <ButtonIconText> Tab </ButtonIconText>
      <ButtonText>{t("tooltip.navigate")}</ButtonText>
    </ButtonIconContainer>
  );

  return (
    <Container>
      <LeftBlock />
      <Text aria-label={`Option description: ${text}`}>{text}</Text>

      <ControlsContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        {arrowControl}
        {confirmControl}
        {backControl}
      </ControlsContainer>
    </Container>
  );
}
