import { useContext } from 'react';
import { SimpleGrid, Input, Text, Textarea,useToast } from '@chakra-ui/react';
import AppContext from '../../context/AppContext';

export default function PersonalInfo() {

  const {form,setForm} = useContext(AppContext)
  const toast = useToast()

  function handleImage(e){
    const allowed = ["image/png","image/jpeg","image/jpg"]
    if(e.target.files[0] && allowed.includes(e.target.files[0].type)){
      const reader = new FileReader()
      reader.onloadend = () => setForm({...form,profilePhoto:reader.result,showImage:"block"})
      reader.readAsDataURL(e.target.files[0])
    }
    else{
      toast({title:"Select Correct Image Format (JPG/PNG)",status:"error",duration:2000})
      setForm({ ...form, showImage: "none" })
    }
  }

  return (
    <>
      <Text fontWeight="600" as="u">
        Personal Details
      </Text>
      <SimpleGrid w="100%" spacing="4" columns={{ base: '1', md: '4' }}>
        <Input type={"file"} onChange={handleImage} p={1} />
        <Input
          type="text"
          value={form.name}
          onChange={e=>setForm({...form,name:e.target.value})}
          isRequired
          placeholder="Enter Your Name"
        />
        <Input
          type="text"
          value={form.designation}
          onChange={e => setForm({ ...form, designation: e.target.value })}
          placeholder="Enter Designation"
          isRequired
        />
        <Input
          type="number"
          isRequired
          value={form.contact}
          onChange={e => setForm({ ...form, contact: e.target.value })}
          placeholder="Enter Contact Number"
        />
      </SimpleGrid>
      <Textarea
        value={form.description}
        isRequired
        onChange={e => setForm({ ...form, description: e.target.value })}
        placeholder="Describe Yourself"
        rows="3"
      />
      <SimpleGrid w="100%" spacing="3" columns={{ base: '1', md: '4' }}>
        <Input
          type="email"
          isRequired
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Enter Your Email-ID"
        />
        <Input
          value={form.add1}
          isRequired
          onChange={e => setForm({ ...form, add1: e.target.value })}
          placeholder="Address Line 1"
        />
        <Input
          value={form.add2}
          isRequired
          onChange={e => setForm({ ...form, add2: e.target.value })}
          placeholder="Address Line 2"
        />
        <Input
          value={form.pin}
          isRequired
          onChange={e => setForm({ ...form, pin: e.target.value })}
          placeholder="PIN CODE"
          type="number"
        />
      </SimpleGrid>
    </>
  );
}
