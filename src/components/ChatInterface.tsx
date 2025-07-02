import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Sparkles, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  Bot,
  User,
  FileText,
  Mic
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const messages = [
  {
    id: 1,
    type: "user",
    content: "Can you summarize the key findings from the AI ethics research paper?"
  },
  {
    id: 2,
    type: "assistant",
    content: "Based on the AI ethics research paper in your sources, here are the key findings:\n\n1. **Transparency Requirements**: The paper emphasizes the need for explainable AI systems, particularly in high-stakes decision-making scenarios.\n\n2. **Bias Mitigation**: Several strategies are outlined for reducing algorithmic bias, including diverse training data and regular auditing.\n\n3. **Human Oversight**: The importance of maintaining human control and responsibility in AI systems is highlighted throughout.\n\n4. **Privacy Protection**: Strong recommendations for privacy-preserving techniques in AI development and deployment.",
    sources: ["Research Paper on AI Ethics"]
  },
  {
    id: 3,
    type: "user",
    content: "What specific bias mitigation strategies are mentioned?"
  },
  {
    id: 4,
    type: "assistant",
    content: "The research paper outlines several specific bias mitigation strategies:\n\n**Data-level approaches:**\n- Diverse and representative training datasets\n- Data augmentation techniques to balance underrepresented groups\n- Careful data preprocessing and cleaning\n\n**Algorithm-level approaches:**\n- Fairness constraints during model training\n- Adversarial debiasing techniques\n- Multi-task learning with fairness objectives\n\n**Post-processing approaches:**\n- Threshold optimization for different demographic groups\n- Calibration adjustments\n- Regular bias auditing and monitoring",
    sources: ["Research Paper on AI Ethics"]
  }
];

const suggestedQuestions = [
  "Generate a podcast about this research",
  "Create a summary table",
  "What are the main conclusions?",
  "Find related quotes"
];

export const ChatInterface = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle sending message
      setInputValue("");
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Chat with your sources</h3>
        </div>
        <Badge variant="secondary" className="text-xs">
          4 sources loaded
        </Badge>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback>
                  {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="rounded-lg bg-card p-3 shadow-sm">
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  {message.sources && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.sources.map((source, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <FileText className="h-3 w-3 mr-1" />
                          {source}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {message.type === "assistant" && (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <ThumbsUp className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <ThumbsDown className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground">Try asking:</h4>
          <div className="grid grid-cols-1 gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3"
                onClick={() => setInputValue(question)}
              >
                <Sparkles className="h-3 w-3 mr-2 flex-shrink-0" />
                <span className="text-xs">{question}</span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about your sources..."
              className="pr-12"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 h-6 w-6 p-0"
            >
              <Mic className="h-3 w-3" />
            </Button>
          </div>
          <Button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="px-3"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};