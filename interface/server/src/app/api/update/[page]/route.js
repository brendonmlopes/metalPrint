import { NextResponse } from 'next/server';
import { exec } from 'child_process';
const os = require("os");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
};

export async function OPTIONS() {
  return new Response(null,{status:204,headers:corsHeaders})
}

export async function GET(request, {params}) {
  const p = await params;
  const page = p.page;
  let output="";

  if( page==="Sensor" || page==="sensor" ){
    exec("cat ../../sensor.json",(error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command:\n${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Command stderr:\n${stderr}`);
        return;
      }
      output = stdout;
      console.log(`Command stdout:\n${stdout}`);
    });
    return NextResponse.json({
      message: "Sensors API",
    },{headers:corsHeaders});

  }else if( page==="Settings" || page==="settings" ){
    exec("cat ../../settings.json",(error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command:\n${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Command stderr:\n${stderr}`);
        return;
      }
      output = stdout;
      console.log(`Command stdout:\n${stdout}`);
    });
    return NextResponse.json({
      message: "Settings API",
    },{headers:corsHeaders});

  }else if( page==="Dashboard" || page==="dashboard" ){
    exec("cat ../../dashboard.json",(error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command:\n${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Command stderr:\n${stderr}`);
        return;
      }
      output = stdout;
      console.log(`Command stdout:\n${stdout}`);
    });
    return NextResponse.json({
      message: "Dashboard API",
    },{headers:corsHeaders});
  }
}
