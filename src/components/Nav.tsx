import { Box, Button, Flex } from '@radix-ui/themes';
import { useNavigate } from '@tanstack/react-router';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Flex gap="4" justify="center" p="3">
      <Box>
        <Button onClick={() => navigate({ to: '/' })}>Home</Button>
      </Box>
      <Box>
        <Button onClick={() => navigate({ to: '/about' })}>About</Button>
      </Box>
      <Box>
        <Button onClick={() => navigate({ to: '/contact' })}>Contact</Button>
      </Box>
    </Flex>
  );
};

export default Nav;
