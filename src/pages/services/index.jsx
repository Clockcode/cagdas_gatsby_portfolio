import React from 'react';
import {
  Layout,
} from 'antd';
// import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
// import ServiceCard from '../../components/ServiceCard';
// import Config from '../../../config';

const Services = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Services"
        description="This page consists of various Service on various technologies that I'll be using
          to write projects. You can check the projects related to the Service by clicking on any of the Service below."
        path="services"
      />
      <SidebarWrapper>
        <>
          {/* <div className="marginTopTitle">
              <h1 className="titleSeparate">Services</h1>
            </div>
            <Row gutter={[30, 20]}>
              {
                edges.map((val) => (
                  <Col key={val.node.name} xs={24} sm={24} md={12} lg={8}>
                    <ServiceCard
                      img={val.node.childImageSharp.fluid.src}
                      name={val.node.name}
                      description={serviceData[val.node.name].description}
                      color={serviceData[val.node.name].color}
                    />
                  </Col>
                ))
              }
            </Row> */}
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

// Services.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//       ).isRequired,
//     }).isRequired,
//     allFile: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             childImageSharp: PropTypes.shape({
//               fluid: PropTypes.object.isRequired,
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//       ).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md$/" } }) {
      edges {
        node {
          frontmatter {
            cover
          }
        }
      }
    }
  }
`;

export default Services;
