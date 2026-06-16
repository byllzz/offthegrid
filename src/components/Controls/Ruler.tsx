import React from 'react';
import { useGridStore } from '../../store/gridStore';

export const Ruler: React.FC = () => {
  const { unit } = useGridStore();

  // Build the labels based on active unit
  const active = unit === 'in' ? 'INCHES' : 'MILIMETRES';
  const inactive = unit === 'in' ? 'MILIMETRES' : 'INCHES';

  return (
    <div className="ruler-container">
      <div className="ruler-label left">
        <span className="active-unit">{active}</span>
        <span className="inactive-unit">{inactive}</span>
      </div>
      <div className="ruler-label right">
        <span className="active-unit">{active}</span>
        <span className="inactive-unit">{inactive}</span>
      </div>
    </div>
  );
};
