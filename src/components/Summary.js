import React from 'react';
import styled from '@emotion/styled';
import {firstUppercase} from '../helper';
import PropTypes from 'prop-types';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #555555;
  color: #FFF;
  margin-top: 1rem;
`;

const Summary = ({data: {brand, year, plan}}) => {

  if(year === '' || brand === '' || plan === '') return null;

  return (
    <ContainerSummary>
      <h2>
        Resumen de cotización
      </h2>
      <ul>
        <li>Marca: {firstUppercase(brand)}</li>
        <li>Plan: {firstUppercase(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContainerSummary>
  )
}

Summary.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Summary;
