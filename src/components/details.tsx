import { AppointmentState } from '@/store/appointment';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styled from 'styled-components';

const Appt = styled.span`
  display: inline-block;
  text-align: left;
  font-size: 0.65rem;
  border: 1px solid gray;
  padding: 0.05rem;
`;

export function AppointmentDetails(props: { data: AppointmentState }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={`Booked by ${props.data.name}`}
      >
        <p>
          <strong>Name:</strong> {props.data.name}
        </p>
        <p>
          <strong>Gender:</strong> {props.data.gender.toUpperCase()}
        </p>
        <p>
          <strong>Age:</strong> {props.data.age}
        </p>
        <p>
          <strong>Date:</strong> {new Date(props.data.date).toDateString()}
        </p>
        <p>
          <strong>Time:</strong> {props.data.time}
        </p>
      </Modal>

      <Appt onClick={open}>{props.data.name}</Appt>
    </>
  );
}
