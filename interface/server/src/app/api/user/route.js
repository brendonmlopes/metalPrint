import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

async function getUsers() {
  let db = new PrismaClient();
  const users = await db.user.findMany();
  return users;
}

export async function GET() {
  const data = await getUsers()

  return NextResponse.json(
    {
      ok:true,
      data:data
    },
    {
      headers:{
        "Access-Control-Allow-Origin"  : "*",
        "Access-Control-Allow-Methods" : 'GET,OPTIONS',
        "Access-Control-Allow-Headers" : "Content-Type",
      }
  }
  )
}  

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
