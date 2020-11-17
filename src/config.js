module.exports = {
  siteTitle: 'Kelvin Kitika | Software Engineer',
  siteDescription:
    'My name is Kelvin Kitika. I am a software engineer from Nairobi Kenya. I enjoy building web applications with Javascript, React, Redux, and sometimes Python',
  siteKeywords:
    'Kelvin Kitika Lukorito, Kelvin, Kitika, Lukorito, _kitika, software engineer, front-end engineer, web developer, javascript, nairobi, kenya',
  siteUrl: 'https://kelvinkitika.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-61304819-2',
  googleVerification: 'pgZ61nHVvWGAPGctsYHz_ilccGbTuIYGKxmM8ZSt4cg',
  name: 'Kelvin Kitika',
  location: 'Nairobi, Kenya',
  email: 'kelvin.kitika@gmail.com',
  github: 'https://github.com/lukorito',
  twitterHandle: '@_kitika',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lukorito',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kelvin-kitika-lukorito-85065183/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/kitika',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kitika.jpg',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/_kitika',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#F2CB05',
    navy: '#090B0D',
    darkNavy: '#090B0D',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
