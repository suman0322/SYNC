import { useToast,Input,Button,SimpleGrid,Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import AppContext from "../../context/AppContext";
import { v4 as uuid } from "uuid";

export default function Experience() {
    const toast = useToast()
    const {form,setForm} = useContext(AppContext)

    function addEXP() {
        if (
            document.getElementById('expEmp').value === '' ||
            document.getElementById('expTitle').value === '' ||
            document.getElementById('expDur').value === ''
        ) {
            toast({
                title: 'Error',
                description: 'Enter All Experience Fields',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
        } else {
            const expObject = {
                id: uuid(),
                employer: document.getElementById('expEmp').value,
                title: document.getElementById('expTitle').value,
                duration: document.getElementById('expDur').value,
            }
            setForm({ ...form, experience: [...form.experience, expObject] })
            document.getElementById('expEmp').value = '' 
            document.getElementById('expTitle').value = '' 
            document.getElementById('expDur').value = ''
        }
    }
    return(
        <>
            <Text fontWeight="600" as="u">
                Experience
            </Text>
            <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
                <Input type="text" id="expEmp" placeholder="Employer" />
                <Input type="text" id="expTitle" placeholder="Job Title" />
                <Input
                    type="text"
                    id="expDur"
                    placeholder="From Date - To Date"
                />
                <Button
                    onClick={addEXP}
                    colorScheme="purple"
                    leftIcon={<AddIcon />}
                >
                    Add Experience
                </Button>
            </SimpleGrid>
            <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
                {form.experience.map(experience => (
                    <>
                        <Input
                            defaultValue={experience.employer}
                            key={uuid()}
                            readOnly
                        />
                        <Input key={uuid()} defaultValue={experience.title} readOnly />
                        <Input key={uuid()} defaultValue={experience.duration} readOnly />
                        <Button
                            key={uuid()}
                            colorScheme="red"
                            leftIcon={<MinusIcon />}
                            onClick={() => setForm({ ...form, experience: form.experience.filter(i => i.id !== experience.id)})}
                        >
                            Remove Field
                        </Button>
                    </>
                ))}
            </SimpleGrid>
        </>
    )
}