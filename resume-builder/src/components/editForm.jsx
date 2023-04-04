import {
  VStack,
  Divider,
  SimpleGrid,
  Center,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import PersonalInfo from './formComponents/personalInfo';
import Education from './formComponents/education';
import SAC from './formComponents/skillsAndCerificates'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useToast,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';


import {  DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import Experience from './formComponents/experience';
import Projects from './formComponents/projects';
import SSAL from './formComponents/softskillsAndLanguages';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function EditForm() {

  function handleSubmit(e) {
    e.preventDefault()
    if(!form.education.length) {toast({title:"Add atleast 1 Education Field",status:"warning",duration:1500}); return}
    if(!form.skills.length) {toast({title:"Add atleast 1 Skill",status:"warning",duration:1500}); return}
    if(!form.softSkills.length) {toast({title:"Add atleast 1 Soft-Skill",status:"warning",duration:1500}); return}
    if(!form.languages.length) {toast({title:"Add atleast 1 Language",status:"warning",duration:1500}); return}
    setSavedForm(form)
    toast({ title: "Saved, You can now Customize Resume", status: "success", duration: 1000 })
  }

  const {form,setSavedForm,setForm} = useContext(AppContext)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  return (
    <>
      <Center w={{base:"100%",lg:"65%"}} bg={useColorModeValue("gray.100","gray.800")} mx="auto" border={'2px'} borderColor={"purple.300"} p={{base:3,lg:6}} rounded={8}>
        <form onSubmit={handleSubmit} id="resForm" style={{ width: '100%' }}>
          <VStack w="100%" spacing="4">
            <PersonalInfo/>
            <Divider />
            <Experience />
            <Divider />
            <Education/>
            <Divider />
            <SAC/>
            <Divider/>
            <Projects/>
            <Divider />
            <SSAL/>
            <SimpleGrid spacing="3" columns={{ base: '1', lg: '2' }} w="100%">
              <Button
                size="lg"
                onClick={onOpen}
                leftIcon={<DeleteIcon />}
                w="100%"
                colorScheme="red"
              >
                Reset Form Data
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Confirm</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Are you sure to reset the Form? The data will be lost .
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="orange" mr={3} onClick={onClose}>
                      Don't Reset
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setForm({
                          name: "",
                          designation: "",
                          contact: "",
                          email: "",
                          description: "",
                          education: [],
                          add1: "", add2: "", pin: "",
                          certificates: [], skills: [],
                          experience: [], projects: [],
                          softSkills: [], languages: [],
                          showImage:"none"
                          })
                          document.getElementById("resForm").reset();
                          onClose()
                          toast({title:"Form has been Reset",status:'success',duration:1000})
                          }}
                    >
                      Reset
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                colorScheme="green"
                leftIcon={<CheckIcon />}
                w="100%"
                type="submit"
                size="lg" 
              >
                Save Form Data
              </Button>
            </SimpleGrid>
          </VStack>
        </form>
      </Center>
    </>
  );
}
