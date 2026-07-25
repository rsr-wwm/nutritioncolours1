<?php
/**
 * NutritionColours — Hostinger Emergency One-Click Git Deployment Repair Script.
 * Access via browser: https://nutritioncolours.com/deploy.php
 */

header('Content-Type: text/plain; charset=utf-8');
set_time_limit(300);
ini_set('memory_limit', '512M');

$repoUrl = 'https://github.com/rsr-wwm/nutritioncolours1.git';
$targetDir = __DIR__;

echo "=== NUTRITIONCOLOURS HOSTINGER ONE-CLICK DEPLOYMENT REPAIR ===\n";
echo "Target Directory: " . $targetDir . "\n";
echo "Remote Repository: " . $repoUrl . "\n";
echo "Time: " . date('Y-m-d H:i:s T') . "\n\n";

function runCmd($cmd, $dir) {
    echo "> " . $cmd . "\n";
    $output = [];
    $returnVar = 0;
    @exec("cd " . escapeshellarg($dir) . " && " . $cmd . " 2>&1", $output, $returnVar);
    echo implode("\n", $output) . "\n\n";
    return $returnVar === 0;
}

// 1. Check current git status
echo "[Current Git Commit]\n";
runCmd("git log -1 --oneline", $targetDir);

// 2. Initialize git repository if missing
if (!file_exists($targetDir . '/.git')) {
    echo "[Step 1] Initializing fresh Git repository in public_html...\n";
    runCmd("git init", $targetDir);
} else {
    echo "[Step 1] Existing .git folder found.\n";
}

// 3. Set remote origin
echo "[Step 2] Setting Git remote origin...\n";
runCmd("git remote remove origin", $targetDir);
runCmd("git remote add origin " . $repoUrl, $targetDir);

// 4. Fetch latest commits from GitHub main branch
echo "[Step 3] Fetching latest commit from GitHub...\n";
runCmd("git fetch origin main", $targetDir);

// 5. Force reset public_html to latest GitHub main commit
echo "[Step 4] Resetting public_html to origin/main...\n";
$resetSuccess = runCmd("git reset --hard origin/main", $targetDir);

// 6. Verify updated commit
echo "[Updated Git Commit]\n";
runCmd("git log -1 --oneline", $targetDir);

if ($resetSuccess) {
    echo "=== SUCCESS: DEPLOYMENT REPAIRED & SYNCED TO GITHUB MAIN! ===\n";
} else {
    echo "=== WARNING: Git reset encountered an issue. Checking status... ===\n";
    runCmd("git status", $targetDir);
}
