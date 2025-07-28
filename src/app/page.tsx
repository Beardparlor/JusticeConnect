import { Feature108Demo } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          JusticeConnect - Feature108 Component Demo
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          This is a showcase of the Feature108 component integrated with shadcn/ui
        </p>
      </div>
      <Feature108Demo />
    </main>
  );
} 