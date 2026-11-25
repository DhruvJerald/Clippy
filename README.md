# 📎 Clippy

## DEMO


## What is it?
Clippy is a Fast, lightweight clipboard sharing webapp to quickly share text or files locally on the same network

## Why did i build it?
There isnt an simple solution to send text or files between your devices , for example if you wanted to send a video from your phone to your PC your only immediate options would be to 

1)**Whatsapp yourself** -- but file upload is slow and there is a 2GB limit and your video will be compressed 

2)**Google drive** -- is simply slow and uses your cloud storage

3)**Email yourself** -- besides being absurd it has attachment limits and anything past that becomes a google drive files

and Clippy aims to solve these problems.

## Features
 
1) **Real-time text sync** -- shared textarea updates instantly 

2) **File sharing** -- upload from any device, download or delete from any device

3) **Persistent** -- text and file list survive server restarts

4) **No login** -- open the URL and it works

5) **One-click start** -- double-click `start-clippy.bat` on Windows


## Tech Stack 

Runtime -- Node.js 

Server--Express 

Real-time--Socket.IO

Frontend--HTML + CSS + JS 

Text persistence--JSON file (`data/state.json`) 

## Installation
 
### Requirements
 
 [Node.js](https://nodejs.org) 
### Windows
 
1. Download the ZIP from the [releases page](../../releases) and unzip it
2. Double-click `start-clippy.bat`
The bat file installs dependencies on first run and starts the server and opens your browser automatically

## To open on phone
1. Run the server on your PC
2. Open a terminal and run `ipconfig` 
3. Find the **IPv4 address** — example `192.XXX.X.XX`
4. On your phone using the same Wi-Fi, open `http://192.168.1.10:3000`
