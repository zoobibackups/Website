import React from 'react';

export default function Banner({title='Hit Digitally', home="Home", liItem="Service default"}) {
  return (
    <>
    <div className="breadcrumb-section">
        <div className="box-wrapper">
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row text-center">
                <div className="col-12">
                  <h2 className="breadcrumb-title">{title}</h2>
                  <ul className="breadcrumb-nav">
                    <li><a to="/">{home}</a></li>
                    <li>{liItem}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
