import { addAppointment } from '@/store/appointment';
import { Button } from '@mantine/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

type BookingFormState = {
  name: string;
  gender: 'male' | 'female' | 'others';
  age: number;
  date: Date | string;
  time: string;
};

const AptForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const InputTag = styled.input`
  display: inline-block;
  /* margin-left: 0.7rem; */
  border: 1px solid gray;
  padding: 0.4rem;
  border-radius: 0.4rem;
  outline: none;
`;

const InputSelect = styled.select`
  display: inline-block;
  /* margin-left: 0.7rem; */
  border: 1px solid gray;
  padding: 0.4rem;
  border-radius: 0.4rem;
  outline: none;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border: none;
`;

export function BookingForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<BookingFormState>();

  const onSubmitHandler: SubmitHandler<BookingFormState> = (data) => {
    // console.log(data);

    dispatch(addAppointment(data));
  };

  return (
    <>
      <AptForm onSubmit={handleSubmit(onSubmitHandler)}>
        <FieldSet>
          <label htmlFor="name">Name: </label>
          <InputTag
            {...register('name', { required: true })}
            id="name"
            name="name"
            placeholder="i.e. John Doe"
          />
          {errors.name && <span>This field is required</span>}
        </FieldSet>

        <FieldSet>
          <label htmlFor="gender">Gender: </label>
          <InputSelect
            {...register('gender', { required: true })}
            id="gender"
            name="gender"
            defaultValue="male"
          >
            <option value="male" label="Male"></option>
            <option value="female" label="Female"></option>
            <option value="others" label="Others"></option>
          </InputSelect>
          {errors.gender && <span>This field is required</span>}
        </FieldSet>

        <FieldSet>
          <label htmlFor="age">Age: </label>
          <InputTag
            {...register('age', { required: true, min: 1, max: 1000 })}
            id="age"
            name="age"
            placeholder="i.e. 24"
          />
          {errors.age && <span>This field is required</span>}
        </FieldSet>

        <FieldSet>
          <label htmlFor="date">Date: </label>
          <InputTag
            {...register('date', { required: true })}
            id="date"
            name="date"
            type="date"
            placeholder="i.e. 2024-09-01"
          />
          {errors.date && <span>Date is required!</span>}
        </FieldSet>

        <FieldSet>
          <label htmlFor="time">Time: </label>
          <InputTag
            {...register('time', { required: true })}
            id="time"
            name="time"
            type="time"
            placeholder="i.e. 16:00"
          />
          {errors.time && <span>This field is required</span>}
        </FieldSet>

        <Button type="submit">Book</Button>
      </AptForm>
    </>
  );
}
