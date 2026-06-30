#!/usr/bin/env bash
# Downloads all images from the Hostinger/Zyro CDN into public/images/
# Run once locally: bash scripts/download-assets.sh
# Requires: curl

set -euo pipefail

BASE="https://assets.zyrosite.com/Ylev1bw46puyxoE8"
OUT="public/images"

echo "→ Downloading assets from Zyro CDN to $OUT/"
mkdir -p "$OUT" "$OUT/home" "$OUT/alps" "$OUT/mallorca" "$OUT/training" "$OUT/work"

dl() {
  local src="$1" dst="$2"
  if [ -f "$OUT/$dst" ]; then
    echo "   ✓ $dst (cached)"; return
  fi
  echo "   ↓ $dst"
  curl -fsSL "$BASE/$src" -o "$OUT/$dst" || echo "   ✗ FAILED: $src"
}

echo ""
echo "── Logo & brand ──────────────────────────────────"
dl "img-20241016-wa0022-removebg-preview-A0xwEzKx58u5Kv6p.png"  "logo.png"

echo ""
echo "── Home page ─────────────────────────────────────"
dl "banner-collab-9-AGBbwav12OH8LDvP.png"                     "home/hero.png"
dl "img_4116-AVLaODVQgeFZWq5Z.JPEG"                           "home/tdf-roads.jpg"
dl "7-days-in-the-french-alps-m7VwaW3Nr1ul39wn.png"           "home/alps-card.jpg"
dl "tram-A3Qw3lpljMhwbE8o.png"                                "home/mallorca-card.jpg"
dl "119b4cc7-774e-4b14-a19d-6a94560f034a-YNq2zXJ2o4fe6pGq.jpg" "home/our-trainings.jpg"
dl "captura-desde-2025-06-08-23-01-43-AzGNRo9Zq3UXrZ23.png"   "home/experience-01.png"
dl "d5ae238d-e176-47e5-a0af-e4bece0233b6-Yyv0ek0XvOtw1WNN.jpg" "home/experience-02.jpg"
dl "chaoki-A1awMOJbJ6h5ogqJ.png"                              "home/experience-03.png"
dl "groupgallery-A85VaOOD6XS469Xa.png"                        "home/experience-04.png"
dl "captura-desde-2025-06-08-22-53-30-m2WEg3yW26F4bOXA.png"   "home/blog-01.png"
dl "captura-desde-2025-06-08-23-12-45-ALpPVKozMgt5xV0g.png"   "home/blog-02.png"

echo ""
echo "── Training camps overview ───────────────────────"
dl "test-mk3JR6le1xc1GXWD.png"                                  "training/alps-card.png"
dl "93bde5a6-66fb-41e5-a28a-6cd1cfcab5e3-YbNJRwGwzlsN00Rx.jpg"  "training/mallorca-card.jpg"
dl "alpes-AE0a1jPg0Xi94B69.png"                                 "training/alps-hero.png"

echo ""
echo "── Alps Valloire ─────────────────────────────────"
dl "test-mk3JR6le1xc1GXWD.png"        "alps/hero.png"
dl "alpes-AE0a1jPg0Xi94B69.png"       "alps/why-valloire.png"
dl "banner-collab-3-dWxOR5e0zrFnK55x.png"  "alps/pro-treatment.png"
dl "1-AE0rRnP889trXPbb.png"           "alps/gallery-01.png"
dl "2-AMq8RE1ByGU1EbL5.png"           "alps/gallery-02.png"
dl "3-AVLaM87vvruVwbk0.png"           "alps/gallery-03.png"
dl "4-A1a5RxPnnOIn2bbx.png"           "alps/gallery-04.png"

echo ""
echo "── Mallorca ──────────────────────────────────────"
dl "6-m5KLz5qDebCjpZQD.jpg"  "mallorca/hero.jpg"
dl "5-YbNqWPQXJMi77jla.jpg"  "mallorca/secondary.jpg"

echo ""
echo "── Work with us ──────────────────────────────────"
dl "banner-collab-10-A1a5Mxzqb4cM69rz.png"  "work/hero.png"
dl "img_4445-A0xjDGxMxZHkeEe7.JPEG"         "work/team-moment.jpg"
dl "img_4107---copie-m5Kn1EGZVMuODQbJ.JPEG" "work/team-moment-2.jpg"
dl "hero-dOqDR7akkxtov3wl.png"              "work/location.png"

echo ""
echo "✓ Done. Check $OUT/ — total files:"
find "$OUT" -type f | wc -l
