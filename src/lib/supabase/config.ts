import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          display_name: string
          role: 'admin' | 'judge' | 'clerk' | 'lawyer'
          court_id: string
          phone: string
          department: string
          position: string
          avatar_url: string | null
          language: 'en' | 'tn'
          notifications_enabled: boolean
          theme: 'light' | 'dark'
          created_at: string
          updated_at: string
          last_login: string
          is_active: boolean
        }
        Insert: {
          id?: string
          email: string
          display_name: string
          role: 'admin' | 'judge' | 'clerk' | 'lawyer'
          court_id: string
          phone: string
          department: string
          position: string
          avatar_url?: string | null
          language?: 'en' | 'tn'
          notifications_enabled?: boolean
          theme?: 'light' | 'dark'
          created_at?: string
          updated_at?: string
          last_login?: string
          is_active?: boolean
        }
        Update: {
          id?: string
          email?: string
          display_name?: string
          role?: 'admin' | 'judge' | 'clerk' | 'lawyer'
          court_id?: string
          phone?: string
          department?: string
          position?: string
          avatar_url?: string | null
          language?: 'en' | 'tn'
          notifications_enabled?: boolean
          theme?: 'light' | 'dark'
          created_at?: string
          updated_at?: string
          last_login?: string
          is_active?: boolean
        }
      }
      cases: {
        Row: {
          id: string
          case_number: string
          title: string
          case_type: 'civil' | 'criminal' | 'family' | 'commercial'
          status: 'pending' | 'active' | 'closed' | 'appealed'
          description: string
          filing_date: string
          court_id: string
          judge_id: string
          clerk_id: string
          tags: string[]
          priority: 'low' | 'medium' | 'high' | 'urgent'
          created_at: string
          updated_at: string
          created_by: string
        }
        Insert: {
          id?: string
          case_number: string
          title: string
          case_type: 'civil' | 'criminal' | 'family' | 'commercial'
          status?: 'pending' | 'active' | 'closed' | 'appealed'
          description: string
          filing_date: string
          court_id: string
          judge_id: string
          clerk_id: string
          tags?: string[]
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          created_by: string
        }
        Update: {
          id?: string
          case_number?: string
          title?: string
          case_type?: 'civil' | 'criminal' | 'family' | 'commercial'
          status?: 'pending' | 'active' | 'closed' | 'appealed'
          description?: string
          filing_date?: string
          court_id?: string
          judge_id?: string
          clerk_id?: string
          tags?: string[]
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          created_by?: string
        }
      }
      documents: {
        Row: {
          id: string
          case_id: string
          title: string
          type: 'filing' | 'evidence' | 'order' | 'judgment'
          file_type: 'pdf' | 'doc' | 'image' | 'text'
          original_file_name: string
          file_size: number
          mime_type: string
          storage_path: string
          ocr_text: string | null
          ocr_confidence: number | null
          ocr_language: 'en' | 'tn' | null
          uploaded_by: string
          uploaded_at: string
          last_modified: string
          version: number
          is_public: boolean
          access_list: string[]
          created_at: string
        }
        Insert: {
          id?: string
          case_id: string
          title: string
          type: 'filing' | 'evidence' | 'order' | 'judgment'
          file_type: 'pdf' | 'doc' | 'image' | 'text'
          original_file_name: string
          file_size: number
          mime_type: string
          storage_path: string
          ocr_text?: string | null
          ocr_confidence?: number | null
          ocr_language?: 'en' | 'tn' | null
          uploaded_by: string
          uploaded_at?: string
          last_modified?: string
          version?: number
          is_public?: boolean
          access_list?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          case_id?: string
          title?: string
          type?: 'filing' | 'evidence' | 'order' | 'judgment'
          file_type?: 'pdf' | 'doc' | 'image' | 'text'
          original_file_name?: string
          file_size?: number
          mime_type?: string
          storage_path?: string
          ocr_text?: string | null
          ocr_confidence?: number | null
          ocr_language?: 'en' | 'tn' | null
          uploaded_by?: string
          uploaded_at?: string
          last_modified?: string
          version?: number
          is_public?: boolean
          access_list?: string[]
          created_at?: string
        }
      }
      hearings: {
        Row: {
          id: string
          case_id: string
          title: string
          type: 'initial' | 'trial' | 'sentencing' | 'appeal'
          scheduled_date: string
          duration: number
          courtroom: string
          judge_id: string
          status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
          actual_start_time: string | null
          actual_end_time: string | null
          notes: string
          notifications_sent: boolean
          reminder_sent: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          case_id: string
          title: string
          type: 'initial' | 'trial' | 'sentencing' | 'appeal'
          scheduled_date: string
          duration: number
          courtroom: string
          judge_id: string
          status?: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
          actual_start_time?: string | null
          actual_end_time?: string | null
          notes?: string
          notifications_sent?: boolean
          reminder_sent?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          case_id?: string
          title?: string
          type?: 'initial' | 'trial' | 'sentencing' | 'appeal'
          scheduled_date?: string
          duration?: number
          courtroom?: string
          judge_id?: string
          status?: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
          actual_start_time?: string | null
          actual_end_time?: string | null
          notes?: string
          notifications_sent?: boolean
          reminder_sent?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      courts: {
        Row: {
          id: string
          name: string
          type: 'magistrate' | 'high' | 'supreme' | 'specialized'
          address: string
          city: string
          district: string
          latitude: number | null
          longitude: number | null
          phone: string
          email: string
          fax: string | null
          operating_hours: string
          holidays: string[]
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: 'magistrate' | 'high' | 'supreme' | 'specialized'
          address: string
          city: string
          district: string
          latitude?: number | null
          longitude?: number | null
          phone: string
          email: string
          fax?: string | null
          operating_hours: string
          holidays?: string[]
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'magistrate' | 'high' | 'supreme' | 'specialized'
          address?: string
          city?: string
          district?: string
          latitude?: number | null
          longitude?: number | null
          phone?: string
          email?: string
          fax?: string | null
          operating_hours?: string
          holidays?: string[]
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 