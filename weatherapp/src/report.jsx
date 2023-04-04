import React from "react";
import { GoLocation } from "react-icons/go";
import { WiHumidity, WiStrongWind ,WiThermometer } from "react-icons/wi";
import Seasons from "./seasons.jpg";
import { Center, Image, VStack, HStack, Text } from "@chakra-ui/react";
export default function Report({ currReport }) {
  if (currReport === "") {
    return (
      <Center w="100%">
        <VStack w="100%">
          <Text
            align="center"
            w="100%"
            bgGradient="linear(to-br, blue.200, blue.300)"
            p="4"
            color="gray.900"
          >
            Enter the Location and Submit to See the Weather Report
          </Text>
          <Image
            boxShadow="dark-lg"
            rounded="lg"
            h="33vh"
            src={Seasons}
          ></Image>
        </VStack>
      </Center>
    );
  } else {
    return (
      <Center w="100%">
        <VStack w="100%" spacing="3">
          <VStack spacing="0" w="100%">
            <Text
              align="center"
              w="100%"
              bgGradient="linear(to-br, green.200, green.500)"
              p="4"
              fontWeight="500"
              color="gray.900"
            >
              Weather Report Generated
            </Text>
            <HStack
              as="u"
              w="100%"
              p="2"
              color="white"
              bgGradient="linear(to-br, orange.400, orange.600)"
              justify="center"
              spacing="3%"
            >
              <GoLocation color="light" />
              <Text fontWeight="700">
                {currReport.name} , {currReport.sys.country}
              </Text>
            </HStack>
            <Text
              fontWeight={700}
              bgGradient="linear(to-br, gray.500, blue.700)"
              p="3"
              w="100%"
              align="center"
              fontSize="lg"
            >
              {currReport.weather[
                currReport.weather.length - 1
              ].description.toUpperCase()}
            </Text>
          </VStack>
          <HStack columns="3" justify="center" spacing={{base:"2",md:"4"}} h="20vh" w="100%">
            <Center w={{base:"30%",md:"25%"}}>
              <VStack
                boxShadow="dark-lg"
                p="2"
                rounded="lg"
                color="orange.200"
                w="100%"
              >
                <WiThermometer size="60" />
                <Text fontWeight="700">{currReport.main.temp} °C</Text>
              </VStack>
            </Center>
            <Center w={{base:"30%",md:"25%"}}>
              <VStack
                boxShadow="dark-lg"
                p="2"
                rounded="lg"
                w="100%"
                color="blue.100"
              >
                <WiHumidity size="60" />
                <Text fontWeight="700">{currReport.main.humidity}%</Text>
              </VStack>
            </Center>
            <Center  w={{base:"30%",md:"25%"}}>
              <VStack
                boxShadow="dark-lg"
                p="2"
                rounded="lg"
                w="100%"
                color="red.200"
              >
                <WiStrongWind size="60" />
                <Text fontWeight="700">{currReport.wind.speed} m/S</Text>
              </VStack>
            </Center>
          </HStack>
        </VStack>
      </Center>
    );
  }
}
