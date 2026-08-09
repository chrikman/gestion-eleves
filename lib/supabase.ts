import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Missing Supabase environment variables. ' +
    'Check eas.json env block or EAS secrets. ' +
    `URL=${supabaseUrl ? 'set' : 'MISSING'}, ` +
    `KEY=${supabaseAnonKey ? 'set' : 'MISSING'}`
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '', {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
