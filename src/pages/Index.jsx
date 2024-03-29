import React, { useState } from "react";
import { Box, Button, Input, VStack, HStack, Table, Thead, Tbody, Tr, Th, Td, Text, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState({});
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleInputChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  const handleSubmit = () => {
    if (file) {
      // Simulate file processing
      toast({
        title: "File uploaded!",
        description: "We've simulated the file upload.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setPage(2);
  };

  if (page === 1) {
    return (
      <VStack spacing={4}>
        <Input placeholder="Value 1" onChange={handleInputChange("value1")} value={values.value1 || ""} />
        <Input placeholder="Value 2" onChange={handleInputChange("value2")} value={values.value2 || ""} />
        <Input placeholder="Value 3" onChange={handleInputChange("value3")} value={values.value3 || ""} />
        <Input placeholder="Value 4" onChange={handleInputChange("value4")} value={values.value4 || ""} />
        <Input placeholder="Value 5" onChange={handleInputChange("value5")} value={values.value5 || ""} />
        <HStack>
          <Input type="file" accept=".csv" onChange={handleFileChange} />
          <Button leftIcon={<FaUpload />} onClick={handleSubmit}>
            Upload CSV
          </Button>
        </HStack>
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    );
  } else {
    return (
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5].map((number) => (
              <Tr key={number}>
                <Td>{number}</Td>
                <Td>{values[`value${number}`] || ""}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button mt={4} colorScheme="blue" onClick={() => setPage(1)}>
          Go Back
        </Button>
      </Box>
    );
  }
};

export default Index;
