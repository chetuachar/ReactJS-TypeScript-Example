import { Box, Flex } from '@radix-ui/themes';
import { Link } from '@tanstack/react-router';

const Nav = () => {
  return (
    <Flex gap="4" justify="center" p="3">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/about">About</Link>
      </Box>
      <Box>
        <Link to="/contact">Contact</Link>
      </Box>
    </Flex>
  );
};

export default Nav;
