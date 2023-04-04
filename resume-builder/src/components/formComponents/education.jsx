import { Text, SimpleGrid, Input, Button, useToast } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function Education() {

  const toast = useToast();

  const { form, setForm } = useContext(AppContext)

  function addEdu() {
    if (
      document.getElementById('eduPro').value === '' ||
      document.getElementById('eduTitle').value === '' ||
      document.getElementById('eduYear').value === ''
    ) {
      toast({
        title: 'Error',
        description: 'Enter All Education Fields',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
    } else {
      const eduObject = {
        id: uuid(),
        school: document.getElementById('eduPro').value,
        title: document.getElementById('eduTitle').value,
        year: document.getElementById('eduYear').value,
      };

      setForm({ ...form, education: [...form.education, eduObject] })

      document.getElementById('eduPro').value = '';
      document.getElementById('eduTitle').value = '';
      document.getElementById('eduYear').value = '';
    }
  }

  return (
    <>
      <Text fontWeight="600" as="u">
        Education
      </Text>
      <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
        <Input disabled={form.education.length === 3} type="text" id="eduPro" placeholder="School/University" />
        <Input disabled={form.education.length === 3} type="text" id="eduTitle" placeholder="Course - Performance" />
        <Input disabled={form.education.length === 3} type="text" id="eduYear" placeholder="Year" />
        <Button disabled={form.education.length === 3} onClick={addEdu} colorScheme="purple" leftIcon={<AddIcon />}>
          Add Education
        </Button>
      </SimpleGrid>
      <SimpleGrid w="100%" columns={{ base: '1', md: '4' }} spacing="3">
        {form.education.map(education => (
          <>
            <Input key={uuid()} defaultValue={education.school} readOnly />
            <Input key={uuid()} defaultValue={education.title} readOnly />
            <Input key={uuid()} defaultValue={education.year} readOnly />
            <Button
              key={uuid()}
              colorScheme="red"
              leftIcon={<MinusIcon />}
              onClick={() => {
                setForm({ ...form, education: form.education.filter(e => e.id !== education.id) })
              }
              }
            >
              Remove Field
            </Button>
          </>
        ))}
      </SimpleGrid>
    </>
  );
}