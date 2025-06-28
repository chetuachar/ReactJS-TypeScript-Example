import { Box, Button, Flex, Heading } from '@radix-ui/themes';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/contact')({
  component: ContactComponent,
});

function ContactComponent() {
  const navigate = useNavigate();
  return (
    <Flex justify="center" align="center" height="80vh">
      <Box>
        <Flex direction="column" align="center" gap="2">
          <Heading size="8">Contacts Page</Heading>
          <Button onClick={() => navigate({ to: '/about' })}>About</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
