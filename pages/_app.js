import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLayout from "@/src/components/AppLayout";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}
