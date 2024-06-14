import React, { useState } from 'react';
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import QRCodeDisplay from '../components/QRCodeDisplay';

const Index = () => {
  const [doctorName, setDoctorName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [clinicDetails, setClinicDetails] = useState('');
  const [phone, setPhone] = useState('');
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [prescription, setPrescription] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [qrValue, setQrValue] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const qrData = `Dr. ${doctorName}, MD\nReg. No: ${regNo}\n${clinicDetails}\nPhone: ${phone}\n\nPatient: ${patientName}\nAge: ${age}\nGender: ${gender}\nDate: ${date}\n\nRx\n\n${prescription}\n\nSpecial Instructions:\n${specialInstructions}\n\nDr. ${doctorName}\n(Signature)`;
    setQrValue(qrData);
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
            <FormControl id="doctor-name" isRequired>
              <FormLabel>Doctor's Name</FormLabel>
              <Input 
                type="text" 
                value={doctorName} 
                onChange={(e) => setDoctorName(e.target.value)} 
                placeholder="Enter doctor's name" 
              />
            </FormControl>
            <FormControl id="reg-no" isRequired>
              <FormLabel>Registration Number</FormLabel>
              <Input 
                type="text" 
                value={regNo} 
                onChange={(e) => setRegNo(e.target.value)} 
                placeholder="Enter registration number" 
              />
            </FormControl>
            <FormControl id="clinic-details" isRequired>
              <FormLabel>Clinic Details</FormLabel>
              <Textarea 
                value={clinicDetails} 
                onChange={(e) => setClinicDetails(e.target.value)} 
                placeholder="Enter clinic details" 
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Enter phone number" 
              />
            </FormControl>
            <FormControl id="patient-name" isRequired>
              <FormLabel>Patient Name</FormLabel>
              <Input 
                type="text" 
                value={patientName} 
                onChange={(e) => setPatientName(e.target.value)} 
                placeholder="Enter patient's name" 
              />
            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input 
                type="text" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Enter patient's age" 
              />
            </FormControl>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Input 
                type="text" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                placeholder="Enter patient's gender" 
              />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
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
            <FormControl id="special-instructions">
              <FormLabel>Special Instructions</FormLabel>
              <Textarea 
                value={specialInstructions} 
                onChange={(e) => setSpecialInstructions(e.target.value)} 
                placeholder="Enter any special instructions" 
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Submit</Button>
          </VStack>
        </form>
        {qrValue && <QRCodeDisplay value={qrValue} />}
      </VStack>
    </Container>
  );
};

export default Index;