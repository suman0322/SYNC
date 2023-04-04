import { Text, SimpleGrid, VStack, HStack, Input, Button, useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';
import AppContext from "../../context/AppContext"


export default function SAC() {
    const { form, setForm } = useContext(AppContext)
    const toast = useToast()

    function addSkill() {
        if (document.getElementById('skillName').value !== '') {
            const skObject = {
                id: uuid(),
                name: document.getElementById('skillName').value,
            };
            setForm({ ...form, skills: [...form.skills, skObject] })
            document.getElementById('skillName').value = '';
        } else {
            toast({
                title: 'Error',
                description: 'Enter Skill Name',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        }
    }

    function addCertificate() {
        if (document.getElementById('certiName').value !== '') {
            const certiObject = {
                id: uuid(),
                name: document.getElementById('certiName').value,
            };
            setForm({ ...form, certificates: [...form.certificates, certiObject] })
            document.getElementById('certiName').value = ''
        } else {
            toast({
                title: 'Error',
                description: 'Enter Certificate Name',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        }
    }
    return (
        <>
            <Text fontWeight="600" as="u">
                Skills and Certifications
            </Text>
            <SimpleGrid w="100%" spacing="3" columns={{ base: '1', md: '2' }}>
                <VStack w="100%" spacing="3">
                    <HStack w="100%">
                        <Input
                            disabled={form.skills.length === 5}
                            id="skillName"
                            type="text"
                            placeholder="Enter Skill Name"
                        />
                        <Button disabled={form.skills.length === 5} onClick={addSkill} colorScheme="purple" >
                            <AddIcon />
                        </Button>
                    </HStack>
                    {form.skills.map(skill => (
                        <HStack w="100%" spacing="3" key={skill.id}>
                            <Input defaultValue={skill.name} readOnly />
                            <Button
                                colorScheme="red"
                                onClick={() => setForm({ ...form, skills: form.skills.filter(i => i.id !== skill.id) })
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
                            disabled={form.certificates.length === 5}
                            id="certiName"
                            type="text"
                            placeholder="Enter Certificate Name"
                        />
                        <Button disabled={form.certificates.length === 5} colorScheme="purple" onClick={addCertificate}>
                            <AddIcon />
                        </Button>
                    </HStack>
                    {form.certificates.map(certificate => (
                        <HStack w="100%" spacing="3" key={certificate.id}>
                            <Input defaultValue={certificate.name} readOnly />
                            <Button
                                colorScheme="red"
                                onClick={() => setForm({ ...form, certificates: form.certificates.filter(i => i.id !== certificate.id) })
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