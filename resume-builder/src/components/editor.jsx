import React, { useContext } from 'react';
import {
  Text,
  VStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import EditForm from './editForm';
import Customize from './customization';
import AppContext from '../context/AppContext';

export default function Editor() {
  const { savedForm } = useContext(AppContext)
  return (
    <Center bg={useColorModeValue("white","gray.900")} py={{ base: '10vh', lg: '10vh' }}>
      <VStack w="100%" spacing="5">
        <Text
          color="gray.900"
          mx="auto"
          w="62%"
          rounded={"full"}
          fontWeight={"bold"}
          bg={"gray.300"}
          align="center"
          fontFamily={"righteous"}
          fontSize={{ base: '3xl', lg: '3xl' }}
        >
          EDITOR
        </Text>
        <Tabs
          width="100%"
          size="md"
          variant="soft-rounded"
          colorScheme="orange"
        >
          <TabList w={{base:"95%",lg:"65%"}} mx="auto">
            <Tab width="45%" mx="auto">
              Form
            </Tab>
            <Tab width="45%" mx="auto" isDisabled={savedForm.name===""}>
              {savedForm.name === ""?"Locked":"Customize"}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EditForm/>
            </TabPanel>
            <TabPanel>
              <Customize/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  );
}
