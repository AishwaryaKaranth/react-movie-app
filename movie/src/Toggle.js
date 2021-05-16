import React from "react";
import { Flex } from "@chakra-ui/core";
export default function Toggle() {
  return (
    <div>
      <Flex
        align="center"
        justify="center"
        height="100vh"
        direction="column"
      ><Button size="lg">Toggle Mode</Button></Flex>
    </div>
  );
}