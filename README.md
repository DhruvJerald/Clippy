# 📎 Clippy

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
