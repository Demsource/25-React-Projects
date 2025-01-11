import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import { GlobalContext } from "../context/Context";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    allTransactions,
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl="5">
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color="blue.400"
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            bg={"blue.500"}
            color={"white"}
            ml="4"
            _hover={{ bg: "blue.300" }}
            onClick={onOpen}
          >
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDir={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
};

export default Main;
