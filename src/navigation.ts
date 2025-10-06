import { getPermalink } from './utils/permalinks';
import logo from '~/assets/images/CP STACKED Home Page.webp';

export const headerData = {
  links: [
    {
      text: 'ABOUT',
      href: getPermalink('/about'),
    },
    {
      text: 'WORKS',
      href: getPermalink('/works'),
    },
    {
      text: 'ILLUSTRATIONS',
      href: getPermalink('/illustrations'),
    },
    {
      text: 'PRESS',
      href: getPermalink('/press'),
    },
    {
      text: 'CONTACT',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
  logo: logo,
  position: 'right',
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'Instagram - Claire Pardington',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/clairepardington/',
    },
    {
      ariaLabel: 'Instagram - Pardington Collective',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/pardingtoncollective/',
    },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/clairepardington/' },
    { ariaLabel: 'Pinterest', icon: 'tabler:brand-pinterest', href: 'https://www.pinterest.com/cpardington/' },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCRV7h12mlAInV1NcWZ6uOYg/',
    },
  ],
};
