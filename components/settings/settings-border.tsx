import styled from "styled-components";

const SettingsBorderElement = styled.div`
  display: block;
  margin: 1.5rem 0;
  height: 2rem;
  width: 100%;
  background-image: url("/patterns/settings-border.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

export function SettingsBorder() {
  return <SettingsBorderElement data-testid="settings-border" />;
}
