import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box maxW='lg' borderRadius='lg' bg="white" overflow='hidden'>
      <VStack>
        <Image src={imageSrc} borderRadius='lg' w='100%'/>
          <Box color='black' alignItems='start'p="3">
            <Heading as="h5" size='sm'>{title}</Heading>
            <Text pt="3" pb="3" color='gray'fontSize='sm'>{description}</Text>
            <HStack>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Box> 
        </VStack>
    </Box>
  );
};

export default Card;
