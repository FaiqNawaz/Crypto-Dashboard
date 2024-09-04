import React from "react";
import { CustomCard } from "../assets/Chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ tagText, text, imgUrl, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        borderRadius="full"
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
      >
        {tagText}
      </Tag>

      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
