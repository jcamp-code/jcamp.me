---
date: 2023-04-28
title: 'How to use Hardware Bitlocker with a Samsung Pro 980 SSD'
category: Tutorial
tags: windows, tools, samsung, ssd
---

# How to use Hardware Bitlocker with a Samsung Pro 980 SSD.

## Prequisites

- [Windows to Go USB Drive](./windows-to-go.md)
- [Samsung Secure Erase USB Drive](./samsung-secure-erase.md)
- [Windows 11 Installation USB Drive](https://www.microsoft.com/software-download/windows11)

## Step by Step Directions

### Hardware

Take a picture of its label before installation in case you need the 32 character PSID
Install the Samsung 980 Pro into your computer. I'm using an Alienware x14 to do this.

### Boot into Windows to Go

- Install [Samsung SSD Magician](https://semiconductor.samsung.com/consumer-storage/support/tools/) if you haven't already.

- Run Magician and select the 980 Pro at the top

- If you've used this drive before and want to do a full reset, use the PSID Revert tool to do that. You will need the 32 character code from the SSD's label. This will reset the SSD's encryption status to `Ready to enable`

- Click the Encrypted Drive at the bottom left to switch to that tab.

- If it's not already ready enable, click the option set that.

- Shutdown Windows To Go, remove the WTG USB drive

### Go to BIOS Setup

- Disable Secure Boot
- Be sure SATA/NVMe is set to ACHI

### Boot into Samsung Secure Erase

- Type `y` to accept the warning
- Choose the SSD to erase
- Confirm the secure erase

If you get `Error 29`, you need to use the PSID Revert tool in Magician to completely reset the drive to factory settings

### Go to BIOS Setup

- Enabled Secure Boot again, if desired.
- Look under the Security section in the BIOS for an option called “Disable Block SID”.
  It will probably be set to Disabled. Set it to Enabled.
- My Alienware x14 has an option called `PPI Bypass for SED Block ID Command` I set that to enabled.
- If you're not sure or you want to be certain, use the next section to set it inside of Windows To Go

### (Optional, if necessary) Boot into Windows To Go

I prefer to do this route as I'm more certain the correct option is being set to allow the hardware encryption to proceed. Some of my computers have a BIOS setting and some do not.

If you're certain your BIOS setting works as expected, than you can skip this section and go to the next one.

- **Start Powershell or Terminal as Admin**

- Execute this command

```ps
$tpm = gwmi -n root\cimv2\security\microsofttpm win32_tpm
```

- Then, execute this command

```ps
$tpm.SetPhysicalPresenceRequest(97)
```

- Shutdown WTG and insert the installation USB drive.

On the next boot the POST screen may alert you that "a configuration change was requested issuing a Block SID command". This is a good sign! My computer required me to push F10 to accept this change.

### Windows Setup

- Go through setup until you get to the screen where setup asks `Is this the right country or region?`

- Press `Shift-F10` to open a command prompt

- Confirm the status of the c: drive: \

  ```ps
  manage-bde -status c:
  ```

  It should say `Protection Off`

- Enable protection with hardware encryption \

  ```ps
  manage-bde -on c: -fet Hardware
  ```

- You need to reboot to get past the hardware encryption test \
  `shutdown /r /t 0`

- When you get back to the `Is this the right country or region?` screen, press `Shift-F10` again to open the command line.

- `manage-bde -status c:` now shows

  ```
  Conversion Status: Fully Encrypted
  Encryption Method: Hardware Encryption
  Protection Status: Protection On
  ```

### What about group policy?

By doing it here, you get Bitlocker set up prior to the group policy prohibiting hardware enceyption goes into effect.

You would still need to enable the group policy to enable bitlocker hardware encryption for any other drives you might add after installation though.

To keep this page shorter, I've moved that process to a separate page \
[Enable Bitlocker Hardware Encryption in Group Policy](./enabling-bitlocker-hardware-policy.md)

::: warning
Because we did this with the command line, the BitLocker UI will not store a recovery password in your Microsoft account. \
Please be sure to create one and store it somewhere safely
:::

## Create your recovery password

```ps
manage-bde -protectors -add C: -RecoveryPassword
```

This command will create and display the Recovery Password for you. Be sure to save it.

- If you want to store the recovery in your Microsoft account, you can now do this in the UI after running that command.

### (Optional) Re-enable SID Block

If the POST screen told you that the disable "Block SID" config is persistent (and not for just one boot), then you need enable it again. Either in the BIOS (where you disabled it before) or via Windows Powershell. The computers I've tested this on all said one boot.

```ps
$tpm = gwmi -n root\cimv2\security\microsofttpm win32_tpm
```

```ps
$tpm.SetPhysicalPresenceRequest(96)
```

### Credits

[Frederick Odental](https://blog.odenthal.cc/how-to-enable-bitlocker-hw-encryption-with-modern-ssds-e-g-samsung-980-pro/) with some changes to enable during setup
