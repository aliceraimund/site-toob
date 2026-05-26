import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}

function NotFoundComponent() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "#0D0D0D" }}>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <h1 style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, color: "#FF0000" }}>404</h1>
        <h2 style={{ marginTop: 16, fontSize: 22, fontWeight: 700 }}>Página não encontrada</h2>
        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn-primary">Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}
