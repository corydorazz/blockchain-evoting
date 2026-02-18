@echo off
cls

echo ==================================
echo  BLOCKCHAIN VOTING BULLETIN BOARD
echo ==================================
echo.

REM pindah dulu ke folder ini
cd /d "%~dp0"

REM attach ke geth + preload JS
geth attach http://127.0.0.1:8545 --preload "%cd%\show_results.js"

echo.
echo ==================================
echo  SELESAI - TEKAN TOMBOL APA SAJA
echo ==================================
pause
