import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Footer from 'components/Footer';
import WaveCta from 'components/WaveCta';
import { EnvVars } from 'env';
import HeroPartner from 'views/HomePage/HeroPartner';
import Partners from 'views/HomePage/Integrations';

export default function PartnerPage() {
    return (
      <>
      <Head>
        <title>{EnvVars.SITE_NAME} - Partner</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
        <HeroPartner />  
          <Partners />  
        </WhiteBackgroundContainer>
        <Footer/>
      </HomepageWrapper>
    </>
    );
  }

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--primary));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;