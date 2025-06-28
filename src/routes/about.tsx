import { Box, Flex, Heading } from '@radix-ui/themes';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <Flex justify="center" align="center" height="85vh">
      <Box>
        <Heading size="8">About Page</Heading>
      </Box>
    </Flex>
  );
}
