export type Locale = "pt" | "en";
const LOCALE_STORAGE_KEY = "siteLocale";

interface SiteData {
  header: {
    links: Array<{ title: string; to: string }>;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageLabel: string;
  };
  hero: {
    greeting: string;
    intro: string;
    name: string;
    imageAlt: string;
  };
  aboutMe: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  timeline: {
    subtitle: string;
    title: string;
    currentLabel: string;
    items: Array<{
      role: string;
      company: string;
      employment: string;
      period: string;
      location: string;
      current: boolean;
      description: string;
    }>;
  };
  phraseReveal: {
    phrase: string;
  };
  logoCarousel: {
    logos: Array<{ src: string; alt: string }>;
  };
  hearMyVoice: {
    subtitle: string;
    title: string;
    description: string;
    errorMessage: string;
    playLabel: string;
    iframeTitle: string;
    thumbnailAlt: string;
  };
  contacts: {
    subtitle: string;
    title: string;
    description: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
    };
  };
  footer: {
    brand: string;
    copyright: string;
    socialLinks: Array<{ label: string; href: string }>;
  };
  donate: {
    label: string;
    ariaLabel: string;
    href: string;
  };
}

const localizedData: Record<Locale, SiteData> = {
  pt: {
    header: {
      links: [
        {
          title: "Quem sou",
          to: "about-me",
        },
        {
          title: "Trajetória",
          to: "timeline",
        },
        {
          title: "Minha voz",
          to: "hear-my-voice",
        },
        {
          title: "Contatos",
          to: "contacts",
        },
      ],
      openMenuLabel: "Abrir menu",
      closeMenuLabel: "Fechar menu",
      languageLabel: "Idioma",
    },
    hero: {
      greeting: "Prazer,",
      intro: "sou",
      name: "Morato Custódio.",
      imageAlt: "Morato Custódio em fundo laranja",
    },
    aboutMe: {
      subtitle: "Conheça",
      title: "quem-sou",
      paragraphs: [
        "Sou Morato Custódio, empreendedor angolano apaixonado por um único problema: como levar inclusão financeira e digital aos milhões de angolanos que ainda estão fora do sistema convencional.",
        "Acredito que a verdadeira inovação em África nasce da necessidade — e é essa convicção que continua a guiar tudo o que construo. O meu objetivo vai além dos negócios: quero contribuir, em larga escala, para mudar de forma profunda a vida dos angolanos.",
      ],
      imageAlt: "Morato Custódio",
    },
    timeline: {
      subtitle: "Minha",
      title: "trajetória",
      currentLabel: "Atual",
      items: [
        {
          role: "Head of Fintech",
          company: "JETA Africa Holding",
          employment: "Tempo integral",
          period: "mar de 2026 - Atual · 5 meses",
          location: "Angola · Híbrido",
          current: true,
          description:
            "Liderando a vertical de fintech da JETA, conectando startups, ideias e investidores para escalar o acesso a serviços financeiros em toda a África.",
        },
        {
          role: "Board Member",
          company: "Lisa Pulsaris Electronica",
          employment: "Tempo integral",
          period: "set de 2025 - Atual · 11 meses",
          location: "Híbrido",
          current: true,
          description:
            "Após 10 anos a projetar, implementar e gerir a LP Electrónica, assumindo uma posição de conselho para abrir espaço a uma nova liderança.",
        },
        {
          role: "FinTech Business Developer",
          company: "JETA Africa Holding",
          employment: "Meio período",
          period: "jun de 2025 - mar de 2026 · 10 meses",
          location: "Luanda, Angola",
          current: false,
          description: "",
        },
        {
          role: "Presidente do Conselho de Administração",
          company: "Luanda City Football Club",
          employment: "Meio período",
          period: "jul de 2023 - Atual · 3 anos 1 mês",
          location: "Luanda, Angola · Híbrido",
          current: true,
          description:
            "Investindo no desporto e ajudando jovens jogadores a realizar o seu potencial, sendo um facilitador para quem nutre uma paixão profunda pelo futebol.",
        },
        {
          role: "Executive Director",
          company: "Lisa Pulsaris Electronica",
          employment: "Tempo integral",
          period: "jan de 2022 - set de 2025 · 3 anos 9 meses",
          location: "Luanda, Angola · Híbrido",
          current: false,
          description:
            "Acreditamos que a inclusão digital acelera o desenvolvimento africano — contribuindo para a adoção da internet através dos nossos produtos.",
        },
        {
          role: "Head Of Strategy",
          company: "WiConnect.co",
          employment: "Tempo integral",
          period: "out de 2021 - Atual · 4 anos 10 meses",
          location: "Luanda, Angola · Híbrido",
          current: true,
          description:
            "Damos aos parceiros a capacidade de oferecer acesso à internet gratuito aos seus clientes, processando dados para apoiar a tomada de decisão.",
        },
      ],
    },
    phraseReveal: {
      phrase: '"O maior recurso natural que Angola tem, é o próprio angolano."',
    },
    logoCarousel: {
      logos: [
        { src: "jeta-logo.svg", alt: "JETA Africa Holding" },
        { src: "obama-foundation-logo.svg", alt: "Obama Foundation" },
        { src: "wiConnect-logo.svg", alt: "WiConnect" },
        { src: "lpe-logo.svg", alt: "LP Electronics" },
      ],
    },
    hearMyVoice: {
      subtitle: "Ouça",
      title: "minha-voz",
      description: "Confira o último episódio de um podcast em que participei.",
      errorMessage: "Não foi possível carregar o episódio no momento.",
      playLabel: "Reproduzir episódio",
      iframeTitle: "Episódio mais recente",
      thumbnailAlt: "Prévia do episódio",
    },
    contacts: {
      subtitle: "entre em",
      title: "contacto",
      description:
        "Preencha o formulário para entrar em contacto comigo por e-mail ou acesse as minhas redes sociais abaixo.",
      form: {
        nameLabel: "Nome e sobrenome",
        namePlaceholder: "Nome e sobrenome",
        emailLabel: "Endereço de e-mail",
        emailPlaceholder: "Endereço de e-mail",
        messageLabel: "Mensagem",
        messagePlaceholder: "Mensagem...",
        submitLabel: "Submeter",
      },
    },
    footer: {
      brand: "Morato",
      copyright: "Todos direitos reservados",
      socialLinks: [
        { label: "X", href: "https://x.com/morato_custodio" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/morato.custodio/",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/moratocustodio",
        },
      ],
    },
    donate: {
      label: "Doar",
      ariaLabel: "Doar via PayPal",
      href: "https://www.paypal.com/paypalme/moratocustodio?country.x=PT&locale.x=en_US",
    },
  },
  en: {
    header: {
      links: [
        {
          title: "About me",
          to: "about-me",
        },
        {
          title: "Timeline",
          to: "timeline",
        },
        {
          title: "My voice",
          to: "hear-my-voice",
        },
        {
          title: "Contacts",
          to: "contacts",
        },
      ],
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      languageLabel: "Language",
    },
    hero: {
      greeting: "Nice to meet you,",
      intro: "I am",
      name: "Morato Custodio.",
      imageAlt: "Morato Custodio on an orange background",
    },
    aboutMe: {
      subtitle: "Get to know",
      title: "about-me",
      paragraphs: [
        "I am Morato Custodio, an Angolan entrepreneur passionate about one challenge: how to bring financial and digital inclusion to the millions of Angolans still outside the conventional system.",
        "I believe true innovation in Africa is born from necessity, and that conviction continues to guide everything I build. My goal goes beyond business: I want to contribute, at scale, to deeply transform the lives of Angolans.",
      ],
      imageAlt: "Morato Custodio",
    },
    timeline: {
      subtitle: "My",
      title: "timeline",
      currentLabel: "Current",
      items: [
        {
          role: "Head of Fintech",
          company: "JETA Africa Holding",
          employment: "Full-time",
          period: "Mar 2026 - Current · 5 months",
          location: "Angola · Hybrid",
          current: true,
          description:
            "Leading JETA's fintech vertical, connecting startups, ideas, and investors to scale access to financial services across Africa.",
        },
        {
          role: "Board Member",
          company: "Lisa Pulsaris Electronica",
          employment: "Full-time",
          period: "Sep 2025 - Current · 11 months",
          location: "Hybrid",
          current: true,
          description:
            "After 10 years designing, implementing, and managing LP Electronica, I took a board position to create space for new leadership.",
        },
        {
          role: "FinTech Business Developer",
          company: "JETA Africa Holding",
          employment: "Part-time",
          period: "Jun 2025 - Mar 2026 · 10 months",
          location: "Luanda, Angola",
          current: false,
          description: "",
        },
        {
          role: "Chairman of the Board",
          company: "Luanda City Football Club",
          employment: "Part-time",
          period: "Jul 2023 - Current · 3 years 1 month",
          location: "Luanda, Angola · Hybrid",
          current: true,
          description:
            "Investing in sport and helping young players achieve their potential, acting as a facilitator for those with a deep passion for football.",
        },
        {
          role: "Executive Director",
          company: "Lisa Pulsaris Electronica",
          employment: "Full-time",
          period: "Jan 2022 - Sep 2025 · 3 years 9 months",
          location: "Luanda, Angola · Hybrid",
          current: false,
          description:
            "We believe digital inclusion accelerates African development by driving internet adoption through our products.",
        },
        {
          role: "Head of Strategy",
          company: "WiConnect.co",
          employment: "Full-time",
          period: "Oct 2021 - Current · 4 years 10 months",
          location: "Luanda, Angola · Hybrid",
          current: true,
          description:
            "We enable partners to provide free internet access to their customers while processing data to support better decision-making.",
        },
      ],
    },
    phraseReveal: {
      phrase:
        '"The greatest natural resource Angola has is Angolans themselves."',
    },
    logoCarousel: {
      logos: [
        { src: "jeta-logo.svg", alt: "JETA Africa Holding" },
        { src: "obama-foundation-logo.svg", alt: "Obama Foundation" },
        { src: "wiConnect-logo.svg", alt: "WiConnect" },
        { src: "lpe-logo.svg", alt: "LP Electronics" },
      ],
    },
    hearMyVoice: {
      subtitle: "Listen to",
      title: "my-voice",
      description: "Check out the latest podcast episode where I was featured.",
      errorMessage: "Could not load the episode right now.",
      playLabel: "Play episode",
      iframeTitle: "Latest episode",
      thumbnailAlt: "Episode preview",
    },
    contacts: {
      subtitle: "get in",
      title: "touch",
      description:
        "Fill out the form to contact me by email or access my social networks below.",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "Full name",
        emailLabel: "Email address",
        emailPlaceholder: "Email address",
        messageLabel: "Message",
        messagePlaceholder: "Message...",
        submitLabel: "Submit",
      },
    },
    footer: {
      brand: "Morato",
      copyright: "All rights reserved",
      socialLinks: [
        { label: "X", href: "https://x.com/morato_custodio" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/morato.custodio/",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/moratocustodio",
        },
      ],
    },
    donate: {
      label: "Donate",
      ariaLabel: "Donate via PayPal",
      href: "https://www.paypal.com/paypalme/moratocustodio?country.x=PT&locale.x=en_US",
    },
  },
};

export function resolveSystemLocale(): Locale {
  if (
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("en")
  ) {
    return "en";
  }

  return "pt";
}

export function getPreferredLocale(): Locale {
  if (typeof localStorage !== "undefined") {
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (storedLocale === "pt" || storedLocale === "en") {
      return storedLocale;
    }
  }

  return resolveSystemLocale();
}

export function setPreferredLocale(locale: Locale): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }
}

export function getData(locale: Locale = resolveSystemLocale()): SiteData {
  return localizedData[locale];
}

export const data = getData(getPreferredLocale());
