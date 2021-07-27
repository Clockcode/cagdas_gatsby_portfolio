/* eslint-disable react/forbid-prop-types */
/* Vendor imports */
import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import {
  Layout,
} from 'antd';
/* App imports */
// import SEO from '../../components/Seo';
import Header from '../../components/PageLayout/Header';
// import PostCard from '../../components/PostCard';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
// import Config from '../../../config';
// import Utils from '../../utils/pageUtils';
// import style from './services.module.less';

const ServicePage = () => {
  // const { service } = pageContext;
  // const serviceName = Config.services[service].name || Utils.capitalize(service);
  // const servicePagePath = Config.pages.service;
  // const serviceImage = data.allFile.edges.find((edge) => edge.node.name === service).node
  //   .childImageSharp.fluid;
  // const posts = data.allMarkdownRemark.edges;
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        {/* <SEO
          title={serviceName}
          description={`All post about ${serviceName}. ${Config.services[service].description} `}
          path={Utils.resolvePageUrl(servicePagePath, service)}
          keywords={[serviceName]}
        /> */}
        <SidebarWrapper>
          {/* <div className={`marginTopTitle ${style.servicesList}`}>
            <h1>
              #
              {serviceName}
            </h1>
            <div className={style.bannerImgContainer}>
              <Img className={style.bannerImg} fluid={serviceImage} alt={serviceName} />
            </div>
            <h4 className="textCenter">
              {Config.services[service].description}
            </h4>
          </div>
          <Row gutter={[20, 20]}>
            {posts.map((post, key) => (
            // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={post} />
              </Col>
            ))}
          </Row> */}
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

// ServicePage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.arrayOf(PropTypes.object).isRequired,
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
//         }),
//       ).isRequired,
//     }).isRequired,
//   }).isRequired,
//   pageContext: PropTypes.shape({
//     service: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export const pageQuery = graphql`
//   query($service: String!) {
//     allMarkdownRemark(
//       filter: {
//         frontmatter: { services: { in: [$service] } }
//         fileAbsolutePath: { regex: "/index.md$/" }
//       }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//             services
//             excerpt
//           }
//         }
//       }
//     }
//     allFile(filter: { name: { eq: $service }, dir: { regex: "/services$/" } }) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid(maxHeight: 600) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default ServicePage;
