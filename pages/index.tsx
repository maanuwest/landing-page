import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Footer from 'components/Footer';
import WaveCta from 'components/WaveCta';
import { EnvVars } from 'env';
import Hero from 'views/HomePage/Hero';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/features/browse_gifts.svg" title="Create a wishlist" overTitle="Step 1" reversed>
            <p>
              Browse our store through millions of products from different merchants and add them to your or your friends wishlist.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/features/share_wishlist.svg" title="Share your wishlist" overTitle="Step 2">
            <p>
            Share your wishlist with your friends and family and let them know what you want and hint them your priorities.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/features/manage_gifts.svg" title="Your friends and family manage your gifts" overTitle="Step 3" reversed>
            <p>
            Your friends and family manage your wishes and discuss, reserve and add other gifts for you. The gifts can be ordered directly on Giftit.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/features/deliver_gifts.svg" title="Giftit ships your gifts" overTitle="Step 4">
            <p>
              No need to know your friends address. Giftit ships your gifts directly to you or your friends and family. No matter where they are.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/features/check_status.svg" title="Track your order" overTitle="Step 5" reversed>
            <p>
              Once ordered, you can check the shipping status of all your gifts, no matter from which merchant you bought your gift.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <WaveCta/>
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

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
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