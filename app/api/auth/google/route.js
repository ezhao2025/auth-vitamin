import { supabase } from '../../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/callback`
    }
  })

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
  return NextResponse.redirect(data.url)
}