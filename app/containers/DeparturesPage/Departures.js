import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadDepartures } from './actions';
import Entry from './Entry';

class Departures extends React.Component {
  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
    const intervalID = setInterval(this.refresh, 4000);
    this.state = {
      intervalID,
    };
  }

  componentDidMount() {
    this.props.loadDepartures();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  refresh() {
    this.props.loadDepartures();
  }

  render() {
    return (<div className="departures">
      <h1>Departures</h1>
      <ul>
        <li className="labels">
          <span className="dest">Destination</span>
          <span className="time">Departure Time</span>
          <span>Status</span>
          <span>Track</span>
          <span>Train</span>
        </li>
        {this.props.departures.map((item) => <Entry key={item.Trip} trip={item} />)}
      </ul>
    </div>);
  }
}

Departures.propTypes = {
  departures: PropTypes.array,
  loadDepartures: PropTypes.func.isRequired,
};

Departures.defaultProps = {
  departures: [],
};

const mapDispatchToProps = (dispatch) => ({
  loadDepartures: bindActionCreators(loadDepartures, dispatch),
});

const mapStateToProps = (state) => ({
  departures: state.global.departures,
});

export default connect(mapStateToProps, mapDispatchToProps)(Departures);
