#!/usr/bin/env bash
# One-shot helper: descarga imágenes, instala deps, inicializa git, primer commit.
# Después de esto solo queda: crear repo en GitHub + import en Vercel.
# Uso: bash scripts/deploy.sh

set -euo pipefail

echo "→ 1/4  Descargando imágenes desde el CDN de Hostinger…"
bash scripts/download-assets.sh

echo ""
echo "→ 2/4  Instalando dependencias…"
npm install --silent

echo ""
echo "→ 3/4  Verificando que compila…"
npm run build > /dev/null 2>&1 && echo "   ✓ Build OK" || { echo "   ✗ Build falló — revisa errores con: npm run build"; exit 1; }

echo ""
echo "→ 4/4  Inicializando repositorio Git…"
if [ ! -d ".git" ]; then
  git init -q
  git add .
  git commit -q -m "Initial migration from Hostinger to Next.js"
  echo "   ✓ Repo inicializado con primer commit"
else
  echo "   ✓ Repo ya existía, salto init"
fi

echo ""
echo "════════════════════════════════════════════════════════"
echo "  ✓ Todo listo. Siguiente paso:"
echo ""
echo "  Opción A (con gh CLI):"
echo "    gh repo create collabcycling --private --source=. --push"
echo ""
echo "  Opción B (manual):"
echo "    1. Crea repo en https://github.com/new (sin README)"
echo "    2. git remote add origin git@github.com:TU_USUARIO/collabcycling.git"
echo "    3. git branch -M main && git push -u origin main"
echo ""
echo "  Luego: vercel.com → Import Project → seleccionar el repo → Deploy"
echo "════════════════════════════════════════════════════════"
