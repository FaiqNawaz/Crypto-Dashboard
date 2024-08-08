import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={IoMdMenu}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={HiOutlineUserCircle} fontSize="28px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
