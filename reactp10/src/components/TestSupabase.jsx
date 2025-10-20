import { supabase } from '../supbaseClient'

export default function TestSupabase() {
    async function testInsert() {
        const { data, error } = await supabase
            .from('users')
            .insert([{ name: 'TestUser', pin_code: '1234' }])

    console.log('data:', data)
    console.log('error:', error)
    }

    return <button onClick={testInsert}>Test Supabase</button>
}