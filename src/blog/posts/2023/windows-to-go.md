---
date: 2023-04-26
title: 'How to create a Windows to Go USB'
category: Tutorial
tags: windows, tools
---

Instructions for making a Windows to Go USB drive

---

## Prerequisites

### Hardware

- A reliable USB flash drive or external hard drive. The faster the drive, the snappier the Windows to Go installation will feel. I personally use a [Samsung T7](https://a.co/d/2L0Uz0J); I'm a big fan of Samsung's drives.

### Software

- [Rufus](https://github.com/pbatard/rufus/releases/download/v4.0/rufus-4.0.exe): For creating the bootable USB drive
- [Windows 11 ISO](https://www.microsoft.com/en-in/software-download/windows11): To create the Windows To Go installation

Download Rufus and the Windows 11 ISO above. Start Rufus and proceed

## Step by Step Directions

<iframe src="https://scribehow.com/embed/Using_Rufus_to_Make_a_Windows_To_Go_Drive__PI0p7O1dRbKLwhQ5EPqu6g?as=scrollable&skipIntro=true&removeLogo=true" width="640" height="640" allowfullscreen frameborder="0"></iframe>

## Drivers [Links here](../../../reference/drivers/2023)

- Intel Chipset
- Intel RST
- Intel Graphics
- Intel Wifi

## Hardware

- You won't be able to see internal drives until you run the Intel RST driver on some computers.

## Notes

- I use Pro for my Windows version so Bitlocker tools are available.
- Windows To Go will reboot during initial setup; in order to continue be sure to catch it and change the boot sequence to the external drive.
- I like to use a different wallpaper for my WindowsToGo installs to make it easier.  
  [Windows 365](/images/wallpapers/windows365wallpaper.jpg)
