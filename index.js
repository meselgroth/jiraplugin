async function loadIssues(jql) {
    try {
        let responseText = await AP.request('/rest/api/2/search?jql=' + jql);
        let issues = JSON.parse(responseText);
        return issues;
    } catch (error) {
        return error;
    }
}

function renderIssues(issues){
    pgIssues.textContent = JSON.stringify(issues)
}

async function go(){
    const issues = await loadIssues('"Epic%20Link"%3DPR');
    renderIssues(issues);
}

document.getElementById('btnGo').onclick = go;
const pgIssues = document.getElementById('pgIssues')