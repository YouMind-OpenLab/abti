#!/bin/bash
set -euo pipefail

# Sync skill.md and skill_zh.md from youmind.com to references/
# Usage:
#   ./scripts/sync-skill.sh          # Download and check for changes
#   ./scripts/sync-skill.sh --force   # Always download, skip freshness check

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
REF_DIR="$REPO_DIR/references"

FORCE=false
[[ "${1:-}" == "--force" ]] && FORCE=true

BASE_URL="https://youmind.com/abti-api"
FILES=("skill.md" "skill_zh.md")

mkdir -p "$REF_DIR"

CHANGED=false

for file in "${FILES[@]}"; do
  URL="$BASE_URL/$file"
  TARGET="$REF_DIR/$file"
  TMP=$(mktemp)

  echo "⬇️  Fetching $URL ..."

  if ! curl -fsSL --max-time 30 "$URL" -o "$TMP"; then
    echo "  ❌ Failed to download $file, skipping"
    rm -f "$TMP"
    continue
  fi

  # Check size — empty or tiny file means something went wrong
  SIZE=$(wc -c < "$TMP" | tr -d ' ')
  if [ "$SIZE" -lt 100 ]; then
    echo "  ❌ Downloaded file too small (${SIZE} bytes), skipping"
    rm -f "$TMP"
    continue
  fi

  # Compare with existing
  if [ -f "$TARGET" ] && diff -q "$TMP" "$TARGET" > /dev/null 2>&1; then
    echo "  ✅ $file unchanged (${SIZE} bytes)"
    rm -f "$TMP"
  else
    mv "$TMP" "$TARGET"
    echo "  📥 $file updated (${SIZE} bytes)"
    CHANGED=true
  fi
done

# Update timestamp
date -u +"%Y-%m-%dT%H:%M:%SZ" > "$REF_DIR/.last-updated"

if $CHANGED; then
  echo ""
  echo "🔄 References updated."
else
  echo ""
  echo "✅ All references up to date."
fi
