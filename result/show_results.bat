@echo off
title BLOCKCHAIN VOTING BULLETIN BOARD

cd /d %~dp0

geth attach http://127.0.0.1:8545 < load_bulletin.txt

pause
