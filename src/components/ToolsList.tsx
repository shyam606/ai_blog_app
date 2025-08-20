"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function ToolsList({ tools }: { tools: any[] }) {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.shortDescription.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Top AI Tools</h1>

      {/* ✅ Search Bar with Clear Icon */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <Input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none active:outline-0 focus:ring-0 active:ring-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* ✅ Tools Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <Card
              key={tool.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <CardHeader>
                <Image
                  src={tool.image}
                  alt={`${tool.name} logo`}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                  loading="lazy"
                />
                <CardTitle className="text-xl text-center">
                  {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  {tool.shortDescription}
                </p>
                <div className="text-center">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="read_more_button"
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No tools found.
          </p>
        )}
      </div>
    </div>
  );
}
