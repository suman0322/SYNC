import { Box,useRadio,useRadioGroup,SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import AppContext from "../context/AppContext"

// 1. Create a component that consumes the `useRadio` hook

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label' w="fit-content" mx={"auto"}>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='7px'
                rounded={"full"}
                bg={`${props.value}.600`}
                boxShadow='md'
                _checked={{
                    borderColor:useColorModeValue("blue.300","white")
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                p={7}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default function CheckBoxGroup() {
    const options = ['gray', 'purple', 'orange','blue','green','red']
    const {setStyle,style} = useContext(AppContext)

    function handleChange(data){
        setStyle({...style,theme:data})
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'themeComtroller',
        defaultValue: style.theme,
        onChange: handleChange,
    })

    const group = getRootProps()

    return (
        <SimpleGrid columns={{base:3,md:6}} p={3} bg={`${style.theme}.300`} rounded={10} w="100%" spacing={2} spacingY={5} {...group}>
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <RadioCard key={value} bg={value} {...radio}>
                    </RadioCard>
                )
            })}
        </SimpleGrid>
    )
}
