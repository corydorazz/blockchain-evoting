@echo off
title NODE 1 (SEALER)
geth --datadir node1 --port 30301 --http --http.addr "0.0.0.0" --http.port 8545 --http.corsdomain "*" --http.api "admin,eth,miner,net,txpool,personal,web3,clique" --networkid 12345 --mine --miner.threads 1 --unlock 0 --password password.txt --allow-insecure-unlock