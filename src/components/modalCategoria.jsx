import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalCategoria = ({
  data = { undefined },
  setData = { undefined },
  dataEdit = { undefined },
  isOpen = { undefined },
  onClose = { undefined },
}) => {
  const [name, setName] = useState(dataEdit.name || "");

  const handleSave = () => {
    if (!name) return;

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name }]
      : [...(data ? data : [])];

    localStorage.setItem("categoria", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={() => {}}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCategoria;
