@echo off
echo =================================================
echo   MEMULAI 10 NODE E-VOTING (FULL NETWORK)
echo   JANGAN TUTUP JENDELA YANG MUNCUL
echo =================================================

:: Masuk ke folder kerja
cd /d "C:\Users\62812\OneDrive\Dokumen\tugas mercu\tugas mercu semester 7\CAPSTONE\evoting-chain"

:: Setting Enode Node 1 (Bootnode)
:: Pastikan enode ini MASIH SAMA dengan yang Anda dapatkan dari Node 1 sebelumnya
set BOOTNODE=enode://f0a6d3ceb8ca60fda1faf2a496de8e7a2514758cbe9366aadb3d6f10fd07270e379dacd25057c1b9184f0f28d11e8cd0246f321631f170d864ae9f9173818ff3@127.0.0.1:30303

:: 1. JALANKAN NODE 1 (MINER & BOOTNODE)
:: Catatan: Saya set authrpc.port ke 8601 agar aman dari bentrok
echo Menyalakan Node 1 (Miner)...
start "NODE 1 (MINER)" cmd /k geth --datadir node1 --port 30303 --http --http.port 8545 --http.corsdomain "*" --http.api "admin,eth,miner,net,txpool,personal,web3" --authrpc.port 8601 --networkid 12345 --unlock "0xD170E75a3cA5e7D5Bda6FC54564755a2fca347c4" --password password.txt --allow-insecure-unlock --mine --miner.etherbase "0xD170E75a3cA5e7D5Bda6FC54564755a2fca347c4" console

:: Tunggu 5 detik agar Node 1 siap
timeout /t 5

:: 2. JALANKAN NODE 2
echo Menyalakan Node 2...
start "NODE 2" geth --datadir node2 --port 30304 --http --http.port 8546 --authrpc.port 8602 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth2 console

:: 3. JALANKAN NODE 3
echo Menyalakan Node 3...
start "NODE 3" geth --datadir node3 --port 30305 --http --http.port 8547 --authrpc.port 8603 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth3 console

:: 4. JALANKAN NODE 4
echo Menyalakan Node 4...
start "NODE 4" geth --datadir node4 --port 30306 --http --http.port 8548 --authrpc.port 8604 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth4 console

:: 5. JALANKAN NODE 5
echo Menyalakan Node 5...
start "NODE 5" geth --datadir node5 --port 30307 --http --http.port 8549 --authrpc.port 8605 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth5 console

:: 6. JALANKAN NODE 6
echo Menyalakan Node 6...
start "NODE 6" geth --datadir node6 --port 30308 --http --http.port 8550 --authrpc.port 8606 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth6 console

:: 7. JALANKAN NODE 7
echo Menyalakan Node 7...
start "NODE 7" geth --datadir node7 --port 30309 --http --http.port 8551 --authrpc.port 8607 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth7 console

:: 8. JALANKAN NODE 8
echo Menyalakan Node 8...
start "NODE 8" geth --datadir node8 --port 30310 --http --http.port 8552 --authrpc.port 8608 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth8 console

:: 9. JALANKAN NODE 9
echo Menyalakan Node 9...
start "NODE 9" geth --datadir node9 --port 30311 --http --http.port 8553 --authrpc.port 8609 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth9 console

:: 10. JALANKAN NODE 10
echo Menyalakan Node 10...
start "NODE 10" geth --datadir node10 --port 30312 --http --http.port 8554 --authrpc.port 8610 --networkid 12345 --bootnodes %BOOTNODE% --ipcpath geth10 console

echo.
echo SEMUA 10 NODE SUDAH DINYALAKAN!
echo Silakan cek 'admin.peers' di console Node 1 untuk melihat koneksi.
pause