import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import { useInView } from 'react-intersection-observer';

export default function HeroPartner() {
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <HeroWrapper ref={ref} className={`hidden ${inView ? "visible":""}`}>
      <Contents>
        <Heading>List your Products on <MySpan>Giftit</MySpan></Heading>
        <Description>
        Giftit is the leading gifting platform for people all around the world. Unlock a new, rapidly growing revenue stream for your brand.
        </Description>
        <CustomButtonGroup>
          <NextLink href="https://forms.gle/ahvMELZHK7nN6hp56" passHref>
            <Button as="a" target="_blank">
              Contact us <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      {/*<ImageContainer>
        <HeroIllustration />
      </ImageContainer>*/}
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  font-family: "Outfit", sans-serif;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const MySpan = styled.span`
  color: rgb(var(--primary));
`;