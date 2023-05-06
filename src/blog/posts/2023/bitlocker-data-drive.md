---
date: 2023-05-06
title: 'How to get Hardware Bitlocker on a data drive with a Samsung Pro 980 SSD'
category: Tutorial
tags: windows, tools, samsung, ssd
---

# How to get Hardware Bitlocker on a data drive with a Samsung Pro 980 SSD

So I was successful in using the [instructions](./samsung-bitlocker.md) to get my system drive to be hardware encrypted with BitLocker, but I wanted a second 980 Pro to act as a data drive to also be hardware encrypted.

I had hoped it would be simple since it wasn't a system drive. I tried all manner of things to get the data drive to enable hardware encryption but everything returned an error that said it was not supported by the drive.

The only way I could get it to work was this process:

## Get both drives encrypted

- Start with the drive you want to be the data drive
- Follow the steps in my [boot drive instructions](./samsung-bitlocker.md). But do not finish setup once you have that drive encrypted.
- Be sure you have the recovery key enabled and saved.
- Take this drive out, put it into a secondary slot and put the other 980 Pro into the primary slot.
- Do the process one more time for this drive, but you can finish setup.  
  You will probably see two Windows installations on bootup.

## To tidy up the system

To get the data drive cleared and to get rid of the second Windows boot option, I did this:

- Once you're in Windows, double check the [group policy is set to allow hardware encryption](./enabling-bitlocker-hardware-policy.md)
- Turn off BitLocker on the data drive (it will reenable OK)

```ps
manage-bde -off d:
```

Note that I got a BSOD at this point, but when Windows rebooted, BitLocker was disabled.

- Format the D: drive
- Turn on BitLocker on the data drive

```ps
manage-bde -on d: -fet Hardware
```

- I then used `msconfig` in the Boot tab to delete the non-existent Windows installation (it showed as `D:\Windows`)

At this point, you should have both drives fully encrypted with Hardware encryption

## Prequisites

- [Windows to Go USB Drive](./windows-to-go.md)
- [Samsung Secure Erase USB Drive](./samsung-secure-erase.md)
- [Windows 11 Installation USB Drive](https://www.microsoft.com/software-download/windows11)
