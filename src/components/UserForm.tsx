// import { ChangeEvent, ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';
import FormWrapper from './FormWrapper';

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFeilds: (feilds: Partial<UserData>) => void;
};

function UserForm({ firstName, lastName, age, updateFeilds }: UserFormProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    updateFeilds({ [name]: value });
  }

  return (
    <FormWrapper title='User Details'>
      <label htmlFor='firstname'>First Name</label>
      <input
        autoFocus
        required
        type='text'
        id='firtsname'
        name='firstName'
        value={firstName}
        onChange={handleChange}

        // onChange={(e) => updateFeilds({ firstName: e.target.value })}
      />

      <label htmlFor='lastname'>Last Name</label>
      <input
        required
        type='text'
        id='lastname'
        name='lastName'
        value={lastName}
        onChange={handleChange}

        // onChange={(e) => updateFeilds({ lastName: e.target.value })}
      />

      <label htmlFor='age'>Age</label>
      <input
        required
        type='number'
        min={1}
        id='age'
        name='age'
        value={age}
        onChange={handleChange}
        // onChange={(e) => updateFeilds({ age: e.target.value })}
      />
    </FormWrapper>
  );
}

export default UserForm;
