import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcFlashOn, FcEditImage, FcLike } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack p={6} bg={useColorModeValue("blue.100","gray.700")} boxShadow={useColorModeValue("25px 25px 50px #bebebe, -25px -25px 50px #ffffff", "20px 20px 35px black, -10px -10px 20px #202124")} rounded="lg">
      <Flex
        mx="auto"
        w={28}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'30'}
        bg={useColorModeValue('blue.50', 'gray.50')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text align="center" fontWeight={700} color={useColorModeValue("orange.500","orange.200")}>
        {title}
      </Text>
      <Text align="center" fontWeight="500" color={useColorModeValue('blue.700', 'blue.100')}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box w={{ base: '85%', lg: '80%' }} pb={{base:20,lg:0}}>
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcFlashOn} w={14} h={14} />}
          title={'Fast'}
          text={'Lightning Fast Editor and PDF Generator'}
        />
        <Feature
          icon={<Icon as={FcEditImage} w={14} h={14} />}
          title={'Customizable'}
          text={'Highly customizable Resumes'}
        />
        <Feature
          icon={<Icon as={FcLike} w={14} h={14} />}
          title={'Free'}
          text={'Completely Free from Builder to Download'}
        />
      </SimpleGrid>
    </Box>
  );
}
