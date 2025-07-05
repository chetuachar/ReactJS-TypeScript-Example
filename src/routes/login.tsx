import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useLogin } from '../hooks/useAuthentication';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const handleSumit = () => {
    useLogin(username);
    navigate({ to: '/posts', replace: true });
  };
  return (
    <Flex justify="center" height="85vh" align="center">
      <Box>
        <Flex direction="column" gap="4" pt="4">
          <Text size="6" weight="bold">
            Login Page
          </Text>
          <TextField.Root
            placeholder="Enter username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={handleSumit}>Submit</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
