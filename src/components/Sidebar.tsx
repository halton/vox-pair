import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Link, 
  Video, 
  Upload,
  Star,
  Clock,
  Archive,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const notebooks = [
  {
    id: 1,
    name: "Research Project Alpha",
    sources: 8,
    lastModified: "2 hours ago",
    starred: true
  },
  {
    id: 2,
    name: "Marketing Analysis",
    sources: 5,
    lastModified: "1 day ago",
    starred: false
  },
  {
    id: 3,
    name: "Product Strategy 2024",
    sources: 12,
    lastModified: "3 days ago",
    starred: true
  }
];

export const Sidebar = () => {
  const [selectedNotebook, setSelectedNotebook] = useState<number | null>(1);

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/20">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Notebooks</h2>
        <Button size="sm" className="h-8 w-8 p-0">
          <Upload className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2">
          {notebooks.map((notebook) => (
            <div
              key={notebook.id}
              className={cn(
                "group flex cursor-pointer flex-col rounded-lg border p-3 transition-colors hover:bg-accent",
                selectedNotebook === notebook.id && "bg-accent"
              )}
              onClick={() => setSelectedNotebook(notebook.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium truncate">{notebook.name}</span>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                  {notebook.starred && <Star className="h-3 w-3 fill-current text-yellow-500" />}
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{notebook.sources} sources</span>
                <span>{notebook.lastModified}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <div className="space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Star className="mr-2 h-4 w-4" />
            Starred
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Clock className="mr-2 h-4 w-4" />
            Recent
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </Button>
        </div>
      </div>
    </div>
  );
};