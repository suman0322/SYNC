import {Divider,SimpleGrid,Input,Text,Select,Center} from "@chakra-ui/react"
import { useContext } from "react"
import AppContext from "../context/AppContext" 
import ThemeController from "./themeController"
import FontList from "../fonts/FontList"

export default function StyleControllers(){
    const {style,setStyle,savedForm} = useContext(AppContext)

    return (<>
            <ThemeController/>
            <Divider/>
        <SimpleGrid w={"100%"} display={savedForm.showImage==="none" ? "none" : "grid"} spacing={3} columns={{ base: 1, md: 2 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>Photo Border Radius</Text></Center>
            <Input type={"range"} min={0} max={50} value={style.photoRadius} onChange={e=>setStyle({...style,photoRadius:e.target.value})} />
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>Name</Text></Center>
                <Select w="100%" value={style.nameFont} onChange={e=>setStyle({...style,nameFont:e.target.value})}>
                {
                    FontList.map(item=>(<option value={item.value}>{item.name}</option>))
                }
                </Select>
                <Input type={"range"} value={style.nameSize} onChange={(e)=>setStyle({...style,nameSize:e.target.value})} w="100%" min={30} max={50} />
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>Designation</Text></Center>
            <Select w="100%" value={style.designationFont} onChange={e => setStyle({ ...style, designationFont: e.target.value })}>
                {
                    FontList.map(item => (<option value={item.value}>{item.name}</option>))
                }
            </Select>
            <Input type={"range"} value={style.designationSize} onChange={(e) => setStyle({ ...style, designationSize: e.target.value })} w="100%" min={15} max={30} />
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>Description</Text></Center>
            <Select w="100%" value={style.descriptionFont} onChange={e => setStyle({ ...style, descriptionFont: e.target.value })}>
                {
                    FontList.map(item => (<option value={item.value}>{item.name}</option>))
                }
            </Select>
            <Input type={"range"} value={style.descriptionSize} onChange={(e) => setStyle({ ...style, descriptionSize: e.target.value })} w="100%" min={10} max={30} />
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>Contact</Text></Center>
            <Select w="100%" value={style.contactFont} onChange={e => setStyle({ ...style, contactFont: e.target.value })}>
                {
                    FontList.map(item => (<option value={item.value}>{item.name}</option>))
                }
            </Select>
            <Input type={"range"} value={style.contactSize} onChange={(e) => setStyle({ ...style, contactSize: e.target.value })} w="100%" min={10} max={30} />
        </SimpleGrid>
        <Divider />
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 2 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>List Icon Style</Text></Center>
            <Select w="100%" value={style.listIcon} onChange={e=>setStyle({...style,listIcon:e.target.value})}>
                <option value={"CheckCircleIcon"} >Check Circle</option>
                <option value={"StarIcon"} >Star</option>
                <option value={"ArrowRightIcon"} >Double Arrow</option>
                <option value={"ChevronRightIcon"} >Chevron Right</option>
            </Select>
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>List Heading</Text></Center>
            <Select w="100%" value={style.listHeadFont} onChange={e => setStyle({ ...style, listHeadFont: e.target.value })}>
                {
                    FontList.map(item => (<option value={item.value}>{item.name}</option>))
                }
            </Select>
            <Input type={"range"} value={style.listHeadSize} onChange={(e) => setStyle({ ...style, listHeadSize: e.target.value })} w="100%" min={15} max={30} />
        </SimpleGrid>
        <SimpleGrid w={"100%"} spacing={3} columns={{ base: 1, md: 3 }}>
            <Center bg={`${style.theme}.200`} rounded={5}><Text color={`${style.theme}.700`} as={"strong"} w="100%" textAlign={"center"}>List Item</Text></Center>
            <Select w="100%" value={style.listItemFont} onChange={e => setStyle({ ...style, listItemFont: e.target.value })}>
                {
                    FontList.map(item => (<option value={item.value}>{item.name}</option>))
                }
            </Select>
            <Input type={"range"} value={style.listItemSize} onChange={(e) => setStyle({ ...style, listItemSize: e.target.value })} w="100%" min={15} max={30} />
        </SimpleGrid>
            </>
    )
}