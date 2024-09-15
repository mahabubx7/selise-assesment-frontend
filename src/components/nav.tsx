import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BookingForm } from './form';

export function Appointment() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Make An Appointment">
        <BookingForm closer={() => close()} />
      </Modal>

      <Button onClick={open} size="sm">
        Create Appointment
      </Button>
    </>
  );
}
