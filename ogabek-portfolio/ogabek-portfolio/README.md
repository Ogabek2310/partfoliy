# Ogabek Portfolio

## Ishga tushirish
1. ZIP faylni oching.
2. `index.html` faylini brauzerda oching yoki VS Code Live Server orqali ishga tushiring.
3. O'zingiz haqingizdagi `[ ... ]` placeholder matnlarni HTML ichida almashtiring.

## Rasmlarni qo'yish
Rasmlarni `assets/images/` papkasiga joylang:
- `profile.jpg` — bosh sahifadagi portret
- `about.jpg` — About bo'limidagi rasm
- `project-1.jpg` ... `project-5.jpg` — loyiha rasmlari

HTML ichida har bir rasm uchun `<!-- <img ...> -->` qatori mavjud. Tegishli placeholder `div` ni olib tashlab, shu `img` qatorini izohdan chiqaring.

## CV
CV faylingizni `assets/images/cv.pdf` nomi bilan joylashtiring. Boshqa nom ishlatsangiz, `index.html` ichidagi Download CV havolasini o'zgartiring.

## O'zgartirish
- Ranglar: `css/style.css` faylining boshidagi `:root` o'zgaruvchilari.
- Matnlar, loyiha nomlari va havolalar: `index.html`.
- Skill foizlari: `data-width` va yonidagi foiz matni.
- Animatsiyalar va carousel: `js/script.js`.

## Eslatma
Contact form hozircha frontend demo va xabarni serverga yubormaydi. Haqiqiy yuborish uchun backend yoki Formspree kabi forma xizmati ulanishi kerak. Tashqi kutubxonalar CDN orqali yuklanadi, internet aloqasi talab qilinadi.
