import Connection from "@/components/ui/Connection";

export default function Network() {
  return (
    <div className="flex flex-col items-center gap-6 py-12 bg-linkedin-background min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Your Connections</h1>
      <Connection
        name="Natalie Do"
        title="Product Designer"
        avatar="/ExampleProfile2.jpg"
        mutual="Thea Smith"
      />
      <Connection
        name="Thea Smith"
        title="Software Engineer"
        avatar="/ExampleProfile3.jpg"
        mutual="Natalie Do"
      />
    </div>
  );
}