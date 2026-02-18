@echo off
title LIVE BLOCKCHAIN VOTING BULLETIN BOARD

cd /d %~dp0

geth attach http://127.0.0.1:8545 --exec "loadScript('./bulletin_realtime.js')"

pause
