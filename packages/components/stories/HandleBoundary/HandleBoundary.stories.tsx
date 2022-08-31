import { ComponentMeta, Story } from "@storybook/react";
import { UseQueryResult } from "@tanstack/react-query";
import HandleBoundary, { HandleBoundaryProps } from ".";

export default {
  title: "Components/HandleBoundary",
  component: HandleBoundary,
} as ComponentMeta<typeof HandleBoundary>;

const Template: Story<HandleBoundaryProps<{ text: string }, unknown>> = (
  args
) => {
  return <HandleBoundary {...args} />;
};

export const Success = Template.bind({});

const code = `
const Demo = ()=>{
    const query = useQuery(["demo-cache-key"], () => axios.get("/path"));

    return (
      <HandleBoundary query={query}>
        {data=><div>{data.text}<div/>}
      <HandleBoundary/>
    );
}
`;

Success.args = {
  query: {
    isSuccess: true,
    isLoading: false,
    data: {
      text: "hello",
    },
    refetch: () => {
      console.log("refetch");
    },
  } as UseQueryResult<{ text: string }>,
  children: (data) => <div>{data.text}</div>,
};

Success.parameters = {
  docs: { source: { code } },
};
