import {
  Box,
  Flex,
  Button,
  HStack,
  useColorModeValue,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

export default function Appbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(()=>{if(colorMode==='light') toggleColorMode() },[])

  const goTo = useNavigate();
  
  return (
    <>
      <Box
        as="header"
        top="0"
        w="100%"
        position="fixed"
        backdropFilter="blur(20px)"
        zIndex="100"
      >
      <Box h={1} className="gradient" w={"100%"}></Box>
        <Flex h={14} px={1} alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            ml={{ base: '0', lg: '5' }}
            spacing={{ base: '0', lg: '100' }}
          >
            <Box ml={{ base: '2', lg: '0' }}>
              <Button
                color={useColorModeValue('gray.800', 'white')}
                variant="link"
                onClick={() => goTo('/')}
                _hover={{}}
                fontSize="lg"
                fontWeight="800"
              >
                CVBuilder.io
              </Button>
            </Box>
            <HStack spacing="4" display={{ base: 'none', lg: 'block' }}>
              <Button variant="ghost" onClick={() => goTo('/editor')}>
                Editor
              </Button>
              <Button variant="ghost" onClick={() => goTo('/about')}>
                About
              </Button>
            </HStack>
          </HStack>
          <Stack direction={'row'} spacing={7}>
            <Button p="0" variant="outline" colorScheme="orange" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
