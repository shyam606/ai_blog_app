import tools from "@/utils/tools.json";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Top AI Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <CardHeader>
              <Image
                src={tool.image}
                alt={tool.name}
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <CardTitle className="text-xl text-center">{tool.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center mb-4">
                {tool.shortDescription}
              </p>
              <div className="text-center">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="read_more_button">
                  Read more →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
