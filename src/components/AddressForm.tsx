import { ChangeEvent } from 'react';
import FormWrapper from './FormWrapper';

type AddressFormData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressFormData & {
  updateFeilds: (feilds: Partial<AddressFormData>) => void;
};

function AddressForm({
  street,
  city,
  state,
  zip,
  updateFeilds,
}: AddressFormProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    updateFeilds({ [name]: value });
  }
  return (
    <FormWrapper title='Address Details'>
      <label htmlFor='street'>Street</label>

      <input
        autoFocus
        required
        type='text'
        id='street'
        name='street'
        value={street}
        onChange={handleChange}
      />

      <label htmlFor='city'>City</label>
      <input
        required
        type='text'
        id='city'
        name='city'
        value={city}
        onChange={handleChange}
      />

      <label htmlFor='state'>State</label>
      <input
        required
        type='text'
        id='state'
        name='state'
        value={state}
        onChange={handleChange}
      />

      <label htmlFor='zip'>Zip</label>
      <input
        required
        type='text'
        id='zip'
        value={zip}
        name='zip'
        onChange={handleChange}
      />
    </FormWrapper>
  );
}

export default AddressForm;
