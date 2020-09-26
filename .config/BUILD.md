# Building A Dapp From Start To Hosting

## NixOS Project Container Setup

- Build the container, replace `<container-name>`.
```bash
docker run --volumes-from=nix -it \
    -v $(pwd):/home \
    -w /home \
    --name teton \
    -p 3000:3000 \
    nixos/nix nix-shell /home/.config/build.nix
```
    - Ports: (9005 - firebase), (3000 - React App)
- Second & third terminal windows.
```bash
docker exec -it <container-name> nix-shell /home/.config/build.nix
```
- Gloabl installs 
```bash 
npm i -g firebase-tools 
npm i -g serve
```
- Project setup.
```bash
npm install
```

## NixOS NeoVim IDE Container Setup
- [NVIM.md](NVIM.md)
## DAPP
**Ethereum Solidity OpenZeplin Truffle Drizzle**

## Infura
**API**

## Reposten
**Test Net**

## IPFS
**Hosting & File Storage**

## Domain
