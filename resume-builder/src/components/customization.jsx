import {Text,Box,VStack,HStack,Divider,Image,List,ListItem,ListIcon,Button, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React,{ useContext } from "react";
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react'
import AppContext from "../context/AppContext";
import ReactToPrint from "react-to-print";
import { CheckCircleIcon, StarIcon, ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { AiFillPrinter } from "react-icons/ai";
import { BiHome, BiMailSend, BiPhone } from "react-icons/bi";
import StyleControllers from "./styleControllers";
import { useState } from "react";
import { useEffect } from "react";

export default function Customize(){

    const { style, savedForm } = useContext(AppContext)

    useEffect(()=>{
        switch (style.listIcon) {
            case "CheckCircleIcon":
                setListIcon(CheckCircleIcon) 
                break;
            case "StarIcon" :
                setListIcon(StarIcon)
                break;
            case "ArrowRightIcon":
                setListIcon(ArrowRightIcon)
                break;
            case "ChevronRightIcon":
                setListIcon(ChevronRightIcon)
                break;
            default:
                setListIcon(CheckCircleIcon)
                break;
        }

    },[style])

    const myPage = React.useRef();
    const [listIcon,setListIcon] = useState(CheckCircleIcon)

    return(
        <Box p={2} rounded={8} w="100%">
            <Alert status='warning' display={{base:"flex",md:"none"}} justifyContent="center" w="100%" my={2}>
            <AlertIcon/>
                Larger Screen recommended for Customization .
            </Alert>
        <SimpleGrid spacing={3} columns={{base:1,lg:2}} w="100%" mx="auto">
        <Box overflow={"scroll"} bg="white" border="1px solid black">
        <Box minW={"700px"} ref={myPage} p={5} bg={style.pageColor}>
        <Box p={3} w={"100%"}>
        <HStack mb={3}>
        <VStack w={"65%"} spacing={0} pr={5}>
        <HStack spacing={0} w={"100%"}>
        <Image display={savedForm.showImage} borderRadius={style.photoRadius} w={20} h={20} border={"2px solid"} borderColor={`${style.theme}.200`} src={savedForm.profilePhoto} />
        <VStack pl={savedForm.showImage==="none" ? 0 : 3 } w={"100%"} spacing={0}>
        <Text color={`${style.theme}.700`} fontFamily={style.nameFont} m={0} p={0} fontSize={style.nameSize+"px"} w="100%" fontWeight={"bold"}>{savedForm.name}</Text>
        <Text color={"black"} fontWeight={600} p={0} m={0} fontFamily={style.designationFont} fontSize={style.designationSize+"px"} w="100%">{savedForm.designation}</Text>
        </VStack>
        </HStack>
        <Text color={"black"} fontWeight={500} fontFamily={style.descriptionFont} fontSize={style.descriptionSize} w="100%">{savedForm.description}</Text>
        </VStack>
        <List fontWeight={500} spacing={2} fontSize={style.contactSize} fontFamily={style.contactFont} color={"black"}>
            <ListItem> <ListIcon fontSize={parseInt(style.contactSize)+4} as={BiPhone} /> {savedForm.contact} </ListItem>
            <ListItem> <ListIcon fontSize={parseInt(style.contactSize)+4} as={BiMailSend} /> {savedForm.email} </ListItem>
            <ListItem> <ListIcon fontSize={parseInt(style.contactSize)+4} as={BiHome} /> {savedForm.add1}, {savedForm.add2}, {savedForm.pin} </ListItem>
        </List>
        </HStack>
        <Divider bg={`${style.theme}.700`} />
        {savedForm.experience.length ? <Box>
        <Text  fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Experience</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.experience.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon}/>
                        <span style={{fontWeight:"bold"}} >{item.duration}</span> : {item.employer} - {item.title}
                    </ListItem>
                ))
            }
        </List>
        </Box> : null}
        <Box w="100%" mt={4}>
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Education</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.education.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        <span style={{fontWeight:"bold"}} >{item.school}</span> : {item.title} - {item.year}
                    </ListItem>
                ))
            }
        </List>
        </Box>
        <HStack mt={4} justify="space-between" spacing={4}>
        <Box w="50%">
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Skills</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.skills.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        {item.name}
                    </ListItem>
                ))
            }
        </List>
        </Box>
        {savedForm.certificates.length ? <Box w="50%">
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Certificates</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.certificates.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        {item.name}
                    </ListItem>
                ))
            }
        </List>
        </Box> : null}
        </HStack>
        {savedForm.projects.length ? <Box w="100%" mt={4}>
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Projects</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.projects.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        <span style={{ fontWeight: "bold" }} >{item.proName}</span> : {item.proTech} - {item.proDes}
                    </ListItem>
                ))
            }
        </List>
        </Box> : null}
        <HStack mt={4} justify="space-between" spacing={4}>
        <Box w="50%">
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Soft Skills</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.softSkills.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        {item.name}
                    </ListItem>
                ))
            }
        </List>
        </Box>
        <Box w="50%">
        <Text fontWeight={"bold"} color={`${style.theme}.700`}
        fontFamily={style.listHeadFont}
         my={2} fontSize={style.listHeadSize}>Languages</Text>
        <List fontWeight={500} spacing={2} w="100%" bg={`${style.theme}.50`} rounded={5} p={3}>
            {
                savedForm.languages.map(item=>(
                    <ListItem fontFamily={style.listItemFont} fontSize={style.listItemSize} color={"black"}>
                        <ListIcon color={`${style.theme}.500`} as={listIcon} />
                        {item.name}
                    </ListItem>
                ))
            }
        </List>
        </Box>
        </HStack>
        </Box>
        </Box>
        </Box>
        <Box>
        <Box position={"sticky"} top={20} rounded={5} border={"2px"} bg={useColorModeValue("blue.50","gray.800")} borderColor="purple.300" p={4}>
        <VStack w={"100%"} spacing={4}>
             <ReactToPrint
                trigger={() => <Button size={"lg"} rounded={3} w="100%" colorScheme="purple" rightIcon={<AiFillPrinter/>}>Download Resume</Button>}
                content={() => myPage.current}
                />
        <Alert status='info' w="100%" justifyContent={"center"}>
            <AlertIcon />
                Resume not Updated ? Submit Form to see the changes .
            </Alert>
        <StyleControllers/>
        </VStack>
        </Box>
        </Box>
        </SimpleGrid>
        </Box>
    )
}