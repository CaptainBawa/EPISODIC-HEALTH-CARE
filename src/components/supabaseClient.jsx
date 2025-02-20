import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pvqcajkgishmohkaiume.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2cWNhamtnaXNobW9oa2FpdW1lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTk3MDEyNSwiZXhwIjoyMDU1NTQ2MTI1fQ.9vcv08FnKWD6zXwgqTEhJ14M2KvbFB6OSQAJMiM4J9Y';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
