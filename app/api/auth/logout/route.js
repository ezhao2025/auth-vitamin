import { supabase } from '../../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { error } = await supabase.auth.signOut()

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
  return NextResponse.json({ message: 'Logged out' }, { status: 200 })
}