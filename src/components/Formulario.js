import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {getDifferenceYear, calcBrand, getPlan} from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #1c1c1c;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #555555;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Formulario = ({setSummary, setLoading}) => {
  const [data, setData] = useState({
    year: '',
    brand: '',
    plan: ''
  });
  const [error, setError] = useState(false);

  const {year, brand, plan} = data;

  const changeState = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const cotizar = e => {
    e.preventDefault();

    if(year.trim() === '' || brand.trim() === '' || plan.trim() === ''){
      setError(true);
      return;
    }

    setError(false);

    let res = 2000;
    const difference = getDifferenceYear(year);
    res -= ((difference * 3) * res) / 100;

    res = calcBrand(brand) * res;

    const increasePlan = getPlan(plan);
    res = parseFloat(increasePlan * res).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSummary({
        data,
        price: Number(res)
      });
    }, 1500);
  }
 
  return (
    <form
      onSubmit={cotizar}
    >
      {error && <Error>Todos los campos son obligatorios</Error>}
      <Field>
        <Label>Tipo de auto</Label>
        <Select
          name="brand"
          value={brand}
          onChange={changeState}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>    
      <Field>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={changeState}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field> 
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={changeState}
        /> Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={changeState}
        /> Completo
      </Field>

      <Button type="submit">Cotizar</Button>
    </form>
  )
}

Formulario.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setSummary: PropTypes.func.isRequired,
}

export default Formulario;
