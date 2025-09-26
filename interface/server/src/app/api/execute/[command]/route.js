import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function OPTIONS() {
  return NextResponse.json({
    message: "CORS preflight",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST", // Allowed methods
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
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
  }
  return NextResponse.json({
    message: "Command executed",
    command: input.command,
  });
}
