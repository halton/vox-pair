import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Headphones, 
  BarChart3, 
  Quote,
  Share,
  Download,
  Play,
  Sparkles
} from "lucide-react";

const insights = [
  {
    id: 1,
    type: "summary",
    title: "Key Insights Summary",
    content: "Your sources reveal 5 major themes about AI ethics, including transparency requirements, bias mitigation strategies, and human oversight principles.",
    icon: FileText,
    color: "bg-blue-50 text-blue-700"
  },
  {
    id: 2,
    type: "podcast",
    title: "AI-Generated Podcast",
    content: "15-minute discussion covering the main points from your research papers and articles",
    icon: Headphones,
    color: "bg-purple-50 text-purple-700",
    duration: "15:32"
  },
  {
    id: 3,
    type: "analysis",
    title: "Trend Analysis",
    content: "Comparative analysis showing how AI ethics perspectives have evolved based on your sources",
    icon: BarChart3,
    color: "bg-green-50 text-green-700"
  }
];

const quickActions = [
  { icon: Quote, label: "Find Quotes", description: "Extract relevant quotes from sources" },
  { icon: FileText, label: "Create Study Guide", description: "Generate a comprehensive study guide" },
  { icon: BarChart3, label: "Compare Sources", description: "Side-by-side source comparison" },
  { icon: Share, label: "Share Notebook", description: "Create a shareable link" }
];

export const MainContent = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Research Project Alpha</h1>
            <p className="text-muted-foreground">AI Ethics Research Collection</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>

        {/* AI-Generated Insights */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">AI-Generated Insights</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Card key={insight.id} className="cursor-pointer transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${insight.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">{insight.content}</p>
                    <div className="flex items-center justify-between">
                      {insight.duration && (
                        <Badge variant="secondary" className="text-xs">
                          {insight.duration}
                        </Badge>
                      )}
                      <Button size="sm" variant="outline" className="ml-auto">
                        {insight.type === "podcast" ? (
                          <>
                            <Play className="h-3 w-3 mr-1" />
                            Play
                          </>
                        ) : (
                          "View"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="cursor-pointer transition-colors hover:bg-accent">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{action.label}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Generated podcast from 4 sources</span>
                  <span className="text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Added new document: "AI Guidelines.pdf"</span>
                  <span className="text-muted-foreground">1 day ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Created summary of key insights</span>
                  <span className="text-muted-foreground">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};