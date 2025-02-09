import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ircdlccezmlsytstxozo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyY2RsY2Nlem1sc3l0c3R4b3pvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODI2MTYzNywiZXhwIjoyMDUzODM3NjM3fQ.Mlj1SJ_KKT91b-mK1gTo2g6NqcGCB1hNAyJLot6JoRQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
