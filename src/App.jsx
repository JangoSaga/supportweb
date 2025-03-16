import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import CustomerDash from "./pages/CustomerDash";
import SupportDash from "./pages/SupportDash";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles/GlobalStyles.css";
import { Toaster } from "react-hot-toast";
import SignUpCustomer from "./pages/SignUpCustomer";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Login />} />
            <Route path="/signup" element={<SignUpCustomer />} />
            <Route
              path="customer-dashboard"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <CustomerDash />
                </ProtectedRoute>
              }
            />
            <Route
              path="agent-dashboard"
              element={
                <ProtectedRoute allowedRoles={["agent"]}>
                  <SupportDash />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
            style: {
              background: "white",
              color: "black",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "white",
              color: "black",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
