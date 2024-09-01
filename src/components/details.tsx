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
        title={`Appointment by ${props.data.name}`}
      >
        <p>Name: {props.data.name}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Age: {props.data.age}</p>
        <p>Date: {new Date(props.data.date).toUTCString()}</p>
        <p>Time: {props.data.time}</p>
      </Modal>

      <Appt onClick={open}>{props.data.name}</Appt>
    </>
  );
}
