param(
    [Parameter(Mandatory=$true)]
    [string]$ComponentName,
    
    [Parameter(Mandatory=$true)]
    [string]$Description
)

# Colors for console output
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

function Run-Command {
    param(
        [string]$Command,
        [string]$Description
    )
    
    try {
        Write-ColorOutput "🔄 $Description..." "Blue"
        Invoke-Expression $Command
        Write-ColorOutput "✅ $Description completed" "Green"
    }
    catch {
        Write-ColorOutput "❌ $Description failed: $($_.Exception.Message)" "Red"
        exit 1
    }
}

function Test-GitStatus {
    try {
        $status = git status --porcelain
        if ($status) {
            Write-ColorOutput "⚠️  You have uncommitted changes. Please commit them first." "Yellow"
            return $false
        }
        return $true
    }
    catch {
        Write-ColorOutput "❌ Git is not initialized or not available" "Red"
        return $false
    }
}

function Start-ComponentIntegration {
    param(
        [string]$ComponentName,
        [string]$Description
    )
    
    Write-ColorOutput "🚀 Starting integration for: $ComponentName" "Green"
    
    # Check git status
    if (-not (Test-GitStatus)) {
        return
    }
    
    # Create a new branch
    $branchName = "feat/integrate-$($ComponentName.ToLower() -replace '\s+', '-')"
    Run-Command "git checkout -b $branchName" "Creating feature branch"
    
    # Run tests
    Run-Command "npm run type-check" "Running TypeScript check"
    Run-Command "npm run lint" "Running linting"
    
    # Build project
    Run-Command "npm run build" "Building project"
    
    # Add all changes
    Run-Command "git add ." "Staging changes"
    
    # Commit changes
    $commitMessage = "feat: integrate $ComponentName`n`n$Description"
    Run-Command "git commit -m `"$commitMessage`"" "Committing changes"
    
    # Push to remote
    Run-Command "git push origin $branchName" "Pushing to remote"
    
    Write-ColorOutput "🎉 Integration completed for $ComponentName!" "Green"
    Write-ColorOutput "📝 Branch: $branchName" "Blue"
    Write-ColorOutput "🔗 Create a pull request to merge into main" "Yellow"
}

# Validate parameters
if (-not $ComponentName -or -not $Description) {
    Write-ColorOutput "Usage: .\scripts\integrate-component.ps1 -ComponentName 'Component Name' -Description 'Description'" "Yellow"
    Write-ColorOutput "Example: .\scripts\integrate-component.ps1 -ComponentName 'Feature108' -Description 'Add responsive tabbed interface component'" "Blue"
    exit 1
}

Start-ComponentIntegration -ComponentName $ComponentName -Description $Description 