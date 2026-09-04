// import 'react-native-url-polyfill/auto';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rctivisdnuvylhoepzgh.supabase.co';
const supabaseKey = 'sb_publishable_fcajWZjxxyGxCVH6UzzzLQ_gkiUB1Cl';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      // storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);