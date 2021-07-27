import React from 'react';
// import { Row, Col } from 'antd';
// import AboutTile from '../../AbouTile';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Cagdas (Chad) Muldur. I'm a UI/UX Designer who is
    passionate about developing pixel-perfect websites. I focus on the problems user face
    and the ways to turn them into company gains. Building fancy UI's just like this one
    that your seeing.`,
  paraTwo: 'Check my projects to see what I am tackling these days.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${pageText.paraTwo}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'Cagdas',
            'Muldur',
            'UI/UX Designer',
            'Front-End developer',
            'Figma',
            'Photoshop',
            'Illustrator',
            'Javascript',
            'ReactJS',
            'Gatsby',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={{ __html: pageText.paraTwo }} />
      </div>

      {/* <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            // textH4="Residing at"
            textH3="Resides at Toronto"
          />
        </Col> */}
      {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col> */}
      {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            // textH4="Loves connecting"
            textH3="Loves Connecting"
          />
        </Col> */}
      {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col> */}
      {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH3="Self Taught Designer"
            // textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            // textH4="Pursued B.Tech in"
            textH3="Computer Programming Graduate"
            height={60}
            width={60}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default AboutMe;
