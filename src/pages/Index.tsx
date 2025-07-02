import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { SourcePanel } from "@/components/SourcePanel";
import { ChatInterface } from "@/components/ChatInterface";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <Sidebar />
        <div className="flex-1 flex">
          <Tabs defaultValue="overview" className="flex-1 flex flex-col">
            <div className="border-b px-4">
              <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="overview" className="flex-1 m-0">
              <MainContent />
            </TabsContent>
            <TabsContent value="chat" className="flex-1 m-0">
              <ChatInterface />
            </TabsContent>
          </Tabs>
        </div>
        <SourcePanel />
      </div>
    </div>
  );
};

export default Index;
