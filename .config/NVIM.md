# Neovim IDE
**Neovim IDE in a NixOS Docker Container**

```bash
docker run --volumes-from=nix -it \
    -v $(pwd):/home -w /home \
    --name teton-ide \
    nixos/nix nix-shell /home/.config/nvim.nix
```

- Starts an interactive session in a NixOS Docker container.
- The `nix` [data container] is used to shared persistent /nix for all Nix containers.
- Creates a volume wich mounts the current working directory to the `/app` directory in the container.
    - You will need to setup a new Neovim Container for each project.

NOTES
---
- F3 Key Runs Autoformat on selected range of lines.
- Gitgutter shows changes on left gutter of open file. + = new, - = modified.

LINKS
---

- [ToiletHill.io]  Additional Notes & Info
- [NixOS]
- [NixOS Vim Wiki]
- [Neovim]
- [Setting Up Vim Post]
- [Docker]

[ToiletHill.io]: http://toilethill.io/notes/
[NixOS Vim Wiki]: https://nixos.wiki/wiki/Vim
[Setting Up Vim Post]: https://www.mpscholten.de/nixos/2016/04/11/setting-up-vim-on-nixos.html
[NixOS]: https://nixos.org/
[Neovim]: https://neovim.io/
[Docker]: https://hub.docker.com/r/nixos/nix/
[Markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[data container]: http://toilethill.io/notes/nixos#setting-up-a-docker-data-container
