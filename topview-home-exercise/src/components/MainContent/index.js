import React from 'react';

import {ReactComponent as BusIcon } from '../../assets/ico-bus.svg';
import {ReactComponent as AttractionIcon } from '../../assets/ico-attraction.svg';
import {ReactComponent as TourIcon } from '../../assets/ico-tour.svg';
import LocationIcon from '../../assets/ico-location.png';

import styles from './MainContent.module.css'

export const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.itemLogo}>
          <BusIcon />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.itemContainer}>
            <div className={styles.itemLogo}>
              <TourIcon className={styles.tourIcon} />
            </div>
            <div className={styles.busMainContent}>
              <div className={styles.title}>
                Port Authority
              </div>
              <div className={styles.description}>
                8th Ave btwn 42nd St in front of Port Authority, 43nd St
              </div>
              <div className={styles.tourGroup}>
                <div className={styles.tour} style={{background: '#E81517'}}>
                  Downtown Tour
                </div>
                <div className={styles.tour} style={{background: '#016F74'}}>
                  Brooklyn Tour
                </div>
                <div className={styles.tour} style={{background: '#1AA0D8'}}>
                  Uptown & Harlem Tour
                </div>
                <div className={styles.tour} style={{background: '#8F83BA'}}>
                  Night Tour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemLogo}>
          <BusIcon />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.itemContainer}>
            <div className={styles.itemLogo}>
              <TourIcon className={styles.tourIcon} />
            </div>
            <div className={styles.busMainContent}>
              <div className={styles.title}>
                Times Square West
              </div>
              <div className={styles.description}>
                8th Ave btwn 42nd St in front of Port Authority, 43nd St
              </div>
              <div className={styles.tourGroup}>
                <div className={styles.tour} style={{background: '#E81517'}}>
                  Downtown Tour
                </div>
                <div className={styles.tour} style={{background: '#1AA0D8'}}>
                  Uptown & Harlem Tour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemLogo}>
          <AttractionIcon />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.title}>
            Times Square
          </div>
          <div className={styles.description}>
            12 E 23rd St, New York, NY
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemLogo}>
          <img
            width={20}
            height={20}
            src={LocationIcon}
            alt=""
          />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.title}>
            Central Park
          </div>
          <div className={styles.description}>
            12 E 23rd St, New York, NY
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemLogo}>
          <img
            width={20}
            height={20}
            src={LocationIcon}
            alt=""
          />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.title}>
            Metropolitan Museum
          </div>
          <div className={styles.description}>
            12 E 23rd St, New York, NY
          </div>
        </div>
      </div>
    </div>
  );
}