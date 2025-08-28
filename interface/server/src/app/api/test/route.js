import {NextResponse} from 'next/server';

export async function GET() {
  const data = [
    {1: 'Data 1'},
    {2: 'Data 2'},
    {3: 'Data 3'},
    {4: 'Data 4'},
  ]

  return NextResponse.json({ok:true,message:"Testing api"})
  
}
