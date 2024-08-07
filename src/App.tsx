import { BackgroundGradient } from './assets/common/BackgroundGradient';
import { Content } from './assets/components/Content';
import { Helmet } from 'react-helmet-async';

export function App() {
  const currentUrl = window.location.hostname;
  let ogImage = '';
  let description = '';
  let title = '';

  if (currentUrl === 'wallysson.vercel.app') {
    console.log('só wally');
    ogImage = 'https://i.ibb.co/rtbRM1V/printproject.png';
    description = 'Apenas o nome Wally';
    title = 'Title apenas Wally';

  } else if (currentUrl === 'wallysson.vercel.app/teste') {
    console.log('/teste');
    ogImage = 'https://i.ibb.co/GQw01gS/thumbnail.png';
    description = 'Agora esta com /teste';
    title = 'Title com /teste';
  }
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${currentUrl}`} />
        <meta
          property="og:title"
          content={`Portfólio - Desenvolvedor Frontend | ${title}`}
        />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <BackgroundGradient />
      <Content />
    </>
  );
}
