import React, { useState } from 'react';
import { PlusCircle, MessageSquare, Trash2, Edit2, Check, X as XIcon } from 'lucide-react';
import { ChatSession } from '../types';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onNewChat: () => void;
  onSelectSession: (sessionId: string) => void;
  onDeleteSession: (sessionId: string) => void;
  onRenameSession: (sessionId: string, newTitle: string) => void;
  onCloseMobile?: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  sessions,
  currentSessionId,
  onNewChat,
  onSelectSession,
  onDeleteSession,
  onRenameSession,
  onCloseMobile,
}) => {
  const { user } = useAuth();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDeleteSession = async (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this chat?')) {
      if (user?.id) {
        await supabase
          .from('messages')
          .delete()
          .eq('session_id', sessionId)
          .eq('user_id', user.id);
      }
      onDeleteSession(sessionId);
    }
  };

  const startEditing = (sessionId: string, currentTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(sessionId);
    setEditTitle(currentTitle || 'New Chat');
  };

  const handleRename = async (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (editTitle.trim()) {
      onRenameSession(sessionId, editTitle.trim());
    }
    setEditingId(null);
  };

  const cancelEditing = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(null);
  };

  return (
    <div className="w-64 bg-gray-800 h-screen flex flex-col relative">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h2 className="text-white font-semibold text-lg">Chats</h2>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 transition-colors text-sm sm:text-base"
        >
          <PlusCircle className="w-5 h-5" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {sessions.map((session) => (
          <div
            key={session.id}
            onClick={() => onSelectSession(session.id)}
            className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 cursor-pointer hover:bg-gray-700 transition-colors ${
              currentSessionId === session.id ? 'bg-gray-700' : ''
            }`}
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              {editingId === session.id ? (
                <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full bg-gray-600 text-white px-2 py-1 rounded text-sm"
                    autoFocus
                  />
                  <button
                    onClick={(e) => handleRename(session.id, e)}
                    className="text-green-400 hover:text-green-300 flex-shrink-0"
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="text-red-400 hover:text-red-300 flex-shrink-0"
                  >
                    <XIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs sm:text-sm text-gray-200 truncate">
                    {session.title || session.last_message || 'New Chat'}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {new Date(session.created_at).toLocaleDateString()}
                  </p>
                </>
              )}
            </div>
            {editingId !== session.id && (
              <div className="flex gap-1 flex-shrink-0">
                <button
                  onClick={(e) => startEditing(session.id, session.title || '', e)}
                  className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                >
                  <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-blue-400" />
                </button>
                <button
                  onClick={(e) => handleDeleteSession(session.id, e)}
                  className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-red-400" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}