import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components";
import { useAtom } from "jotai";

import { socialShareAtom } from "@/state/application";
import { SettingsToggleOptions } from "@/types/settings-menu";

const BUTTON_SIZE = 32 as const;

interface BlogSocialShareButtonsProps {
  url: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export function BlogSocialShareButtons({ url }: BlogSocialShareButtonsProps) {
  const [socialShare] = useAtom(socialShareAtom);

  // Disable social share buttons if user has disabled it
  if (socialShare !== SettingsToggleOptions.ON) return null;

  return (
    <Container>
      <FacebookShareButton url={url}>
        <FacebookIcon size={BUTTON_SIZE} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} via="datyayu">
        <TwitterIcon size={BUTTON_SIZE} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={BUTTON_SIZE} round />
      </LinkedinShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={BUTTON_SIZE} round />
      </RedditShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={BUTTON_SIZE} round />
      </EmailShareButton>
    </Container>
  );
}
