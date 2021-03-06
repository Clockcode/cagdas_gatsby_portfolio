import React from 'react';
import { Row, Col } from 'antd';
// import AboutTile from '../../AbouTile';
import style from './AboutMe.module.less';
import SEO from '../../Seo';
import PostCard from '../../PostCard';

const pageText = {
  paraOne: `Hello !! My name is Cagdas (Chad) Muldur. I'm a UI/UX Designer who is
    passionate about developing pixel-perfect websites. I focus on the problems user face
    and the ways to turn them into company gains.`,
  paraTwo: 'Check my projects to see what I am tackling these days.',
};

const AboutMe = ({ data }) => {
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
        <p className={style.paragraph}>{pageText.paraOne}</p>
        <p className={style.paragraph} dangerouslySetInnerHTML={{ __html: pageText.paraTwo }} />
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Recent Projects</h1>
        </div>
        <Row gutter={[20, 20]}>
          {data.allMarkdownRemark && data.allMarkdownRemark.edges.slice(0, 3).map((val, key) => (
            <Col key={key} xs={24} sm={24} md={12} lg={8}>
              <PostCard data={val} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default AboutMe;
