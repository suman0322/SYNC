import { useState } from "react";
import Report from "./report";
import "./App.css";
import {
  Text,
  Center,
  HStack,
  Divider,
  VStack,
  Image,
  useToast,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import Logo from "./logoLight.png";
import { FaLeaf, FaSearchLocation } from "react-icons/fa";
function App() {
  const [location, setLocation] = useState("");
  const toast = useToast();
  const API_KEY = "ca6a309387eb6192f1b33043dc5df036";
  const [report, setReport] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (location === "") {
      toast({
        title: "Location can't be Empty",
        status: "error",
        duration: 1000,
      });
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.cod == "200") {
            setReport(data);
            toast({
              title: "Location Found",
              status: "success",
              duration: 1000,
            });
            setLocation("");
          } else {
            toast({
              title: "Location Not Found",
              status: "error",
              duration: 1000,
            });
          }
        });
    }
  }
  return (
    <>
      <Box w="100%" bg={{base:"gray.900",md:"gray.700"}} h="100vh">
        <Center pt="3vh" h="100vh">
          <VStack
            w={{ base: "90%", md: "32%" }}
            py={{ md: "5" }}
            bg={{ md: "gray.900" }}
            spacing="3vh"
            rounded="5"
            boxShadow={{md:"dark-lg"}}
            border={{ md: "1px solid gray" }}
          >
            <HStack
              w="100%"
              spacing={{ base: "4%", md: "2%" }}
              justify="center"
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                bgClip="text"
                bgGradient="linear(to-r, blue.100, green.300)"
                fontWeight="700"
                fontFamily="'Lobster Two', cursive"
              >
                Weather App
              </Text>
              <FaLeaf size="40px" color="lightgreen" />
            </HStack>
            <Center>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <HStack w="100%">
                  <Input
                    boxShadow="dark-lg"
                    size="lg"
                    w="70%"
                    color="gray.50"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    focusBorderColor="orange.200"
                    placeholder="Enter Location"
                    type="text"
                  />
                  <Button
                    boxShadow="dark-lg"
                    w="30%"
                    bg="orange.200"
                    size="lg"
                    color="gray.900"
                    leftIcon={<FaSearchLocation />}
                    type="submit"
                  >
                    Find
                  </Button>
                </HStack>
              </form>
            </Center>
            <Button
              colorScheme="red"
              boxShadow="dark-lg"
              onClick={() => {
                setReport("");
                toast({
                  title: "Report has been Reset",
                  status: "error",
                  duration: 1000,
                });
              }}
              w={{ base: "100%", md: "55%" }}
            >
              Reset Report
            </Button>
            <Center w="100%">
              <Report currReport={report} />
            </Center>
          </VStack>
        </Center>
      </Box>
    </>
  );
}

export default App;
