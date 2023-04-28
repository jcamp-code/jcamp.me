# Bypassing Internet Requirement for Windows Installation

The process for this changed with Windows 11 22H2 release. I think its much easier now.

- Install Windows and get to the step that says `Let's connect you to a network` (after the region selection)

- `Shift-F10` to open a command line

- Type the following below and it will restart the computer and allow the process to continue without internet (that's a letter `O` on the end not a zero)

  ```psh
  OOBE/BYPASSNRO
  ```

- Once you get back to the `Let's connect you to a network` screen, you'll see a new option to `Continue with Limited Setup`
