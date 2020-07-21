import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
  background-color: rgb(78, 78, 78);
  color: #FFF;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #1d1d1d;
  background-color: rgb(78, 78, 78);
  margin-top: 1rem;
  position: relative;
`;

const TxtTotal = styled.p`
  color: #FFF;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
 
const Result = ({price}) => {
  return (
    (price === 0)
      ? <Message>Elige un tipo de auto, año y tipo de seguro</Message>
      :
        (
          <ResultContainer>
            <TransitionGroup
              className="resultado"
              component="span"
            >
              <CSSTransition
                classNames="resultado"
                key={price}
                timeout={{enter: 500, exit: 500}}
              >
                <TxtTotal>El total es: $<span>{price}</span></TxtTotal>
              </CSSTransition>
            </TransitionGroup>
          </ResultContainer>
        )
  )
}

Result.propTypes = {
  price: PropTypes.number.isRequired,
}

export default Result;
