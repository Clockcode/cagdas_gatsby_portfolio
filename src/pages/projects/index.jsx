import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import PostCard from '../../components/PostCard';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Project = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Project"
        description="I like Projectging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This Project expresses my views of various technologies
          and scenarios I have come across in realtime."
        path="Project"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Project</h1>
        </div>
        <Row gutter={[20, 20]}>
          {data.allMarkdownRemark && data.allMarkdownRemark.edges.map((val, key) => (
            <Col key={key} xs={24} sm={24} md={12} lg={8}>
              <PostCard data={val} />
            </Col>
          ))}
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Project.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            demo
            path
            title
            excerpt
            cover
          }
        }
      }
    }
  }
`;

export default Project;
