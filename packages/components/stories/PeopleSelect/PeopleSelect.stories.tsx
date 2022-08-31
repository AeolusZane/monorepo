import { ComponentStory, ComponentMeta } from "@storybook/react";
import PeopleSelect from ".";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { rest } from "msw";
export default {
  title: "Business/PeopleSelect",
  component: PeopleSelect,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools />
      </>
    ),
  ],
} as ComponentMeta<typeof PeopleSelect>;

const Template: ComponentStory<typeof PeopleSelect> = (args) => {
  return <PeopleSelect />;
};

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [
      rest.get("/people", (req, res, ctx) => {
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", value: 1 },
              { name: "Arlene Mccoy", value: 2 },
              { name: "Devon Webb", value: 3 },
              { name: "Tom Cook", value: 4 },
              { name: "Tanya Fox", value: 5 },
              { name: "Hellen Schmidt", value: 6 },
            ],
          })
        );
      }),
    ],
  },
};
