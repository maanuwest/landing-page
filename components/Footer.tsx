import NextLink from 'next/link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <SocialIcon url="https://twitter.com/GiftitHQ" network="twitter" target="_blank" fgColor='white'/>
            <SocialIcon url="https://www.linkedin.com/company/giftitapp/" network="linkedin" target="_blank" fgColor='white'/>
            <SocialIcon url="https://www.instagram.com/giftitapp/" network="instagram" target="_blank" fgColor='white'/>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Giftit</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 0rem;
  background: rgb(var(--background));
  color: rgb(var(--text));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }
  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;
  a {
    text-decoration: none;
    color: rgba(var(--text), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media('<=tablet')} {
    flex-direction: column;
  }
`;