import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './styles.css';

const statusToClass = (status) => (`status-${status.toLowerCase().replace(' ', '-')}`);

const Entry = ({ trip }) => (<li className={statusToClass(trip.Status)}>
  <span className="dest">{trip.Destination}</span>
  <span className="time">{moment.unix(trip.ScheduledTime).format('h:mma')}</span>
  <span>{trip.Lateness > 0 ? `${trip.Status} ${trip.Lateness / 60} Minutes` : trip.Status}</span>
  <span>{trip.Track ? trip.Track : 'N/A'}</span>
  <span>#{trip.Trip}</span>
</li>);

Entry.propTypes = {
  trip: PropTypes.object.isRequired,
};

export default Entry;
