import { Text,VStack,HStack, SimpleGrid, Input, Button, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import AppContext from '../../context/AppContext'

export default function SSAL(){
    const toast=useToast()

    const {form,setForm} = useContext(AppContext)


    function addLanguage() {
        if (document.getElementById('language').value !== '') {
            const langObj = {
                id: uuid(),
                name: document.getElementById('language').value,
            };
            setForm({...form,languages:[...form.languages,langObj]});
            document.getElementById('language').value = '';
        } else {
            toast({
                title: 'Error',
                description: 'Enter Language',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        }
    }

    function addSoftSkill() {
        if (document.getElementById('softSkill').value !== '') {
            const ssObject = {
                id: uuid(),
                name: document.getElementById('softSkill').value,
            };
            setForm({...form,softSkills:[...form.softSkills,ssObject]});
            document.getElementById('softSkill').value = '';
        } else {
            toast({
                title: 'Error',
                description: 'Enter Soft Skill Name',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        }
    }

    return(
        <>
            <Text fontWeight="600" as="u">
                Soft-Skills and Languages
            </Text>
            <SimpleGrid w="100%" spacing="3" columns={{ base: '1', md: '2' }}>
                <VStack w="100%" spacing="3">
                    <HStack w="100%">
                        <Input
                            id="softSkill"
                            type="text"
                            placeholder="Enter Soft Skill"
                        />
                        <Button onClick={addSoftSkill} colorScheme="purple">
                            <AddIcon />
                        </Button>
                    </HStack>
                    {form.softSkills.map(softSkill => (
                        <HStack w="100%" spacing="3" key={softSkill.id}>
                            <Input defaultValue={softSkill.name} readOnly />
                            <Button
                                colorScheme="red"
                                onClick={() => setForm({...form,softSkills:form.softSkills.filter(i=>i.id!==softSkill.id)})
                                }
                            >
                                <MinusIcon />
                            </Button>
                        </HStack>
                    ))}
                </VStack>
                <VStack w="100%" spacing="3">
                    <HStack w="100%">
                        <Input
                            id="language"
                            type="text"
                            placeholder="Enter Language"
                        />
                        <Button colorScheme="purple" onClick={addLanguage}>
                            <AddIcon />
                        </Button>
                    </HStack>
                    {form.languages.map(language => (
                        <HStack w="100%" spacing="3" key={language.id}>
                            <Input defaultValue={language.name} readOnly />
                            <Button
                                colorScheme="red"
                                onClick={() => setForm({...form,languages:form.languages.filter(i=>i.id!==language.id)})
                                }
                            >
                                <MinusIcon />
                            </Button>
                        </HStack>
                    ))}
                </VStack>
            </SimpleGrid>
            </>
    )
}