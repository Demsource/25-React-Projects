import { Container, Flex, Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Main from "./main/Main";
import theme from "./theme";
import GlobalState from "./context/Context";

const ExpenseTrackerApp = () => {
  return (
    <GlobalState>
      <ChakraProvider theme={theme}>
        <Container
          bg={"#f8fafd"}
          maxW={"Container.3xl"}
          height={"100vh"}
          p={"0"}
        >
          <Flex height="full">
            <Box height="full" flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
              <Main />
            </Box>
          </Flex>
        </Container>
      </ChakraProvider>
    </GlobalState>
  );
};

export default ExpenseTrackerApp;
