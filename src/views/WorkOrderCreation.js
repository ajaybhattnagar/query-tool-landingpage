import React from 'react';
// import sections
import FeaturesTiles from '../components/work_order_creation_sections/FeaturesTiles';
import FeaturesSplit from '../components/work_order_creation_sections/FeaturesSplit';

const WorkOrderCreation = () => {

  return (
    <>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default WorkOrderCreation;