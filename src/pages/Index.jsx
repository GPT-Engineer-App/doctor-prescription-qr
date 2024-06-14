import React, { useState } from 'react';
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const Index = () => {
  const [patientName, setPatientName] = useState('');
  const [prescription, setPrescription] = useState('');
  const [details, setDetails] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Form Submitted",
      description: "Patient details have been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Patient Information Form</Heading>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl id="patient-name" isRequired>
              <FormLabel>Patient Name</FormLabel>
              <Input 
                type="text" 
                value={patientName} 
                onChange={(e) => setPatientName(e.target.value)} 
                placeholder="Enter patient's name" 
              />
            </FormControl>
            <FormControl id="prescription" isRequired>
              <FormLabel>Prescription</FormLabel>
              <Textarea 
                value={prescription} 
                onChange={(e) => setPrescription(e.target.value)} 
                placeholder="Enter prescription details" 
              />
            </FormControl>
            <FormControl id="details">
              <FormLabel>Other Details</FormLabel>
              <Textarea 
                value={details} 
                onChange={(e) => setDetails(e.target.value)} 
                placeholder="Enter any other important details" 
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Submit</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Index;