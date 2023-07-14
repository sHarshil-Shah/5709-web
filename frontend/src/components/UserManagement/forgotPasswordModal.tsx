import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from '@chakra-ui/react';

interface ForgetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered 
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Forgot your password?, No Worries!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter Email</FormLabel>
              <Input ref={initialRef} placeholder="Link will be shared if the user is registered" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Sent Password Reset Link
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForgetPasswordModal;
