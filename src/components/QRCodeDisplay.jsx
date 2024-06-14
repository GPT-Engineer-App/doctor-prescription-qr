import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import { QRCode } from 'qrcode.react';

const QRCodeDisplay = ({ value }) => {
  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h2" size="lg" mb={4}>Generated QR Code</Heading>
      <QRCode value={value} size={256} />
    </Box>
  );
};

export default QRCodeDisplay;