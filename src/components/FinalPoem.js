import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      { props.isSubmitted &&
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <section>
            { props.poem.map((line, i) => { return <p key={i}>{line}</p> }) }
          </section>
        </section>
      }

      { !props.isSubmitted &&
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ props.onPoemSubmitCallback }/>
        </div>
      }
    </div>
  );
}

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  onPoemSubmitCallback: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default FinalPoem;
