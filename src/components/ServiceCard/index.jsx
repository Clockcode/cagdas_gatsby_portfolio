import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './services.module.less';

const ServiceCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  const servicePage = Config.pages.service;
  return (
    <Link className={style.serviceCard} to={Utils.resolvePageUrl(servicePage, name)}>
      <div className={style.serviceCard}>
        <div
          className={style.serviceImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              #
              {name}
            </h4>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
