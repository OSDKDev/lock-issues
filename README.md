Lock an issue. By default, it uses the context's but can be targetted.

### Targetting context's issue:
```yml
- name: Lock issue
  uses: OSDKDev/lock-issues@v1.2
```
#### Sample file: `.github/workflows/lock-closed-issues.yml`
```yml
name: Lock closed issue

on:
  issues:
    types: [closed]

jobs:
  lock:
    name: Lock
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
    - name: Lock issue
      uses: OSDKDev/lock-issues@v1.2
```
As simple as that!

### Targetting a specific issue / repo:
```yml
- name: Lock issue
  uses: OSDKDev/lock-issues@v1.2
  with:
    repo-token: {Token with permissions over the target repository / issue}
    owner-name: {Owner Name - Optional - Default: Context's Repository Owner}
    repo-name: {Repository Name - Optional - Default: Context's Repository}
    issue-number: {Issue Number - Optional - Default: Context's Issue}
```
