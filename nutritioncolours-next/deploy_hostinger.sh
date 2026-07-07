#!/usr/bin/env bash

# Hostinger static site deployment script
# Usage: ./deploy_hostinger.sh [--dry]
#   --dry   Show the ftp commands that would be executed without uploading.

set -euo pipefail

# ---- Configuration ---------------------------------------------------------
# These environment variables should be set in your shell or in a .env file.
#   HOSTINGER_FTP_HOST   – e.g., ftp.yourdomain.com
#   HOSTINGER_FTP_USER   – FTP username
#   HOSTINGER_FTP_PASS   – FTP password (keep secret!)
#   HOSTINGER_REMOTE_DIR – Remote directory where the site should be uploaded (usually /public_html)
# ---------------------------------------------------------------------------

# Load .env if present (but do not export variables that already exist)
if [[ -f .env ]]; then
  export $(grep -v '^#' .env | xargs)
fi

# Verify required variables
: "${HOSTINGER_FTP_HOST:?Missing HOSTINGER_FTP_HOST}" 
: "${HOSTINGER_FTP_USER:?Missing HOSTINGER_FTP_USER}" 
: "${HOSTINGER_FTP_PASS:?Missing HOSTINGER_FTP_PASS}" 
: "${HOSTINGER_REMOTE_DIR:?Missing HOSTINGER_REMOTE_DIR}" 

# Determine if we are doing a dry run
DRY=false
for arg in "$@"; do
  if [[ "$arg" == "--dry" ]]; then
    DRY=true
  fi
done

# Build the static site (Astro default output directory is ./dist)
npm run build

# Verify the build output exists
if [[ ! -d dist ]]; then
  echo "Error: Build output directory 'dist' not found."
  exit 1
fi

# Prepare lftp command script
LFTP_SCRIPT=$(cat <<'EOF'
set ssl:verify-certificate no
open -u "$HOSTINGER_FTP_USER","$HOSTINGER_FTP_PASS" "$HOSTINGER_FTP_HOST"
cd "$HOSTINGER_REMOTE_DIR"
mirror -R --ignore-time --verbose --dereference ./dist .
quit
EOF
)

if $DRY; then
  echo "--- DRY RUN ----------------------------------------------------"
  echo "Would execute the following lftp commands:"
  echo "$LFTP_SCRIPT"
else
  echo "--- Deploying to Hostinger ------------------------------------"
  echo "$LFTP_SCRIPT" | lftp -c "-f -"
  echo "Deployment complete."
fi
