import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, VStack, Box, Alert, AlertIcon, Button, useColorModeValue, HStack, IconButton, Center } from '@chakra-ui/react';
import { EditIcon, ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import Features from './features';

export default function Hero() {
  const goTo = useNavigate();
  return (
    <Center bg={useColorModeValue("gray.50", "gray.900")} pt={{base:"12vh",lg:"0"}} minH="100vh" w="100%">
      <VStack w="100%" spacing={{ base: '5', lg: '5' }}>
        <Text
          textAlign="center"
          w="fit-content"
          maxW={"85%"}
          color={useColorModeValue("blue.900", "purple.50")}
          fontFamily="poppins"
          fontSize={{ base: '2xl', lg: '5xl' }}
        >
          Create beautiful Resume in no time
          <Box mt={{ base: 3, lg: 0 }} h={"2px"} className="gradient"></Box>
        </Text>
        <Text
          fontFamily="josef"
          fontSize={{ base: 'sm', lg: 'lg' }}
          as={'u'}
          textAlign='center'
          w="75%"
          color={useColorModeValue('orange.700', 'orange.100')}
          fontWeight="600"
        >
          We make creating the perfect resume QUICK and EASY
        </Text>
        <Alert status='info' textAlign={"center"} w={"fit-content"} fontWeight={500} maxW="90%">
          <AlertIcon />
          No Registration needed, just Create and Download ⚡
        </Alert>
        <Button
          onClick={() => goTo('/editor')}
          leftIcon={<EditIcon />}
          size="lg"
          rounded="3"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
        >
          Go to Editor
        </Button>
        <Text
          w="100%"
          fontWeight="800"
          as="u"
          align="center"
          fontSize={{ base: 'lg', lg: '2xl' }}
        >
          Features
        </Text>
        <Features />
      </VStack>
      <HStack justify={"space-between"} position={'absolute'} className="gradient" boxShadow='dark-lg' bottom={0} w="100%" p="2" px={4}>
        <IconButton onClick={()=>goTo('/about')} aria-label='Search database' variant={"solid"} color="black" bg={"teal.100"} icon={<StarIcon />} />
        <Text align="center" color={"black"} fontWeight={500}>
          © 2022 All Rights Reserved
        </Text>
      </HStack>
    </Center>
  );
}
