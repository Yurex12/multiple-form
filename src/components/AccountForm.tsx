import { ChangeEvent } from 'react';
import FormWrapper from './FormWrapper';

type AccountFormData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountFormData & {
  updateFeilds: (feilds: Partial<AccountFormData>) => void;
};

function AccountForm({ email, password, updateFeilds }: AccountFormProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    updateFeilds({ [name]: value });
  }
  return (
    <FormWrapper title='Account Details'>
      <label htmlFor='email'>Email</label>
      <input
        autoFocus
        required
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={handleChange}
      />

      <label htmlFor='password'>Password</label>
      <input
        required
        type='text'
        id='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
    </FormWrapper>
  );
}

export default AccountForm;
