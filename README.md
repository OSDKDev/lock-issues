Automatically lock issues, most commonly used on "close" event.

To add it to your workflow:

    - uses: Dunning-Kruger/lock-issues@1.0.0
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
A full example workflow:

    name: Lock closed issues

    on: 
      issues:
        types: [closed]

    jobs:
      triage:
        runs-on: ubuntu-latest
        steps:
        - uses: Dunning-Kruger/lock-issues@1.0.0
          with:
            repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
As simple as that!
