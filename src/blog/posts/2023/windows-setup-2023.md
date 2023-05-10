---
date: 2023-05-07
title: 'How I like to setup a fresh Windows install'
category: Tutorial
tags: windows, setup
---

# How I like to setup a fresh Windows install

I regularly reinstall Windows and this page is help me remember the tips and tricks I like to have setup on a fresh Windows installation.

- Setup Windows with [Bitlocker](./samsung-bitlocker.md)
- Install all updates and [drivers](../../../reference/drivers/2023.md)
- Setup Windows Insiders, if desired
- I like all of my critical data under `C:\Data`
- Install and sync Dropbox
- Relocate user folders (Documents, Pictures, Music, Video) to desired locations
- Install browsers, password tools
- Install security software
- Install [O&O Shutup](https://www.oo-software.com/en/shutup10) to configure Windows as desired
- [Node JS](https://nodejs.org/en)
  To allow node JS scripts to run, they have to be allowed
  ```ps
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted
  ```
- PowerShell 7

## Preferred Utilities

- [O&O Shutup](https://www.oo-software.com/en/shutup10)
- [Total Commander](https://www.ghisler.com)

## Notes on AntiVirus

- - [BitDefender](https://www.bitdefender.com)
  - Note that BitDefender blocks Windows Hello by default; be sure enable access by Windows Services in the WebCam protection.
  - I also set in AntiVirus, Advanced Settings to disable scanning command line and scanning scripts
  - Ended up removing as the system just feels substantially slower with it
  - Really killed npm install
