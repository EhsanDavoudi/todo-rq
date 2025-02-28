import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {TaskProvider} from "./contexts/TaskContext.jsx";
import {UIProvider} from "./contexts/UIContext.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UIProvider>
      {/*<ReactQueryDevtools initialIsOpen={true} />*/}
    </QueryClientProvider>
  </StrictMode>
)
