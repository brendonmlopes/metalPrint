import {NextResponse} from 'next/server';

const ORIGIN = 'http://192.168.88.49:3000'

export async function GET() {
  const data = [
    {1: 'Data 1'},
    {2: 'Data 2'},
    {3: 'Data 3'},
    {4: 'Data 4'},
  ]

  return NextResponse.json(
    {
      ok:true,
      data:data
    },
    {
      headers:{
        "Access-Control-Allow-Origin"  : ORIGIN,
        "Access-Control-Allow-Methods" : 'GET,OPTIONS',
        "Access-Control-Allow-Headers" : "Content-Type",
      }
  }
  )
  

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': ORIGIN,
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
}
