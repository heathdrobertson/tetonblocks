with import <nixpkgs> {};
# with pkgs;

stdenv.mkDerivation {
  name = "reactapp";

  buildInputs = [python37 nodejs git];
  shellHook = ''
  '';
}

/*
    npx i create-react-app app
    npm i truffle create-react-app ganache-cli web3
    @openzeppelin/contracts web3 webpack webpack-dev-server @truffle/hdwallet-provider
*/
