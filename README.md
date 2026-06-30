# Collab Cycling — Next.js + Tailwind

Migración del sitio de Hostinger Website Builder a Next.js 14 (App Router) con i18n EN/ES y detección automática de idioma. Listo para Vercel.

## Stack

- **Next.js 14** App Router + TypeScript + middleware i18n
- **Tailwind 3** paleta *adventure/lifestyle* cálida (`cream`, `ink`, `kom` carmín)
- **Cormorant Garamond** (display) + **Inter** (body)
- **lucide-react** iconos
- Locales: `en` (default), `es` — detección por `Accept-Language` header

## Estructura

```
app/
  layout.tsx                        # Fonts, root HTML
  globals.css                       # Tokens + utilities (.eyebrow, .btn-*, .section, .display-h*)
  [locale]/
    layout.tsx                      # Header + footer + skip link
    page.tsx                        # Home
    training-camps/page.tsx
    alps-valloire/page.tsx          # Página estrella con climb data
    majorca/page.tsx
    team/page.tsx                   # Coming soon
    work-with-us/page.tsx
    blog/page.tsx                   # Coming soon
    faq/page.tsx                    # Accordion completo
    collaborators/page.tsx          # Coming soon
middleware.ts                       # Detección de idioma → redirect a /en o /es
components/
  site-header.tsx                   # + language switcher + dropdown info
  site-footer.tsx
  language-switcher.tsx
  contact-form.tsx                  # mailto fallback
  newsletter-form.tsx               # mailto fallback
  faq-accordion.tsx
  coming-soon.tsx
lib/
  i18n.ts                           # Locales + detectLocale()
  dictionary.ts                     # TODOS los strings EN + ES
  config.ts                         # Contacto, socials, climbs reales (Galibier 2642m, etc.)
scripts/
  download-assets.sh
```

## Despliegue

### Paso 0 — Descargar imágenes

```bash
bash scripts/download-assets.sh
```

Descarga ~28 imágenes desde el CDN de Hostinger a `public/images/{home,alps,mallorca,training,work}/`.

### Despliegue Vercel

```bash
npm install
npm run dev          # localhost:3000 → redirect automático a /en o /es
npx vercel --prod
```

O por GitHub → Vercel (importar repo, deploy auto).

## Contenido pendiente (importante)

Marcado en `lib/dictionary.ts` con comentarios. Lo que vi en el sitio original que **necesita acción**:

1. **`/team`** estaba con placeholder de Hostinger (texto de empresa de construcción + fotos stock con nombres inventados). Construido como "coming soon". Para activarla:
   - Añade los miembros reales en `lib/dictionary.ts` (clave `team`)
   - Sube fotos a `public/images/team/`
   - Reemplaza el contenido de `app/[locale]/team/page.tsx` con un grid (ver `app/[locale]/alps-valloire/page.tsx` como referencia de patrón)

2. **`/collaborators`** tenía 3 fotos sin nombres ni links. Mismo tratamiento que team.

3. **`/blog`** sin posts. Coming soon listo. Cuando tengas posts, decide entre MDX local o un CMS (Sanity).

4. **`/faq`** tenía un email `mcarbmont89@gmail.com` (tu Gmail personal) embebido en el texto. **Lo cambié a `contacto@collabcycling.com`**. Verifica que es lo correcto.

5. **Testimonios** del sitio original eran texto placeholder ("Absolutely thrilled with my purchase!") con fotos stock Unsplash. **No los migré**.

## i18n — cómo funciona

- `/` → middleware detecta `Accept-Language` del browser → redirect a `/en` o `/es`
- Si el idioma del browser no es ninguno de los 2, default `en`
- El usuario puede cambiar manualmente con el switcher en el header (EN · ES)
- Todos los strings centralizados en `lib/dictionary.ts` con tipado estricto — si añades una clave a `en`, TypeScript exige la traducción en `es`

## Climb data

`lib/config.ts` tiene los datos reales de los puertos (altitud, longitud, gradiente medio). Se usan en home y `/alps-valloire` como diseño-con-significado, no decoración. Fuentes: datos oficiales del Tour de France.

## Newsletter & contacto

- Newsletter (footer): `mailto:contacto@collabcycling.com` con asunto "Newsletter subscription". Cuando tengas Brevo/Mailchimp, cambia el handler en `components/newsletter-form.tsx`.
- Contacto (work-with-us): mismo patrón — `components/contact-form.tsx`.

## Challenge subdomain

`challenge.collabcycling.com` es subdominio aparte. El link en nav apunta external a `https://challenge.collabcycling.com/`. No requiere migración como parte de este proyecto.

---

Desarrollado por [QuAI Labs](https://quailabs.tech/).
