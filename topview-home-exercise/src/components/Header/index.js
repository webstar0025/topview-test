import React, { useState } from 'react';

import {ReactComponent as ArrowIcon } from '../../assets/ico-arrow.svg';
import {ReactComponent as CloseIcon } from '../../assets/ico-circle-close.svg';
import {ReactComponent as PlusIcon } from '../../assets/ico-circle-plus.svg';
import FinalStateIcon from '../../assets/ico-final-state.png';
import LocationIcon from '../../assets/ico-location.png';
import ExchangeIcon from '../../assets/ico-exchange.png';

import styles from './Header.module.css';

const FILTERS = [{
    title: 'Bus Stops',
    name: 'busStop'
  }, {
    title: 'Attractions',
    name: 'attraction'
  }, {
    title: 'Parks',
    name: 'park'
  } , {
    title: 'Museums',
    name: 'museum'
  }];

export const Header = ({ filters, changeFilters }) => {
  const [locations, setLocations] = useState([1, 0]);

  const addDestination = () => {
    if (locations.length > 2) return;
    setLocations([...locations, 0]);
  }

  const removeLocation = () => {
    setLocations([1, 0]);
  }

  const exchangeLocation = () => {
    const newLocations = [...locations].reverse();
    setLocations([...newLocations]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.locationSection}>
        <ArrowIcon className={styles.arrowIcon} />
        <div className={styles.locaitonsContainer}>
          <div className={styles.locations}>
            {locations.length === 2 && (
              <div
                className={styles.exchangeIcon}
                onClick={exchangeLocation}
              >
                <img
                  width={16}
                  height={16}
                  src={ExchangeIcon}
                  alt=""
                />
              </div>
            )}
            {locations.map((location, index) => 
              <div key={`location-${index}`} className={styles.locationContent}>
                <div className={styles.locationLogo}>
                  {(locations.length < 3 || index === 0) ? (
                    <img
                      width={20}
                      height={20}
                      src={index === 0 ? FinalStateIcon : LocationIcon}
                      alt=""
                    />
                  ) : (
                    <div className={styles.locationAddress}>
                      <span>{index === 1 ? 'A' : 'B'}</span>
                    </div>
                  )}
                </div>
                {location ? (
                  <input
                    className={styles.location}
                    value="Current Location"
                    readOnly
                  />
                ) : (
                  <input
                    className={styles.location}
                    value=""
                    placeholder="Choose Destination"
                    readOnly
                  />
                )}
                {(locations.length > 2 && index > 0) && (
                  <CloseIcon
                    className={styles.closeIcon}
                    onClick={removeLocation}
                  />
                )}
              </div>
            )}
          </div>
          <div className={styles.locationContent}>
            <PlusIcon className={styles.plusIcon} />
            <span
              className={styles.addButton}
              onClick={addDestination}
            >
              Add destination
            </span>
          </div>
        </div>
      </div>
      <div className={styles.filterContainer}>
        {FILTERS.map((item, index) =>
          <div
            key={index} 
            className={
              filters[item.name]
                ? styles.activeFilterButton
                : styles.filterButton
            }
            onClick={() => changeFilters(item.name)}
          >
            {item.title}
          </div>
        )}
      </div>
    </div>
  );
};
