import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>Sahaj Maniya | Portfolio</title>
      <meta name="description" content="Welcome to Sahaj Maniya's portfolio. Explore my projects, skills, and experiences in frontend development and UI/UX design." />
      <meta name="keywords" content="Sahaj Maniya, Portfolio, Frontend Developer, UI/UX Designer, React, JavaScript, TailwindCSS" />
      <meta name="author" content="Sahaj Maniya" />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content="Sahaj Maniya | Portfolio" />
      <meta property="og:description" content="Explore my projects, skills, and experiences in frontend development and UI/UX design." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sahajmaniya.vercel.app/" />
      <meta property="og:image" content="https://yourportfolio.com/preview-image.jpg" />

      {/* Social Media Profiles */}
      <link rel="me" href="https://www.instagram.com/sahajmaniya_/" />
      <link rel="me" href="https://www.linkedin.com/in/sahajmaniya/" />
      <link rel="me" href="https://www.facebook.com/profile.php?id=100075120465471&mibextid=ZbWKwL" />
    </Helmet>
  );
};

export default SEO;
