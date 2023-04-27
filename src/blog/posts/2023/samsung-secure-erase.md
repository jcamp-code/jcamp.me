---
date: 2023-04-27
title: 'Create a Samsung Secure Erase USB Drive'
category: Tutorial
tags: windows, tools, usb
---

Instructions for making a bootable Samsung Secure Erase drive

---

Note that this tool only works on Samsung SSDs; it will not work with other manufacturers.

## Prerequisites

### Hardware

- A reliable USB flash drive. This can be any old USB drive; speed and size are both pretty much irrelevant.

### Software

- [Rufus](https://github.com/pbatard/rufus/releases/download/v4.0/rufus-4.0.exe): For creating the bootable USB drive
- [Samsung Secure Erase ISO](https://downloads.jcamp.me/SAMSUNGBOOT.iso)

Note that this image can be created by the [Samsung Magician](https://semiconductor.samsung.com/consumer-storage/support/tools/) software but I struggled to get it to work consistently, so I made myself an ISO of the drive.

Download Rufus and the Samsung ISO above. Start Rufus and proceed

## Step by Step Directions

<iframe src="https://scribehow.com/embed/Creating_Samsung_Secure_Erase_USB_Drive__5bCalPJmScCdlR8sLYJQIg?as=scrollable&skipIntro=true&removeLogo=true" width="640" height="640" allowfullscreen frameborder="0"></iframe>

## Keys to Successful Booting

### Secure Boot

You must temporarily turn off Secure Boot for this to work. This option is found in the BIOS setup of your computer.

### SATA/ACHI Modew Required

In addition, you must set the drive option to SATA/ACHI rather than RAID in order for the bootable drive to see the SSD.

# Troubleshooting

### "Error: bad shim signature"

This means you did not turn off Secure Boot in your BIOS. In my experience, some computers require a hard reset once this option is off to make it go into effect.
