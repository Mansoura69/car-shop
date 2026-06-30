@echo off
setlocal

cd /d "%~dp0"

echo Demarrage du site CarShop...
echo.
echo Adresse locale : http://localhost:5173/
echo.

start "" "http://localhost:5173/"
npm.cmd run dev -- --host 127.0.0.1 --port 5173

pause
