/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Departures from 'containers/DeparturesPage/Departures';

export default function App() {
  return (
    <Fragment>
      <Helmet
        titleTemplate="%s - MBTA Schedule"
        defaultTitle="MBTA Schedule"
      >
      </Helmet>
      <Departures />
    </Fragment>
  );
}
