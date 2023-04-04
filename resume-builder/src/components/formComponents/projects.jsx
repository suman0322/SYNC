import {Text,SimpleGrid,Input,Button,useToast} from '@chakra-ui/react'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import AppContext from '../../context/AppContext'
export default function Projects()
{
    const toast=useToast()
    const {form,setForm} = useContext(AppContext)

    function addProject() {
        if (
            document.getElementById('proName').value === '' ||
            document.getElementById('proTech').value === '' ||
            document.getElementById('proDes').value === ''
        ) {
            toast({
                title: 'Error',
                description: 'Enter All Project Fields',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        } else {
            const proObject = {
                id: uuid(),
                proName: document.getElementById('proName').value,
                proTech: document.getElementById('proTech').value,
                proDes: document.getElementById('proDes').value
            }
            setForm({...form,projects:[...form.projects,proObject]})
            document.getElementById('proName').value = '';
            document.getElementById('proTech').value = '';
            document.getElementById('proDes').value = '';
        }
    }

    return(
        <>
            <Text fontWeight="600" as="u">
                Projects
            </Text>
            <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
                <Input type="text" id="proName" placeholder="Project Title" />
                <Input type="text" id="proTech" placeholder="Description 1" />
                <Input
                    type="text"
                    id="proDes"
                    placeholder="Description 2"
                />
                <Button
                    onClick={addProject}
                    colorScheme="purple"
                    leftIcon={<AddIcon />}
                >
                    Add Project
                </Button>
            </SimpleGrid>
            <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
                {form.projects.map(project => (
                    <>
                        <Input
                            key={uuid()}
                            defaultValue={project.proName}
                            readOnly
                        />
                        <Input key={uuid()} defaultValue={project.proTech} readOnly />
                        <Input key={uuid()} defaultValue={project.proDes} readOnly />
                        <Button
                            key={uuid()}
                            colorScheme="red"
                            leftIcon={<MinusIcon />}
                            onClick={() => setForm({...form,projects:form.projects.filter(i=>i.id!==project.id)})
                            }
                        >
                            Remove Field
                        </Button>
                    </>
                ))}
            </SimpleGrid>
            </>
    )
}