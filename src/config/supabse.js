// import { createClient } from '@supabase/supabase-js'
const {createClient} =  require('@supabase/supabase-js');

console.log(process.env.REACT_APP_ANON);
console.log(process.env.REACT_APP_URL);

async function getdata() {
    const supabase = createClient("https://oamskkvtiaukoicxpkke.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hbXNra3Z0aWF1a29pY3hwa2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1OTcyODcsImV4cCI6MjAxOTE3MzI4N30.4RJkmbMIyuQnQq1d0Tl03oXJK6_XoNmkVLqtnhL2uSE");
    const {data,error} = await supabase
    .from('pproducts')
    .select();

    if (data) {
        console.log(data);
    }
    if (error) {
        console.log(error);
    }
}

getdata();

// export default supabase