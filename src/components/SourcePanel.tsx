import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FileText, 
  Link, 
  Video, 
  Upload,
  Plus,
  MoreVertical,
  ExternalLink
} from "lucide-react";

const sources = [
  {
    id: 1,
    type: "document",
    name: "Research Paper on AI Ethics",
    size: "2.4 MB",
    pages: 24,
    icon: FileText
  },
  {
    id: 2,
    type: "url",
    name: "TechCrunch Article: AI Trends 2024",
    url: "techcrunch.com",
    icon: Link
  },
  {
    id: 3,
    type: "video",
    name: "AI Conference Keynote",
    duration: "45:32",
    icon: Video
  },
  {
    id: 4,
    type: "document",
    name: "Company Guidelines.pdf",
    size: "1.8 MB",
    pages: 16,
    icon: FileText
  }
];

export const SourcePanel = () => {
  return (
    <div className="flex h-full w-80 flex-col border-l bg-muted/10">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold">Sources</h3>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-3">
          {sources.map((source) => {
            const Icon = source.icon;
            return (
              <Card key={source.id} className="group cursor-pointer transition-shadow hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{source.name}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          {source.type === "document" && (
                            <>
                              <span>{source.size}</span>
                              <span>•</span>
                              <span>{source.pages} pages</span>
                            </>
                          )}
                          {source.type === "url" && (
                            <div className="flex items-center space-x-1">
                              <span>{source.url}</span>
                              <ExternalLink className="h-3 w-3" />
                            </div>
                          )}
                          {source.type === "video" && (
                            <span>{source.duration}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-3">
                    <Badge variant="secondary" className="text-xs">
                      {source.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 p-4 border-2 border-dashed border-border rounded-lg text-center">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground mb-2">
            Drag and drop files here, or click to browse
          </p>
          <Button variant="outline" size="sm">
            Upload Files
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};