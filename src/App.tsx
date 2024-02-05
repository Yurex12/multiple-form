import { FormEvent, useState } from 'react';
import AccountForm from './components/AccountForm';
import AddressForm from './components/AddressForm';
import UserForm from './components/UserForm';
import { useMultipleForm } from './hooks/useMultipleForm';

type INITIAL_DATAProps = {
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  state: string;
  street: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: INITIAL_DATAProps = {
  firstName: '',
  lastName: '',
  age: '',
  city: '',
  state: '',
  street: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFeilds(feilds: Partial<INITIAL_DATAProps>) {
    setData((prev) => {
      return { ...prev, ...feilds };
    });
  }
  const { steps, currentStepIndex, step, isFirst, back, next, isLast } =
    useMultipleForm([
      <UserForm {...data} updateFeilds={updateFeilds} />,
      <AddressForm {...data} updateFeilds={updateFeilds} />,
      <AccountForm {...data} updateFeilds={updateFeilds} />,
    ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast) {
      next();
      return;
    }
    alert('Account succeafully created');
  }
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        maxWidth: '600px',
        margin: '1rem auto',
        padding: '2rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {isFirst && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}

          <button type='submit'>{isLast ? 'Finish' : ' Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
