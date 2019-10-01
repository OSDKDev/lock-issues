Automatically lock issues, most commonly used on "close" event.

To add it to your workflow:

    - uses: Dunning-Kruger/lock-issues@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
Sample file: `.github/workflows/lock-closed-issues.yml`

    name: Lock closed issue

    on: 
      issues:
        types: [closed]

    jobs:
      lock:
        runs-on: ubuntu-latest
        steps:
        - uses: Dunning-Kruger/lock-issues@v1
          with:
            repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
As simple as that!
