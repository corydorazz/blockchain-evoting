@echo off
echo =================================================
echo   INISIALISASI NODE 6 SAMPAI 10
echo =================================================

:: Masuk ke folder kerja (Sesuai path Anda)
cd /d "C:\Users\62812\OneDrive\Dokumen\tugas mercu\tugas mercu semester 7\CAPSTONE\evoting-chain"

:: Cek apakah genesis.json ada
if not exist genesis.json (
    echo ERROR: File genesis.json tidak ditemukan!
    echo Pastikan file ini disimpan di folder evoting-chain.
    pause
    exit
)

echo.
echo --- Menyiapkan NODE 6 ---
if not exist node6 md node6
geth --datadir node6 init genesis.json

echo.
echo --- Menyiapkan NODE 7 ---
if not exist node7 md node7
geth --datadir node7 init genesis.json

echo.
echo --- Menyiapkan NODE 8 ---
if not exist node8 md node8
geth --datadir node8 init genesis.json

echo.
echo --- Menyiapkan NODE 9 ---
if not exist node9 md node9
geth --datadir node9 init genesis.json

echo.
echo --- Menyiapkan NODE 10 ---
if not exist node10 md node10
geth --datadir node10 init genesis.json

echo.
echo =================================================
echo   SUKSES! Node 6-10 siap digunakan.
echo =================================================
pause