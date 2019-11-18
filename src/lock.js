const github = require("@actions/github");
const core = require("@actions/core");

async function lock() {
  const myToken = core.getInput("repo-token");
  const octokit = new github.GitHub(myToken);
  const context = github.context;
  
  const issue = core.getInput("issue-number") || context.payload.issue.number;
  const repo = core.getInput("repo-name") || context.payload.repository.name;
  const owner = core.getInput("owner-name") || context.payload.repository.owner.login;

  console.log("Attempting to lock " + owner + "/" + repo + "/issues/" + issue);
  
  await octokit.issues.lock({
    owner: owner,
    repo: repo,
    issue_number: issue
  });
  
  return issue;
}

lock()
  .then(
    result => {
      console.log(`Locked issue #${result}.`);
    },
    err => {
      console.log(err);
    }
  )
  .then(() => {
    process.exit();
  });
