# Customizing Windows Installation

By default, the Windows installation tool will use the edition of Windows that it finds a key for in your BIOS and never present the option to choose which edition you want to install.

This is a problem, if for example, your computer has a home license but you want to install Windows Pro.

Fortunately, there is a way to setup the installation drive to present the choice to you regardless.

Create a file named `ei.cfg` and save it to to the `\sources` folder of your Windows installation USB drive.

Contents should be:

```
[Channel]
_Default
[VL]
0
```
