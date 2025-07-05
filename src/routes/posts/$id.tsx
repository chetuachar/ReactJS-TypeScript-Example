import { Card, Flex, Text } from '@radix-ui/themes';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$id')({
  component: PostByIdComponent,
  loader: async ({ params }) => {
    const id = params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw Error();
    }
    const data = await response.json();
    return { data };
  },
  pendingComponent: () => (
    <>
      <Flex justify="center" height="85vh" align="center">
        <Text as="div" size="2" weight="bold">
          Loading...
        </Text>
      </Flex>
    </>
  ),
  errorComponent: () => <>Error while loading...!</>,
});

function PostByIdComponent() {
  const { data } = useLoaderData({ from: '/posts/$id' });
  return (
    <Flex justify="center" height="85vh" align="center">
      <Card variant="surface" style={{ padding: '20px', width: '400px' }}>
        <Text as="div" size="6" weight="bold">
          {data.title}
        </Text>
        <Text as="div" color="gray" size="4">
          {data.body}
        </Text>
      </Card>
    </Flex>
  );
}
