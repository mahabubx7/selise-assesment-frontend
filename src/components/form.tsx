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
  gap: 1rem;
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
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            {...register('name', { required: true })}
            id="name"
            name="name"
            placeholder="i.e. John Doe"
          />
          {errors.name && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="gender">Gender</label>
          <select
            {...register('gender', { required: true })}
            id="gender"
            name="gender"
            defaultValue="male"
          >
            <option value="male" label="Male"></option>
            <option value="female" label="Female"></option>
            <option value="others" label="Others"></option>
          </select>
          {errors.gender && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="age">Age</label>
          <input
            {...register('age', { required: true, min: 1, max: 1000 })}
            id="age"
            name="age"
            placeholder="i.e. 24"
          />
          {errors.age && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="date">Date</label>
          <input
            {...register('date', { required: true })}
            id="date"
            name="date"
            type="date"
            placeholder="i.e. 2024-09-01"
          />
          {errors.date && <span>Date is required!</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="time">Time</label>
          <input
            {...register('time', { required: true })}
            id="time"
            name="time"
            type="time"
            placeholder="i.e. 16:00"
          />
          {errors.time && <span>This field is required</span>}
        </fieldset>

        <Button type="submit">Book</Button>
      </AptForm>
    </>
  );
}
