import { Box, Flex, Text } from '@radix-ui/themes';

const Footer = () => {
  return (
    <Flex justify="center">
      <Box>
        <Text as="p">
          Copyright © chetuachar.com 1996 - {new Date().getFullYear()}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
