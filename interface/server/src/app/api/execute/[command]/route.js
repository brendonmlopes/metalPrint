import { NextResponse } from 'next/server';
import { exec } from 'child_process';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
};

export async function OPTIONS() {
  return new Response(null,{status:204,headers:corsHeaders})
}

export async function GET(_req,{ params }) {
  let input = await params;

  if(input.command){
    console.log("Command received:", input.command);
  }
  if(input.command === "parser"){
    exec("cd ../../;./parser -v;cd interface/server;",(error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command:\n${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Command stderr:\n${stderr}`);
        return;
      }
      console.log(`Command stdout:\n${stdout}`);
    });
    return NextResponse.json({
      message: "Command executed",
      command: input.command,
    });
  } else {
    console.log("No valid command received.");
    return NextResponse.json({
      message: "No valid command received",
      command: input.command,
    });
  } 
}


