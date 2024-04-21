Lock an issue. By default, it uses the context's but can be targetted.

### Targetting context's issue:

    - name: Lock issue
      uses: OSDKDev/lock-issues@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
#### Sample file: `.github/workflows/lock-closed-issues.yml`
    name: Lock closed issue

    on: 
      issues:
        types: [closed]

    jobs:
      lock:
        name: Lock issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
        - name: Lock
          uses: OSDKDev/lock-issues@v1
          with:
            repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
As simple as that!

### Targetting a specific issue / repo:

    - name: Lock issue
      uses: OSDKDev/lock-issues@v1
      with:
        repo-token: {Token with permissions over the target repository / issue}
        owner-name: {Owner Name - Optional - Default: Context's Repository Owner}
        repo-name: {Repository Name - Optional - Default: Context's Repository}
        issue-number: {Issue Number - Optional - Default: Context's Issue}
