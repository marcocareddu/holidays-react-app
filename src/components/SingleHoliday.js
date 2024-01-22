import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SingleHoliday = ({
  descrizione,
  durata,
  id,
  img,
  prezzo,
  titolo,
  next,
  prev,
}) => {
  return (
    <>
      <div className='holiday-container'>
        <img src={img} alt={titolo} className='img' />
        <div className='holiday-info'>
          <h4>{titolo}</h4>
          <p>{descrizione}</p>
          <div className='holiday-cost'>
            <small>{durata}</small>
            <h5 style={{ color: "var(--primary-blue)" }}>{prezzo} €</h5>
          </div>
          <div className='btn-group'>
            <button onClick={prev} className='btn btn-reset'>
              <GrFormPreviousLink className='icon' />
            </button>
            <button onClick={next} className='btn btn-reset'>
              <GrFormNextLink className='icon' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHoliday;
