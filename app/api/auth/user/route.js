import { supabase } from '../../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
  return NextResponse.json({ data }, { status: 200 })
}