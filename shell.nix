# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/2a35f66.tar.gz";
      sha256 = "1ac01hyvniiwrwgqlvmx76dxc7aqg71nx3d05d0dc35lbyjq7acf";
    }
  )
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox jre ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
