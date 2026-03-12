import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
type Message = {
  role: "user" | "assistant";
  content: string;
};
const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/kutify-chat`;
const DemoChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const streamChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
      },
      body: JSON.stringify({
        messages: userMessages
      })
    });
    if (!resp.ok || !resp.body) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || "midagi läks valesti");
    }
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";
    while (true) {
      const {
        done,
        value
      } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, {
        stream: true
      });
      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => i === prev.length - 1 ? {
                  ...m,
                  content: assistantContent
                } : m);
              }
              return [...prev, {
                role: "assistant",
                content: assistantContent
              }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const userMsg: Message = {
      role: "user",
      content: inputValue
    };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);
    try {
      await streamChat(newMessages);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "sry midagi läks katki... proovi uuesti äkki idk"
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return;
};
export default DemoChat;