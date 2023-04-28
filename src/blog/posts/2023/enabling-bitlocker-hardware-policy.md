---
date: 2023-04-28
title: 'Enabling BitLocker Hardware Encryption'
category: Tutorial
tags: windows, tools
---

# Enabling BitLocker Hardware Encryption

This is needed if you want to enable hardware encryption on applicable SSDs after the initial Windows setup.

If you don't want step by step, the policies to change are under:

`Computer Configuration -> Administrative Templates -> Windows Components -> BitLocker`

There, under `Fixed Data Drives` and `Operating System Drives` double click the `Configure use of hardware-based encryption` policy in each and enable it.

<iframe src="https://scribehow.com/embed/How_to_enable_BitLocker_Hardware_Encryption_Group_Policy__rqsXu-14ST6-7XfRXM8udg?as=scrollable&skipIntro=true&removeLogo=true" width="640" height="640" allowfullscreen frameborder="0"></iframe>
