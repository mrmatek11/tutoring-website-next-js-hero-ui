export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "5-bledow-ktore-popelniasz-uczac-sie-angielskiego",
    title: "5 błędów, które popełniasz ucząc się angielskiego",
    excerpt: "Odkryj najczęstsze pułapki w nauce języka angielskiego i dowiedz się, jak ich uniknąć, aby szybciej osiągnąć swoje cele.",
    content: `
# 5 błędów, które popełniasz ucząc się angielskiego

Nauka angielskiego może być frustrująca, szczególnie gdy popełniamy te same błędy w kółko. Oto 5 najczęstszych pułapek i jak ich uniknąć.

## 1. Uczysz się tylko gramatyki

Wielu uczniów skupia się wyłącznie na regułach gramatycznych, zapominając o praktyce mówienia. **Gramatyka to tylko fundament** - prawdziwa nauka zaczyna się, gdy zaczynasz używać języka w praktyce.

### Co robić zamiast tego:
- Codziennie poświęć 15 minut na głośne czytanie
- Nagrywaj siebie mówiącego po angielsku
- Znajdź partnera do konwersacji

## 2. Boisz się popełniać błędy

Strach przed błędami paraliżuje. Pamiętaj: **błędy to część procesu nauki**. Każdy błąd to lekcja, która przybliża Cię do celu.

### Jak przełamać barierę:
- Zacznij od prostych zdań
- Mów do siebie w lustrze
- Pamiętaj, że perfekcja nie istnieje

## 3. Nie słuchasz wystarczająco dużo

Rozumienie ze słuchu to jedna z najtrudniejszych umiejętności. Bez regularnego słuchania Twój mózg nie przyzwyczai się do rytmu i melodii języka.

### Praktyczne wskazówki:
- Słuchaj podcastów podczas spaceru
- Oglądaj filmy z napisami angielskimi
- Zmieniaj język w telefonie na angielski

## 4. Uczysz się słów bez kontekstu

Zakuwanie list słówek to strata czasu. **Słowa bez kontekstu szybko się zapominają**.

### Lepsze podejście:
- Ucz się całych fraz
- Twórz własne zdania z nowymi słowami
- Używaj aplikacji z przykładami w kontekście

## 5. Nie masz planu nauki

Nauka bez celu to jak jazda bez mapy. Potrzebujesz jasnego planu i regularności.

### Jak stworzyć skuteczny plan:
- Wyznacz konkretny cel (np. "za 3 miesiące będę prowadzić 10-minutową rozmowę")
- Podziel cel na mniejsze kroki
- Śledź swoje postępy

## Podsumowanie

Unikanie tych błędów znacznie przyspieszy Twoją naukę. Pamiętaj: **konsystencja bije perfekcję**. Lepiej uczyć się 15 minut dziennie niż 3 godziny raz w tygodniu.

Potrzebujesz pomocy w stworzeniu skutecznego planu nauki? [Umów bezpłatną konsultację](https://calendly.com/linglow/30min) i porozmawiajmy o Twoich celach.
    `,
    author: "Lidia",
    authorAvatar: "/lidia.jpg",
    publishedAt: "2024-01-15",
    readTime: "5 min",
    category: "Nauka",
    tags: ["błędy", "nauka", "porady", "gramatyka", "mówienie"],
    featured: true,
    image: "/blog/blog-1.jpg",
    seo: {
      metaTitle: "5 błędów w nauce angielskiego, które Cię blokują | Linglow",
      metaDescription: "Odkryj 5 najczęstszych błędów w nauce angielskiego i dowiedz się, jak ich uniknąć. Praktyczne porady od doświadczonej nauczycielki.",
      keywords: ["nauka angielskiego", "błędy w angielskim", "jak uczyć się angielskiego", "porady językowe", "angielski online"]
    }
  },
  {
    id: 2,
    slug: "jak-przelamac-bariere-jezykowa-w-30-dni",
    title: "Jak przełamać barierę językową w 30 dni",
    excerpt: "Praktyczne strategie i ćwiczenia, które pomogą Ci zacząć mówić po angielsku z większą pewnością siebie.",
    content: `
# Jak przełamać barierę językową w 30 dni

Bariera językowa to jeden z największych wrogów każdego uczącego się języka. Oto sprawdzony plan na 30 dni, który pomoże Ci ją przełamać.

## Tydzień 1: Budowanie fundamentów pewności

### Dni 1-3: Przygotowanie mentalne
- **Dzień 1**: Zapisz swoje obawy związane z mówieniem po angielsku
- **Dzień 2**: Nagraj siebie mówiącego 2 minuty po polsku, potem po angielsku
- **Dzień 3**: Zdefiniuj swój cel - dlaczego chcesz mówić po angielsku?

### Dni 4-7: Pierwsze kroki
- Codziennie 10 minut głośnego czytania
- Powtarzanie za nagraniami (shadowing)
- Mówienie do siebie w lustrze

## Podsumowanie

Przełamanie bariery językowej to proces, nie jednorazowe wydarzenie. **Kluczem jest regularna praktyka i cierpliwość do siebie**.

Potrzebujesz wsparcia w przełamywaniu bariery językowej? [Umów się na bezpłatną konsultację](https://calendly.com/linglow/30min) i stwórzmy razem plan idealny dla Ciebie.
    `,
    author: "Lidia",
    authorAvatar: "/lidia.jpg",
    publishedAt: "2024-01-10",
    readTime: "7 min",
    category: "Motywacja",
    tags: ["pewność siebie", "mówienie", "praktyka", "bariera językowa", "30 dni"],
    featured: false,
    image: "/blog/blog-2.jpg",
    seo: {
      metaTitle: "Jak przełamać barierę językową w 30 dni - Plan krok po kroku | Linglow",
      metaDescription: "Sprawdzony 30-dniowy plan przełamania bariery językowej w angielskim. Praktyczne ćwiczenia i strategie dla pewności siebie.",
      keywords: ["bariera językowa", "pewność siebie angielski", "jak mówić po angielsku", "przełamać strach", "rozmowa po angielsku"]
    }
  },
  {
    id: 3,
    slug: "najlepsze-aplikacje-do-nauki-angielskiego-2024",
    title: "Najlepsze aplikacje do nauki angielskiego w 2024",
    excerpt: "Przegląd najskuteczniejszych aplikacji mobilnych, które pomogą Ci w nauce angielskiego - od początkującego do zaawansowanego.",
    content: `
# Najlepsze aplikacje do nauki angielskiego w 2024

W dzisiejszych czasach smartfon może być Twoim najlepszym nauczycielem angielskiego. Oto przegląd aplikacji, które rzeczywiście działają.

## Aplikacje do słownictwa

### 1. Anki - Król fiszek
**Cena**: Darmowa (iOS płatne)
**Najlepsze dla**: Zapamiętywania słownictwa długoterminowego

Anki wykorzystuje system powtórek rozłożonych w czasie.

## Podsumowanie

Najlepsza aplikacja to ta, której będziesz używać regularnie. Zacznij od jednej, opanuj ją, a potem dodawaj kolejne.
    `,
    author: "Lidia",
    authorAvatar: "/lidia.jpg",
    publishedAt: "2024-01-05",
    readTime: "6 min",
    category: "Nauka",
    tags: ["aplikacje", "technologia", "słownictwo", "narzędzia"],
    featured: false,
    image: "/blog/blog-3.jpg",
    seo: {
      metaTitle: "Najlepsze aplikacje do nauki angielskiego 2024 | Linglow",
      metaDescription: "Przegląd najskuteczniejszych aplikacji mobilnych do nauki angielskiego. Sprawdzone narzędzia dla każdego poziomu.",
      keywords: ["aplikacje do angielskiego", "nauka angielskiego aplikacje", "mobilne aplikacje językowe", "anki", "duolingo"]
    }
  },
  {
    id: 4,
    slug: "business-english-podstawy-komunikacji-w-pracy",
    title: "Business English - podstawy komunikacji w pracy",
    excerpt: "Naucz się kluczowych zwrotów i technik komunikacji w środowisku biznesowym. Praktyczne porady dla profesjonalistów.",
    content: `
# Business English - podstawy komunikacji w pracy

Komunikacja w środowisku biznesowym wymaga specjalnego podejścia. Oto najważniejsze zasady i zwroty.

## Podstawowe zwroty biznesowe

### Rozpoczynanie spotkań
- "Let's get started" - Zaczynajmy
- "Thank you all for coming" - Dziękuję wszystkim za przybycie
- "Let's go over the agenda" - Przejrzyjmy agendę

### Wyrażanie opinii
- "In my opinion..." - Moim zdaniem...
- "I believe that..." - Uważam, że...
- "From my perspective..." - Z mojej perspektywy...

## Email biznesowy

### Rozpoczęcie
- "I hope this email finds you well" - Mam nadzieję, że ten email zastanie Cię w dobrym zdrowiu
- "Thank you for your prompt response" - Dziękuję za szybką odpowiedź

### Zakończenie
- "Please let me know if you have any questions" - Proszę daj znać, jeśli masz pytania
- "I look forward to hearing from you" - Czekam na odpowiedź

## Podsumowanie

Business English to umiejętność, która otwiera drzwi do kariery międzynarodowej. Warto w nią zainwestować.
    `,
    author: "Lidia",
    authorAvatar: "/lidia.jpg",
    publishedAt: "2024-01-01",
    readTime: "8 min",
    category: "Business",
    tags: ["business english", "praca", "komunikacja", "email", "spotkania"],
    featured: false,
    image: "/blog/blog-4.jpg",
    seo: {
      metaTitle: "Business English - podstawy komunikacji biznesowej | Linglow",
      metaDescription: "Naucz się kluczowych zwrotów i technik komunikacji w środowisku biznesowym. Praktyczne porady dla profesjonalistów.",
      keywords: ["business english", "angielski biznesowy", "komunikacja w pracy", "email po angielsku", "spotkania biznesowe"]
    }
  },
  {
    id: 5,
    slug: "angielski-w-podrozy-niezbedne-zwroty",
    title: "Angielski w podróży - niezbędne zwroty",
    excerpt: "Przygotuj się na podróż z tym praktycznym przewodnikiem po najważniejszych zwrotach w języku angielskim dla podróżników.",
    content: `
# Angielski w podróży - niezbędne zwroty

Podróżowanie to najlepsza motywacja do nauki języków. Oto zwroty, które przydadzą Ci się w każdej podróży.

## Na lotnisku

### Check-in
- "I'd like to check in for my flight" - Chciałbym się odprawić na lot
- "Can I have a window seat?" - Czy mogę prosić o miejsce przy oknie?
- "Is my flight on time?" - Czy mój lot jest punktualny?

### Kontrola bezpieczeństwa
- "Please put your electronics in the tray" - Proszę włożyć elektronikę do tacki
- "Remove your shoes" - Proszę zdjąć buty

## W hotelu

### Zameldowanie
- "I have a reservation under..." - Mam rezerwację na nazwisko...
- "What time is check-out?" - O której jest wymeldowanie?
- "Could I have a wake-up call?" - Czy mogę prosić o budzenie?

### Problemy
- "The air conditioning isn't working" - Klimatyzacja nie działa
- "Could I get extra towels?" - Czy mogę prosić o dodatkowe ręczniki?

## W restauracji

### Zamawianie
- "Could I see the menu?" - Czy mogę zobaczyć menu?
- "I'll have..." - Poproszę...
- "Could I get the check?" - Czy mogę prosić o rachunek?

## Podsumowanie

Te podstawowe zwroty pomogą Ci poczuć się pewniej podczas podróży. Pamiętaj - ludzie doceniają próby komunikacji w ich języku!
    `,
    author: "Lidia",
    authorAvatar: "/lidia.jpg",
    publishedAt: "2023-12-28",
    readTime: "5 min",
    category: "Podróże",
    tags: ["podróże", "zwroty", "praktyka", "hotel", "restauracja"],
    featured: false,
    image: "/blog/blog-5.jpg",
    seo: {
          metaTitle: "Angielski w podróży - niezbędne zwroty | Linglow",
      metaDescription: "Przygotuj się na podróż z tym praktycznym przewodnikiem po najważniejszych zwrotach w języku angielskim dla podróżników.",
      keywords: ["angielski w podróży", "zwroty podróżnicze", "angielski dla turystów", "hotel po angielsku", "restauracja po angielsku"]
    }
  }
];

export const categories = ["Wszystkie", "Nauka", "Motywacja", "Business", "Podróże"];

// Funkcje pomocnicze
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "Wszystkie") return getAllPosts();
  return blogPosts.filter(post => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRelatedPosts(currentPostId: number, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
