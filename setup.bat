@echo off
echo MENYIAPKAN 10 NODE...

for /L %%i in (1,1,10) do (
   echo Init Node %%i...
   geth init --datadir node%%i genesis.json
)
echo SELESAI.
pause