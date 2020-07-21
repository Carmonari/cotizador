import React, {useState, Fragment} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Cont = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormCont = styled.div`
  background-color: #FFF;
  padding: 3.5rem;
`;

function App() {
  const [summary, setSummary] = useState({
    price: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });
  const [loading, setLoading] = useState(false);

  const {data, price} = summary;

  return (
    <Cont>
      <Header title="Cotizador de autos" />

      <FormCont>
        <Formulario
          setSummary={setSummary}
          setLoading={setLoading}
        />
        {
          loading && <Spinner />
        }
        
        {
          !loading && 
          (
            <Fragment>
              <Summary
                data={data}
              />
              <Result price={price} />
            </Fragment>
          )
        }
      </FormCont>
    </Cont>
  );
}

export default App;
