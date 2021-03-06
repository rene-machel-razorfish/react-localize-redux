import React from 'react';

const InfoView = ({ translate }) => {
  return (
    <div>
      <h1>{ translate('title') }</h1>
      <p>{ translate('body') }</p>
      <button>{ translate('click-here') }</button>
    </div>
  );
}

export default InfoView;