import React from 'react';
// import moment from 'moment';
// import { Link } from 'gatsby';
import style from './postCard.module.less';
// import Utils from '../../utils/pageUtils';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <div className={style.postCard}>
      <a href={frontmatter.demo}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${frontmatter.cover})`,
          }}
        />
        <div className={style.mrTp20}>
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>
          <p style={{ color: '#ce6d96', wordSpacing: '10px' }} />
        </div>
      </a>
    </div>
  );
};

export default PostCard;
