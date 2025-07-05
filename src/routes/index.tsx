import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate();
  return (
    <Flex justify="center" height="85vh" align="center">
      <Box>
        <Heading size="8">Home Page</Heading>
        <Flex direction="column" gap="4" pt="4">
          <Text>To see post click on posts</Text>
          <Button onClick={() => navigate({ to: '/posts' })}>Posts</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
