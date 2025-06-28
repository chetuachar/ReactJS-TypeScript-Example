import { Box, Flex, Heading } from '@radix-ui/themes';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <Flex justify="center" height="85vh" align="center">
      <Box>
        <Heading size="8">Home Page</Heading>
      </Box>
    </Flex>
  );
}
