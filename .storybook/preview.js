import "../packages/components/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { addDecorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false
    }
  }
});

addDecorator(stories => (
  <QueryClientProvider client={queryClient}>
    {stories()}
  </QueryClientProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'body',
    stylePreview: true,
  }
}