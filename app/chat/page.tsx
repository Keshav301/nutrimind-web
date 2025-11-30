"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";

export default function ChatPage() {
    const [activeChat, setActiveChat] = useState(0);

    const contacts = [
        { id: 0, name: "Sarah Jenkins", role: "Yoga Trainer", lastMsg: "Great session today! Remember to stretch.", time: "10:30 AM", unread: 2, online: true, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=100&h=100&fit=crop" },
        { id: 1, name: "Mike Ross", role: "Strength Coach", lastMsg: "Let's increase the weights next week.", time: "Yesterday", unread: 0, online: false, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop" },
        { id: 2, name: "Emily Chen", role: "Nutritionist", lastMsg: "Here is your updated meal plan.", time: "Tue", unread: 0, online: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    ];

    const messages = [
        { id: 1, sender: "Sarah Jenkins", text: "Hi! How are you feeling after yesterday's session?", time: "10:00 AM", isMe: false },
        { id: 2, sender: "Me", text: "Feeling great! A bit sore but good.", time: "10:05 AM", isMe: true },
        { id: 3, sender: "Sarah Jenkins", text: "That's normal! Make sure to drink plenty of water.", time: "10:06 AM", isMe: false },
        { id: 4, sender: "Sarah Jenkins", text: "Great session today! Remember to stretch.", time: "10:30 AM", isMe: false },
    ];

    return (
        <div className="h-screen bg-black text-white pt-20 pb-4 px-4 md:px-8 flex gap-6">

            {/* Sidebar - Contacts */}
            <div className="w-full md:w-80 lg:w-96 flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-zinc-800 space-y-4">
                    <h2 className="text-xl font-bold">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                            placeholder="Search chats..."
                            className="pl-10 bg-black border-zinc-800 text-white placeholder:text-gray-500 h-10"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setActiveChat(contact.id)}
                            className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-zinc-800/50 transition-colors ${activeChat === contact.id ? 'bg-zinc-800/80' : ''}`}
                        >
                            <div className="relative">
                                <img src={contact.image} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                                {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></div>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-semibold truncate">{contact.name}</h3>
                                    <span className="text-xs text-gray-500">{contact.time}</span>
                                </div>
                                <p className="text-sm text-gray-400 truncate">{contact.lastMsg}</p>
                            </div>
                            {contact.unread > 0 && (
                                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                                    {contact.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="hidden md:flex flex-1 flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

                {/* Chat Header */}
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img src={contacts[activeChat].image} alt={contacts[activeChat].name} className="w-10 h-10 rounded-full object-cover" />
                            {contacts[activeChat].online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-zinc-900"></div>}
                        </div>
                        <div>
                            <h3 className="font-bold">{contacts[activeChat].name}</h3>
                            <p className="text-xs text-green-500">{contacts[activeChat].role}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-zinc-800">
                            <Phone className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-zinc-800">
                            <Video className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-zinc-800">
                            <MoreVertical className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/20">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${msg.isMe ? 'bg-green-600 text-white rounded-br-none' : 'bg-zinc-800 text-gray-200 rounded-bl-none'}`}>
                                <p>{msg.text}</p>
                                <span className={`text-[10px] block text-right mt-1 ${msg.isMe ? 'text-green-200' : 'text-gray-400'}`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-zinc-800 bg-zinc-900">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-zinc-800">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <div className="flex-1 relative">
                            <Input
                                placeholder="Type a message..."
                                className="bg-black border-zinc-800 text-white placeholder:text-gray-500 pr-10"
                            />
                            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white h-8 w-8">
                                <Smile className="h-5 w-5" />
                            </Button>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full h-10 w-10 p-0 flex items-center justify-center">
                            <Send className="h-5 w-5 ml-0.5" />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
