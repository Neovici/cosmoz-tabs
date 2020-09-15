# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/6152513.tar.gz";
      sha256 = "1gzwz9jvfcf0is6zma7qlgszkngfb2aa4kam0nhs0qnwb4nqn7mg";
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
