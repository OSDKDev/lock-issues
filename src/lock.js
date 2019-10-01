const github = require("@actions/github");
const core = require("@actions/core");

async function lock() {
  const myToken = core.getInput("repo-token");
  const octokit = new github.GitHub(myToken);
  const context = github.context;

  await octokit.issues.lock({
    owner: context.payload.repository.owner.login,
    repo: context.payload.repository.name,
    issue_number: context.payload.issue.number
  });
  
  return context.payload.issue.number;
}

label()
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
