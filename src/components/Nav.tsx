import { Box, Button, Flex } from '@radix-ui/themes';
import { useNavigate } from '@tanstack/react-router';
import { isAuthenticated, useLogout } from '../hooks/useAuthentication';

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    useLogout();
    navigate({ to: '/' });
  };
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
      {isAuthenticated() && (
        <Box>
          <Button onClick={handleLogout}>Logout</Button>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;
