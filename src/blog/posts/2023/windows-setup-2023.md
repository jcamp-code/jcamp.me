---
date: 2023-05-30
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
- Sign in with MS account
- Signout of OneDrive, Disable OneDrive startup
- Install and sync Dropbox
- Configure taskbar as desired
- Relocate user folders (Documents, Pictures, Music, Video) to desired locations
- Install browsers, password tools

```ps
winget install --id=Google.Chrome -e  ; winget install --id=Brave.Brave -e  ; winget install --id=Mozilla.Firefox -e  ; winget install --id=AgileBits.1Password -e
```

- Disable core isolation (my preference)
- Install security software
- Install [O&O Shutup](https://www.oo-software.com/en/shutup10) to configure Windows as desired
- [Node JS](https://nodejs.org/en)
  To allow node JS scripts to run, they have to be allowed
  ```ps
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted
  ```
- [PowerShell 7](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3)

## Preferred Utilities

- [Defender UI](https://www.defenderui.com)
- [O&O Shutup](https://www.oo-software.com/en/shutup10)
- [Total Commander](https://www.ghisler.com)
