import React from 'react';
// import sections
import FeaturesTiles from '../components/scheduling_sections/FeaturesTiles';
import FeaturesSplit from '../components/scheduling_sections/FeaturesSplit';

const Scheduling = () => {

  return (
    <>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Scheduling;