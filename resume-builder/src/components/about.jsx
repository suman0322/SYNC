import { StarIcon,ArrowRightIcon } from "@chakra-ui/icons";
import { Text,Image,VStack,Button, Center,useColorModeValue} from "@chakra-ui/react";
import EskillsLogo from '../images/logoLight.png'

export default function About(){
    return (
    <Center bg={useColorModeValue("gray.50","gray.900")} minH={"100vh"}>
        <VStack w={{base:"90%",lg:"30%"}} p={6} border={"2px solid"} bg="gray.800" borderColor="purple.400" rounded={8} spacing={6}>
            <Text as={"strong"} fontSize={25} color="purple.200">
                CVBuilder.io
            </Text>
            <Text color={"white"} fontWeight={500} fontSize={18}>
                A Free Online Resume Builder
            </Text>
            <a rel="noreferrer" href="https://www.eskillsweb.com/" target={"_blank"}><Image src={EskillsLogo} /></a>
            <Button w={"90%"} onClick={() => window.open("https://www.linkedin.com/in/snskar125","_blank")} size={"lg"} rightIcon={<ArrowRightIcon/>} bg="orange.200" color={"black"}>
            Sanskar Sharma
            </Button>
            <Text color={"white"} fontWeight={500} fontSize={18}>
                Guided by
            </Text>
            <Button w={"90%"} onClick={() => window.open("https://www.linkedin.com/in/imran-khan-11597618b","_blank")} size={"lg"} leftIcon={<StarIcon/>} bg="blue.200" color={"black"}>
            Imran Khan
            </Button>
        </VStack>
      </Center>
    )
}