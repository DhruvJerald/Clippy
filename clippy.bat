@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "clippy" cmd /k node index.js
timeout /t 2 /nobreak >nul
start "" http://localhost:3000