import { DEPARTURES_LOADED } from '../App/constants';

export function loadDepartures() {
  return async (dispatch) => {
    const request = await fetch('/departures');
    const departures = await request.json();
    dispatch({
      type: DEPARTURES_LOADED,
      departures: departures.sort((a, b) => a.ScheduledTime - b.ScheduledTime),
    });
  };
}
